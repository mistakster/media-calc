import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


export default function ColorizedCircle(props){
    return(
        <View style={styles.circleContainer}>
            <View style={styles.circle}>
                <Text style={{ fontSize: 20, color: Colors.hightlightTextColor }}>{props.children}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    circleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        marginTop: 15
    },
    circle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 56,
        height: 56,
        borderRadius: 56 / 2,
        borderColor: Colors.hightlightTextColor,
        borderWidth: 2
    },
});