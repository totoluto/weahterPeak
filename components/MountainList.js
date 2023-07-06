import {StyleSheet,Text, View} from "react-native";
import theme from "../themes/theme";
import {MountainListItem} from "./MountainListItem";

export function MountainList(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mountains</Text>
            <MountainListItem mountain={"Jungfrau"} stationID={"JUN"}/>
            <MountainListItem mountain={"Finsteraarhorn"} stationID={"JUN"}/>
            <MountainListItem mountain={"Eiger"} stationID={"JUN"}/>
            <MountainListItem mountain={"Säntis"} stationID={"SAE"}/>
            <MountainListItem mountain={"Mont Dolent"} stationID={"ATT"}/>
            <MountainListItem mountain={"Piz Bernina"} stationID={"COV"}/>
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