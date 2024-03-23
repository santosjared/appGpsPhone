import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

interface Props{
    children:ReactNode
}
const Card = ({children}:Props)=>{
    
    return(
        <View style={style.Card}>
            {children}
        </View>
    )
}
export default Card
const style = StyleSheet.create({
    Card:{
        flex:1,
        width:'100%',
        borderWidth:1,
        borderRadius:1,
        borderColor:'#9b9b9b',
        backgroundColor:'#000'
    }
})