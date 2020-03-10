import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderStyleInterpolators } from 'react-navigation-stack';
import { Icon } from 'react-native-elements'
import { Root } from 'native-base'
import { Alert } from 'react-native'

import LoginScreen from './src/screens/Login'
import NewUserScreen from './src/screens/NewUser';
import HomeScreen from './src/screens/Home';
import NewRecordScreen from './src/screens/NewRecord';

const goBack = (navigation) => {
  Alert.alert(
    'Tem certeza?',
    'Deseja voltar? Todas as informaçoes serão apagadas e as alteração não salvas serão desfeitas.',
    [
      { text: 'Sim', onPress: () => navigation.goBack()},
      { text: 'Não', onPress: () => {}}
    ]
  )
}

const signout = (navigation) => {
  Alert.alert(
    'Tem certeza?',
    'Deseja encerrar a sua sessão? Você será direcionado à tela de login.',
    [
      { text: 'Sim', onPress: () => navigation.navigate('Login')},
      { text: 'Não', onPress: () => {}}
    ]
  )
}

const Navigation = createAppContainer(
  createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: () => false
      }
    },
    'New User': {
      screen: NewUserScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => <Icon name='keyboard-arrow-left' type='Font-Awesome5' color='#FFF' onPress={() => goBack(navigation)}/>,
        headerLeftContainerStyle: {
          margin: 10
        },
        title: 'Novo Usuário'
      })
    },
    'Home': {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => <Icon name='exit-to-app' type='Font-Awesome5' color='#FFF' onPress={() => signout(navigation)}/>,
        headerLeftContainerStyle: {
          margin: 10
        },
        title: 'Motoka'
      }),
    },
    'New Record': {
      screen: NewRecordScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => <Icon name='keyboard-arrow-left' type='Font-Awesome5' color='#FFF' onPress={() => goBack(navigation)}/>,
        headerLeftContainerStyle: {
          margin: 10
        },
        title: 'Novo Registro'
      }),
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
    mode: 'card',
    defaultNavigationOptions:{
      headerTitleAlign: 'center',
      headerTintColor: '#FFF',
      headerStyle: {
          backgroundColor: '#7D40E7'
      },
      headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      headerPressColorAndroid: '#000',
      cardShadowEnabled: false
    }
  })
)

export default () => <Root><Navigation/></Root>