import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


export default function LessInfo(props){
    return(
        <View>
            <Text style={styles.lessInfoContainer}>
                {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    lessInfoContainer: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 23,
        color: Colors.baseTextColor,
        marginBottom: 20
    },
});