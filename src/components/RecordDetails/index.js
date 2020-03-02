import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles'

import ButtonComponent from '../Button'

const RecordDetailsComponent = (props) => {
    const record = props.source
    return(
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{ record.type == 'oil' ? 'Troca de Óleo' : 'Abastecimento' }</Text>
            </View>
            <View style={styles.body}>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Data: </Text>
                    <Text>{record.date}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.title}>KM: </Text>
                    <Text>{record.startKM}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Litros: </Text>
                    <Text>{record.liters}</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={styles.title}>Total: </Text>
                    <Text>R$ {record.price}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch'}}>
                <ButtonComponent
                    type='primary'
                    icon={<Icon name='trash' type='FontAwesome5' style={{ color: '#7D40E7', fontSize: 20 }}/>}
                    onPress={props.onPressDelete}/>
                <ButtonComponent
                    title='Cancelar'
                    type='primary'
                    onPress={props.onPressCancel}/>
                <ButtonComponent
                    type='primary'
                    icon={<Icon name='pen' type='FontAwesome5' style={{ color: '#7D40E7', fontSize: 20 }}/>}
                    onPress={props.onPressEdit}/>
            </View>
        </>
    )
};

export default RecordDetailsComponent;