import React from 'react';
import { Button } from 'react-native-elements';
import { Icon } from 'native-base';
import styles from './styles'

const ButtonComponent = (props) => (
    <Button
        title={props.title}
        titleStyle={props.type == 'primary' ? [styles.title, styles.primaryTitle] : [styles.title, styles.secondaryTitle ]}
        buttonStyle={props.type == 'primary' ? [styles.button, styles.primaryButton] : [styles.button, styles.secondaryButton ]}
        onPress={props.onPress}
        disabled={props.disabled}
        containerStyle={styles.containerStyle}
        icon={ props.icon || false }/>
);

export default ButtonComponent