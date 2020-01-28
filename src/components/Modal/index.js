import React from 'react';
import { View, Text } from 'native-base';
import { Modal } from 'react-native';
import styles from './styles'

const ModalComponent = (props) => (
    <Modal
        animated={true}
        animationType='fade'
        visible={props.visible}
        transparent={true}>
            <View style={styles.container}>
                <View style={styles.modal}>
                    {props.children}
                </View>
            </View>

    </Modal>
);

export default ModalComponent;