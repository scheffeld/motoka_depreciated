import React from 'react';
import { List, ListItem, Left, Body, Right } from 'native-base';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native';
import styles from './styles'

const ListComponent = ({ source }) => (
    <List>
        {
            source.map(record => {
                return(
                    <ListItem key={record.id} style={styles.item}>
                        <Left>
                            <Text>{record.date}</Text>
                        </Left>
                        <Body>
                            <Text>{ record.type == 'oil' ? 'Troca de Óleo' : 'Abastecimento' }</Text>
                        </Body>
                        <Right>
                            <Icon name='keyboard-arrow-right' type='Font-Awesome5'/>
                        </Right>
                    </ListItem>
                )
            })
        }
    </List>
);

export default ListComponent;