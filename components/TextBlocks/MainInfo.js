import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


export default function MainInfo(props){
    return(
        <View>
            <Text style={styles.mainInfoContainer}>
                {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainInfoContainer: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,
        textAlign: "center",
        color: Colors.baseTextColor,
        marginBottom: 25
    },
});