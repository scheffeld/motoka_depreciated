import React from 'react';
import { ListItem, Left, Body, Right } from 'native-base';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native';
import styles from './styles'

const ItemComponent = (props) => {
    const item = props.item
    return(
        <ListItem key={props.key} style={styles.item} onPress={props.onPress}>
            <Left>
                <Text>{item.date}</Text>
            </Left>
            <Body>
                <Text>{ item.type == 'oil' ? 'Troca de Óleo' : 'Abastecimento' }</Text>
            </Body>
            <Right>
                <Icon name='keyboard-arrow-right' type='Font-Awesome5'/>
            </Right>
        </ListItem>
    )
};

export default ItemComponent;