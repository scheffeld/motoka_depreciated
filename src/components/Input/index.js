import React from 'react';
import { Input } from 'react-native-elements';

import styles from './styles'

const InputComponent = (props) => {
    return(
        <Input
            label={props.label}
            labelStyle={styles[props.inputStyle]}
            inputContainerStyle={styles[props.inputStyle]}
            inputStyle={styles[props.inputStyle]}
            containerStyle={styles.containerStyle}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onChangeText={props.onChangeText}
            value={props.value}
            autoCapitalize={props.autoCapitalize}
            secureTextEntry={props.secureTextEntry}
            keyboardAppearance={props.keyboardAppearance}/>
    )
};

export default InputComponent;