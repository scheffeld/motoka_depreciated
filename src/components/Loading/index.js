import React from 'react';
import { ActivityIndicator } from 'react-native'
import styles from './styles'

const LoadingComponent = (props) => (
    <ActivityIndicator
        size={props.size || 'large'}
        color={props.color}
        animating={true}
        style={styles.container}/>
);

export default LoadingComponent;