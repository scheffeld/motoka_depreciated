import React from 'react';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles'

const MaskedInputComponent = (props) => {
    const money = {
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: 'R$ ',
        suffixUnit: ''
    }
    const lt = {
        precision: 1,
        separator: ',',
        delimiter: '.',
        unit: 'L ',
        suffixUnit: ''
    }
    const km = {
        precision: 1,
        separator: '.',
        delimiter: ',',
        unit: 'KM ',
        suffixUnit: ''
    }
    return (
        <TextInputMask
            type={'money'}
            options={props.type == 'money' ? money : props.type == 'km' ? km : lt}
            placeholder={props.placeholder}
            placeholderTextColor={props.typeStyle == 'primary' ? 'rgba(255, 255, 255, 0.7)' : '#ACACAC'}
            value={props.value}
            includeRawValueInChangeText={true}
            onChangeText={props.onChangeText}
            style={[styles.input, styles[props.typeStyle]]}
            underlineColorAndroid={props.typeStyle == 'primary' ? '#FFF' : '#ACACAC'}/>
    )
}

export default MaskedInputComponent;