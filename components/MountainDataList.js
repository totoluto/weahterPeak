import {Image, StyleSheet, Text, View} from "react-native";
import theme from "../themes/theme";
import hot from "../assets/images/HotTemp.png"
import cold from "../assets/images/ColdTemp.png"
import dew from "../assets/images/dewpoint.png"
import normal from "../assets/images/NormalTemp.png"
import water from "../assets/images/Waterdrop.png"
import wind from "../assets/images/wind.png"
import windD from "../assets/images/WindDirection.png"
import barometer from "../assets/images/barometer.png"
import {useEffect, useState} from "react";



export function MountainDataList({id}){
    const [data, setData] = useState()

    function getTempImg(){
        if(data){
            if(data.temperature >= 22){
                return hot
            }else if(data.temperature <= 15){
                return cold
            }else{
                return normal
            }
        }else {
            return normal
        }
    }

    useEffect( () => {
        fetch('https://app-prod-ws.meteoswiss-app.ch/v1/stationOverview?station=' + id)
            .then(r => r.json())
            .then(d => setData(d[id]))
    }, [id, data])

    return(
        <View style={styles.container}>
            <View style={styles.dataSet}>

                <View style={styles.set}>
                    <Text style={styles.title}>Temperature</Text>
                    <View style={styles.data}>
                        <Image source={getTempImg()} style={styles.image}/>
                        <Text style={styles.text}>{data ? data.temperature : ''} C°</Text>
                    </View>
                </View>

                <View style={styles.set}>
                    <Text style={styles.title}>Humidity</Text>
                    <View style={styles.data}>
                        <Image source={water} style={styles.image}/>
                        <Text style={styles.text}>{data ? data.humidity : ''} %</Text>
                    </View>
                </View>

                <View style={styles.set}>
                    <Text style={styles.title}>Wind speed</Text>
                    <View style={styles.data}>
                        <Image source={wind} style={styles.image}/>
                        <Text style={styles.text}>{data ? data.windSpeed : ''} km/h</Text>
                    </View>
                </View>

            </View>
            <View style={styles.dataSet}>

                <View style={styles.set}>
                    <Text style={styles.title}>Pressure</Text>
                    <View style={styles.data}>
                        <Image source={barometer} style={styles.image}/>
                        <Text style={styles.text}>{data ? data.pressureStation : ''} hPa</Text>
                    </View>
                </View>

                <View style={styles.set}>
                    <Text style={styles.title}>Dew point</Text>
                    <View style={styles.data}>
                        <Image source={dew} style={styles.image}/>
                        <Text style={styles.text}>{data ? data.dewPoint : ''} C°</Text>
                    </View>
                </View>

                <View style={styles.set}>
                    <Text style={styles.title}>Wind direction</Text>
                    <View style={styles.data}>
                        <Image source={windD} style={[
                            styles.image,
                            {
                                transform: [{rotate: data ? data.windDirection +'deg' : '0deg'}]
                            }
                        ]
                        }/>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: theme.colors.card,
        borderRadius: 10,
        width: 300,
        height: 430,
    },
    title: {
        color: theme.colors.secondaryText,
    },
    image: {
        height: 24,
        width: 24,

    },
    text: {
        color: theme.colors.primaryText,
        paddingLeft: 10
    },
    dataSet: {
        display: "flex",
        flexDirection: "column",
    },
    data: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5
    },
    set: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15
    },
});