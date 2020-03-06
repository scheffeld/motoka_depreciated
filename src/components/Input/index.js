import React, { useState } from 'react';
import { Input } from 'react-native-elements';

import styles from './styles'

const InputComponent = (props) => {
    return(
        <Input
            inputStyle={props.type == 'primary' ? styles.primary : styles.secondary}
            inputContainerStyle={props.type == 'primary' ? styles.primaryInput : styles.secondaryInput}
            containerStyle={styles.container}
            placeholder={props.placeholder}
            placeholderTextColor={props.type == 'primary' ? 'rgba(255, 255, 255, 0.5)' : '#ACACAC' }
            onChange={props.onChange}
            onChangeText={props.onChangeText}
            value={props.value}
            autoCapitalize={props.autoCapitalize}
            secureTextEntry={props.secureTextEntry}
            keyboardAppearance={props.keyboardAppearance}/>
    )
};

export default InputComponent;