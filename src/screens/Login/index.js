import React, { useState, useEffect } from 'react';
import { View, StatusBar, Alert } from 'react-native';
import axios from 'axios';

import styles from './styles'
import InputComponent from '../../components/Input'
import ButtonComponent from '../../components/Button'
import LoadingComponent from '../../components/Loading';

const LoginScreen = ({ navigation }) => {
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const login = async () => {
        setLoading(true)
        if(email && pass){
            const response = await axios.post('http://motoka-backend.herokuapp.com/auth', { email, pass })
            if(response.status == 200){
                navigation.navigate('Home')
            } else {
                Alert.alert(
                    'Falha no Login',
                    'Verifique se o email e/ou a senha estão corretas. Caso não tenha cadastro, clique em cadastrar.',
                    [
                        { text: 'OK', onPress: () => {}},
                    ]
                )
            }
        } else {
            alert('Teste')
        }
        setLoading(false)
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#7D40E7' barStyle='light-content'/>
            <InputComponent
                label='Email'
                inputStyle='primary'
                autoCapitalize='none'
                value={email}
                onChangeText={value => setEmail(value)}/>
            <InputComponent
                label='Senha'
                inputStyle='primary'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={value => setPass(value)}/>
            {
                loading
                ?
                <LoadingComponent color='#FFF'/>
                :
                <>
                    <ButtonComponent
                        title='Entrar'
                        titleStyle='titlePrimary'
                        buttonStyle='buttonPrimary'
                        onPress={() => login()}/>
                    <ButtonComponent
                        title='Cadastrar'
                        titleStyle='titleSecondary'
                        buttonStyle='buttonSecondary'
                        onPress={() => navigation.navigate('New User')}/>
                </>
            }
        </View>
    )
};

export default LoginScreen