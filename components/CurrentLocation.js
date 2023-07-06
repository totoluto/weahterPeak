import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import arrow from '../assets/images/arrow.png';
import barometer from '../assets/images/barometer.png';
import theme from '../themes/theme'
import {useEffect, useState} from "react";
import { Barometer } from "expo-sensors";

export function CurrentData() {
    const [{ pressure, relativeAltitude }, setData] = useState({ pressure: 0, relativeAltitude: 0 });
    const [subscription, setSubscription] = useState(null);

    Barometer.setUpdateInterval(500)

    const subscribe = () => {
        setSubscription(Barometer.addListener(setData));
    };

    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        subscribe();
        return () => unsubscribe();
    }, []);

    function renderAltitude(){
        return(
            <>
                <Image source={arrow} style={styles.image}/>
                <Text style={styles.text}>{relativeAltitude.toFixed(2)} m</Text>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Current location</Text>
            <View style={styles.data}>
                <View style={styles.dataSet}>
                    <Image source={barometer} style={styles.image}/>
                    <Text style={styles.text}>{pressure} hPa</Text>
                </View>
                <View style={styles.dataSet}>
                    {Platform.OS === 'ios' ? renderAltitude() : null}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: theme.colors.card,
        borderRadius: 10,
        width: 300,
        height: 90,
    },
    title: {
        color: theme.colors.secondaryText,
    },
    image: {
        height: 24,
        width: 24,
    },
    data: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10
    },
    dataSet: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 5,
        paddingLeft: 5
    },
    text: {
        color: theme.colors.primaryText,
        paddingLeft: 10
    }
});
