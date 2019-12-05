import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MainHeader from "../components/TextBlocks/MainHeader";
import MainInfo from "../components/TextBlocks/MainInfo";
import LessInfo from "../components/TextBlocks/LessInfo";
import InfoBox from "../components/InfoBox";


export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            <MainHeader>Помощники рекламиста</MainHeader>

            <MainInfo>Наши электронные помощники помогут Вам сделать рекламу по-настоящему
                работающей.</MainInfo>

            <LessInfo>Теперь, чтобы раcсчитать нужную рекламу и ее стоимость,
                необязательно звонить и заниматься рутинной работой, достаточно
                воспользоваться нашим помощником рекламиста.</LessInfo>

            <InfoBox dataElement='calculator'></InfoBox>
            <InfoBox dataElement='media'></InfoBox>
            <InfoBox dataElement='help'></InfoBox>

        </ScrollView>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    contentContainer: {
        paddingTop: 30,
        marginHorizontal: 30
    },
});
