import React, { useState, useEffect } from 'react';
import { View, StatusBar, Alert, Picker } from 'react-native';
import { DatePicker, Toast } from 'native-base';
import axios from 'axios';
import styles from './styles';
/**
 * Import de componentes
 */
import MaskedInputComponent from '../../components/MaskedInput'
import ButtonComponent from '../../components/Button'
import LoadingComponent from '../../components/Loading';

const NewRecordScreen = ({ navigation }) => {
    const [ type, setType ] = useState('')
    const [ date, setDate ] = useState('')
    const [ km, setKm ] = useState('')
    const [ lt, setLt ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ isLoading, setIsLoading ] = useState('')
    const user = {
        name: navigation.getParam('user'),
        uid: navigation.getParam('uid')
    }

    const saveRecord = async () => {
        if(type && date && km && lt && price){
            setIsLoading(true)
            const record = {
                type,
                date,
                startKM: km,
                endKM: type == 'oil' ? (km+1000) : km,
                price,
                liters: lt,
                uid: user.uid
            }
            try {
                await axios.post(`https://motoka-backend.herokuapp.com/${type}`, record)
                const alertMessage = `${type == 'oil' ? 'Troca de Óleo' : 'Abastecimento'} registrado com sucesso.`
                Alert.alert(
                    'Sucesso',
                    alertMessage,
                    [
                        { text: 'OK', onPress: () => navigation.navigate('Home') }
                    ]
                )
            }
            catch(e){
                Toast.show({
                    text: 'Não foi possível gravar o registro. Verifique a sua conexão e tente novamente.',
                    buttonText: 'OK',
                    position: 'center',
                    duration: 3000
                })
                console.log(e)
            }
        } else {
            Toast.show({
                text: 'Verifique os campos e tente novamente.',
                buttonText: 'OK',
                position: 'center',
                duration: 2000
            })
        }
        setIsLoading(false)
    }

    return(
        <View>
            <StatusBar backgroundColor='#7D40E7' barStyle='light-content'/>
            <Picker
                mode='dialog'
                selectedValue={type}
                placeholder='Tipo'
                onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
                <Picker.Item label='Troca de Óleo' value='oil'/>
                <Picker.Item label='Abastecimento' value='gas'/>
            </Picker>
            <DatePicker
                defaultDate={date || new Date()}
                maximumDate={new Date()}
                locale={'br'}
                modalTransparent={false}
                animationType={'slide'}
                androidMode={'calendar'}
                placeHolderText={'Selecione a data'}
                onDateChange={date => setDate(date)}/>
            <MaskedInputComponent
                placeholder='KM'
                onChangeText={(maskedText, rawText) => setKm(rawText)}
                value={km}
                type='km'
                typeStyle='secondary'/>
            <MaskedInputComponent
                placeholder='Litros'
                onChangeText={(maskedText, rawText) => setLt(rawText)}
                value={lt}
                type='lt'
                typeStyle='secondary'/>
            <MaskedInputComponent
                placeholder='Valor'
                onChangeText={(maskedText, rawText) => setPrice(rawText)}
                value={price }
                type='money'
                typeStyle='secondary'/>
            {
                isLoading
                ?
                <LoadingComponent color='#7D40E7'/>
                :
                <ButtonComponent
                    title='Salvar'
                    type='secondary'
                    onPress={() => saveRecord()}/>
            }
        </View>
    )
}

export default NewRecordScreen;