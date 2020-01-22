import React from 'react';
import { Button } from 'react-native-elements';
import styles from './styles'

const ButtonComponent = (props) => (
    <Button
        title={props.title}
        titleStyle={[ styles.titleStyle, styles[props.titleStyle] ]}
        buttonStyle={[ styles.buttonStyle, styles[props.buttonStyle] ]}
        onPress={props.onPress}
        disabled={props.disabled}
        containerStyle={styles.containerStyle}/>
);

export default ButtonComponent