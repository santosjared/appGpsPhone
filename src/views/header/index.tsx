import { View, Image,Text } from "react-native"
import { styles } from "./styles"

const Header = () => {
    const clasess = styles
    return(
    <View style={clasess.container}>
        <View style={clasess.row}>
            <Image style={clasess.logo}
            source={require('../../../public/images/icon.png')}
            />
            <Text style={clasess.Text}>GPS Microbuses</Text>
        </View>
        <View>
            <Text style={{fontFamily:'serif', top:10, fontSize:20}}>&#62; Modulo gps</Text>
        </View>
    </View>)
}
export default Header