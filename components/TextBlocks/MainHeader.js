import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


export default function MainHeader(props){
    return(
            <View>
                <Text style={styles.mainHeader}>{props.children}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    mainHeader: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        color: Colors.baseTextColor,
        marginBottom: 20
    }
});