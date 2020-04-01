import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    headerText:{
        justifyContent: 'center',
        color:'red',
        fontSize: 30
    },
    contentContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonContainer:{
        marginTop: 300
    },
    button:{
        alignItems:'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 20
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20
    }
})