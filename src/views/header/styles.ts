import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#ECF0F1'
    },
    logo:{
        width:50,
        height:45,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#9b9b9b'
    },
    row:{
        flexDirection: 'row', // Esto alinea los elementos horizontalmente
        alignItems: 'center',
    },
    Text:{
        color:'#000',
        fontSize:25,
        fontFamily:'serif',
        marginLeft:10
    }
})