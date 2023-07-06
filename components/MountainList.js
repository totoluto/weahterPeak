import {StyleSheet,Text, View} from "react-native";
import theme from "../themes/theme";
import {MountainListItem} from "./MountainListItem";

export function MountainList({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mountains</Text>
            <MountainListItem navigation={navigation} mountain={"Jungfrau"} stationID={"JUN"}/>
            <MountainListItem navigation={navigation} mountain={"Finsteraarhorn"} stationID={"JUN"}/>
            <MountainListItem navigation={navigation} mountain={"Eiger"} stationID={"JUN"}/>
            <MountainListItem navigation={navigation} mountain={"Säntis"} stationID={"SAE"}/>
            <MountainListItem navigation={navigation} mountain={"Mont Dolent"} stationID={"ATT"}/>
            <MountainListItem navigation={navigation} mountain={"Piz Bernina"} stationID={"COV"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.card,
        borderRadius: 10,
        width: 300,
        height: 228,
    },
    title: {
        padding: 10,
        color: theme.colors.secondaryText
    }
})