import React from 'react';
import { Input } from 'react-native-elements';

import styles from './styles'

const InputComponent = (props) => {
    return(
        <Input
            label={props.label}
            labelStyle={props.type == 'primary' ? styles.primaryLabel : styles.secondaryLabel}
            inputStyle={props.type == 'primary' ? styles.primaryLabel : styles.secondaryLabel}
            inputContainerStyle={props.type == 'primary' ? styles.primaryInput : styles.secondaryInput}
            containerStyle={styles.container}
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