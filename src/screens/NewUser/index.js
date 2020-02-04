import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import { Toast } from 'native-base';
import axios from 'axios';
import styles from './styles'
/**
 * Import de componentes
 */
import ButtonComponent from '../../components/Button'
import InputComponent from '../../components/Input'
import LoadingComponent from '../../components/Loading'

const NewUserScreen = ({ navigation }) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ emailConfirm, setEmailConfirm ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ passConfirm, setPassConfirm ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const createNewUser = async () => {
        setLoading(true)
        if(email != emailConfirm || pass != passConfirm){
            Toast.show({
                text: 'Confirme o email e/ou senha.',
                buttonText: 'OK',
                position: 'center',
            })
        } else if(!name || !email || !pass){
            Toast.show({
                text: 'Preencha todos os campos.',
                buttonText: 'OK',
                position: 'center',
            })

        } else {
            const user = {
                displayName: name,
                email,
                password: pass
            }
            const response = await axios.post('https://motoka-backend.herokuapp.com/createuser', user)
            if(response.status == 200){
                Alert.alert(
                    'Usuário Cadastrado',
                    `Usuário '${name}' cadastrado com sucesso. Para continuar, faça login na próxima tela.`,
                    [
                        { text: 'OK', onPress: () => navigation.goBack() }
                    ]
                )
            } else {
                Alert.alert(
                    'Usuário Não Cadastrado',
                    'Usuário não cadastrado. Verifique sua conexão e tente novamente.',
                    [
                        { text: 'OK', onPress: () => {} }
                    ]
                )
            }
        }
        setLoading(true)
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#7D40E7' barStyle='light-content'/>
            <InputComponent
                label='Nome'
                type='secondary'
                autoCapitalize='words'
                value={name}
                onChangeText={value => setName(value)}/>
            <InputComponent
                label='Email'
                type='secondary'
                autoCapitalize='none'
                value={email}
                onChangeText={value => setEmail(value)}/>
            <InputComponent
                label='Confirmação do Email'
                type='secondary'
                autoCapitalize='none'
                value={emailConfirm}
                onChangeText={value => setEmailConfirm(value)}/>
            <InputComponent
                label='Senha'
                type='secondary'
                autoCapitalize='none'
                secureTextEntry={true}
                value={pass}
                onChangeText={value => setPass(value)}/>
            <InputComponent
                label='Confirmação da Senha'
                type='secondary'
                autoCapitalize='none'
                secureTextEntry={true}
                value={passConfirm}
                onChangeText={value => setPassConfirm(value)}/>
            {
                loading
                ?
                <>
                    <LoadingComponent
                        color='#7D40E7'/>
                </>
                :
                <>
                    <ButtonComponent
                        title='Salvar'
                        type='secondary'
                        onPress={() => createNewUser()}/>
                </>
            }
        </View>
    )
};

export default NewUserScreen;