import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import ControleNavegacao from './pages/ControleNavegacao'

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false }}>
                <AppStack.Screen name="Controle-Navegação" component={ ControleNavegacao }/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}