import {Text, View, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function MountainActivity({route}){
    const navigation = useNavigation();
    const [title, setTitle] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        setTitle(route.params.title)
        setId(route.params.id)
        navigation.setOptions({ title: route.params.title});

    }, [route.params.title]);

    return(
        <View style={styles.container}>

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