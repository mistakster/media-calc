import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback} from "react-native";


export default function InfoBox(props){
    return(
        <TouchableWithoutFeedback onPress={()=>{ props.handlePress(); }}>
            <View style={styles.mainInfoBox}>
                <View style={styles.lessInfoBox}>
                    <View style={styles.iconBlock}>
                        <View style={styles.iconRectangle}>
                            {props.icon}
                        </View>
                    </View>
                    <View style={styles.textBlock}>
                            <Text style={styles.textBlockHeader}>{props.header}</Text>
                            <Text style={styles.textBlockInfo}>
                            {props.text}
                            </Text>

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    mainInfoBox: {
        backgroundColor: "rgba(56, 190, 234, 0.2)",
        alignSelf: "stretch",
        borderRadius: 9,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 16
    },
    lastMainInfoBox: {
        marginBottom: 30
    },
    lessInfoBox: {
        alignSelf: "stretch",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    iconBlock: {
        flex: 2,
        paddingTop: 5,
        alignSelf: "stretch",
        alignItems: "center"
    },
    iconRectangle: {
        width: 44,
        height: 43,
        backgroundColor: "#1DAAD8",
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center"
    },
    textBlock: {
        flex: 5,
        alignSelf: "stretch",
        paddingRight: 10
    },
    textBlockHeader: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 23,
        color: "#2E7B95"
    },
    textBlockInfo: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 17,
        color: "#7198A8"
    }
});