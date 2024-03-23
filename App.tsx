import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import Header from "./src/views/header"
import Add from "./src/views/add"

const App = ()=>{

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar
            backgroundColor='#61dafb'
            />
            <Header/>
            <Add/>
        </SafeAreaView>
    )
}
export default App
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F1',
        padding:15
      }
    }
)