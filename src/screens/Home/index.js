import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Alert } from 'react-native';
import { Fab, Button, Icon, Toast } from 'native-base';
import axios from 'axios';
import styles from './styles';
import { NavigationEvents } from 'react-navigation';
/**
 * Import de componentes
 */
import ItemComponent from '../../components/Item';
import ModalComponent from '../../components/Modal';
import RecordDetailsComponent from '../../components/RecordDetails';
import LoadingComponent from '../../components/Loading';

const HomeScreen = ({ navigation }) => {
    const [ data, setData ] = useState([])
    const [ modal, setModal ] = useState(false)
    const [ record, setRecord ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const user = {
        name: navigation.getParam('user'),
        uid: navigation.getParam('uid')
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('didFocus', async () => {
            const response = await axios.get('https://motoka-backend.herokuapp.com/all')
            setData(response.data)
            setIsLoading(false)
        })
        return unsubscribe
    }, [navigation])

    const openModal = (item) => {
        setRecord(item)
        setModal(!modal)
    }

    const removeItem = (item) => {
        if(data.indexOf(item) > -1){
            const startArray = data.splice(0, data.indexOf(item))
            const endArray = data.splice((data.indexOf(item) + 1))
            setData([...startArray, ...endArray])
            setModal(false)
        } else {
            Toast.show({
                text: 'Não foi possível excluir esse item. Tente novamente.',
                buttonText: 'OK'    
            })
        }
    }

    const deleteRecord = async (source) => {
        Alert.alert(
            'Exclusão de Item',
            `Deseja realmente excluir esse registro? Isso não pode ser desfeito.`,
            [
                { 
                    text: 'Excluir',
                    onPress: () => {
                        try {
                            axios.delete(`https://motoka-backend.herokuapp.com/${source.type}/${source.id}`)
                            removeItem(source)
                        }
                        catch(e){
                            Toast.show({
                                text: 'Não foi possível excluir esse item. Tente novamente.',
                                buttonText: 'OK'    
                            })
                            console.log(e)
                        }   
                    }
                },
                {
                    text: 'Cancelar',
                    onPress: () => {}
                }
            ]
        )
    }

    return(
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#7D40E7' barStyle='light-content'/>
            {
                isLoading
                ?
                <LoadingComponent color='#7D40E7'/>
                :
                data.map(item => <ItemComponent key={item.id} item={item} onPress={() => openModal(item)}/>)
            }
            <ModalComponent visible={modal}>
                <RecordDetailsComponent
                    source={record}
                    onPressCancel={() => setModal(false)}
                    onPressDelete={() => deleteRecord(record)}/>
            </ModalComponent>
            <Fab
                active={true}
                direction="up"
                style={{ backgroundColor: '#7D40E7' }}
                position="bottomRight"
                onPress={() => navigation.navigate('New Record', user)}>
                <Icon name="plus" type='FontAwesome5' color='#FFF'/>
            </Fab>
        </View>
    )
};

export default HomeScreen;