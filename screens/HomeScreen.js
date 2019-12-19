import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MainHeader from "../components/TextBlocks/MainHeader";
import MainInfo from "../components/TextBlocks/MainInfo";
import LessInfo from "../components/TextBlocks/LessInfo";
import InfoBox from "../components/InfoBox";
import WhiteHelpIcon from "../components/Icons/WhiteHelpIcon";
import WhiteCalculatorIcon from '../components/Icons/WhiteCalculatorIcon';
import WhiteMarketIcon from '../components/Icons/WhiteMarketIcon';

export default function HomeScreen(props) {
    
    const {navigate} = props.navigation; 

    const whiteCalculatorIcon = (
        <WhiteCalculatorIcon />
    );

    const whiteMarketIcon = (
        <WhiteMarketIcon />
    );

    const whiteHelpIcon = (
        <WhiteHelpIcon />
    );
    
    
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

            <InfoBox handlePress={() => {navigate('Calculator');}} header='Медиакалькулятор' text='Сравнивает основную валюту рекламных носителей.' icon={whiteCalculatorIcon} />
            <InfoBox handlePress={() => {navigate('Market');}} header='Маркетолог' text='Помогает рекламисту подобрать подходящий стиль.' icon={whiteMarketIcon} />
            <InfoBox handlePress={() => {navigate('Help');}} header='Справка и термины' text='В справке находятся основные термины используемые нами.' icon={whiteHelpIcon} />

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
