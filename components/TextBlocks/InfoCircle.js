import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


export default function InfoCircle(props){
    return(
        <View style={styles.innerCircleContainer}>
            <View style={styles.circleContainer}>
                <Text style={{fontSize: 14, color: Colors.mainThemeColor}}>{props.children}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    circleContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        borderRadius: 32/2,
        borderColor: Colors.mainThemeColor,
        borderWidth: 1,
    },
    innerCircleContainer:{
        flex: 2, 
        flexDirection: 'column',
        alignSelf: 'stretch', 
        justifyContent: 'flex-start', 
        paddingTop: 5, 
        width: 32, 
        height: 37, 
        alignItems:'center'
    },
});