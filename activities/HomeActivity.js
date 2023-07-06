import {Text, View, StyleSheet} from "react-native";
import {CurrentData} from "../components/CurrentLocation";
import {MountainList} from "../components/MountainList";
import {useNavigation} from "@react-navigation/native";

export default function HomeActivity(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <CurrentData/>
            <MountainList navigation={navigation}/>
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