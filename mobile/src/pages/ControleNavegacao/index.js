import React, { useState, useEffect} from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import api from '../../services/api'

import styles from './style'
import { FlatList } from 'react-native-gesture-handler'

export default function Controle(){
    const [dataArduino, setDataArduino] = useState([])

    async function loadDataArduino(){
        const response = await api.get('a')
        setDataArduino(response.data)
    }
    useEffect(()=>{
        loadDataArduino()
    },[])

    return(
        <View style={ styles.container }>
            <View style={ styles.header}>
                <Text style={ styles.headerText}>
                    Controle de Navegação
                </Text>
            </View>
                
                    <View data={dataArduino}>
                        <Text>Temperatura:{dataArduino.Temp}</Text>
                        <Text>Humidade:{dataArduino.Humidity}</Text>
                    </View>
                    
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{}}
                >
                    <Text style={styles.textButton}>Liga Led</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Desliga Led</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}