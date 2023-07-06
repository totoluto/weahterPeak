import {StyleSheet, Text, Image, Pressable} from 'react-native';
import arrowEnter from '../assets/images/ArrowEnter.png';
import theme from '../themes/theme';

export function MountainListItem({navigation, mountain, stationID}) {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? theme.colors.hoverColor : null,
                },
                styles.root,
            ]}
            onPress={() =>
                navigation.navigate('MountainDetail', {title: mountain, id: stationID})
            }
        >
            <Text style={styles.text}>
                {mountain}
            </Text>
            <Image source={arrowEnter} style={styles.image}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        height: 30,
        paddingRight: 15,
        paddingLeft: 15
    },
    image: {
        width: 16,
        height: 16
    },
    text: {
        color: theme.colors.primaryText
    }

});
