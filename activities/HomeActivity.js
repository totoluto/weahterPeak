import {Text, View, StyleSheet} from "react-native";
import {CurrentData} from "../components/CurrentLocation";

export default function HomeActivity(){
    return(
        <View style={styles.container}>
            <CurrentData/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#18191A',
        alignItems: 'center',
        justifyContent: 'center',
    },
});