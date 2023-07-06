import {View, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {MountainDataList} from "../components/MountainDataList";

export default function MountainActivity({route}){
    const navigation = useNavigation();
    const [id, setId] = useState("")

    useEffect(() => {
        setId(route.params.id)
        navigation.setOptions({ title: route.params.title});

    }, [route.params.title]);

    return(
        <View style={styles.container}>
            <MountainDataList id={id}/>
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