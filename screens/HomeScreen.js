import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WhiteCalculatorIcon, WhiteHelpIcon, WhiteMarketIcon} from '../components/Icons';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>

                <View>
                    <Text style={styles.mainHeader}>Помощники рекламиста</Text>
                </View>

                <View>
                    <Text style={styles.mainInfoContainer}>Наши электронные помощники помогут Вам сделать рекламу по-настоящему работающей.</Text>
                </View>

                <View>
                    <Text style={styles.lessInfoContainer}>Теперь, чтобы раcсчитать нужную рекламу и ее стоимость,
                     необязательно звонить и заниматься рутинной работой, достаточно воспользоваться нашим помощником рекламиста.</Text>
                </View>

                <View style={styles.mainInfoBox}>
                    <View style={styles.lessInfoBox}>
                        <View style={styles.iconBlock}>
                            <View style={styles.iconRectangle}>
                                <WhiteCalculatorIcon/>
                            </View>
                        </View>
                        <View style={styles.textBlock}>
                            <View>
                                <Text style={styles.textBlockHeader}>Медиакалькулятор</Text>
                            </View>
                            <View>
                                <Text style={styles.textBlockInfo}>Сравнивает основную валюту рекламных носителей.</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.mainInfoBox}>
                    <View style={styles.lessInfoBox}>
                        <View style={styles.iconBlock}>
                            <View style={styles.iconRectangle}>
                                <WhiteMarketIcon/>
                            </View>
                        </View>
                        <View style={styles.textBlock}>
                            <View>
                                <Text style={styles.textBlockHeader}>Маркетолог</Text>
                            </View>
                            <View>
                                <Text style={styles.textBlockInfo}>Помогает рекламисту подобрать подходящий стиль.</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.mainInfoBox, styles.lastMainInfoBox]}>
                    <View style={styles.lessInfoBox}>
                        <View style={styles.iconBlock}>
                            <View style={styles.iconRectangle}>
                                <WhiteHelpIcon/>
                            </View>
                        </View>
                        <View style={styles.textBlock}>
                            <View>
                                <Text style={styles.textBlockHeader}>Справка и термины</Text>
                            </View>
                            <View>
                                <Text style={styles.textBlockInfo}>В справке находятся основные термины используемые нами.</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
            </ScrollView>

        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
        marginHorizontal: 25,
    },
    mainHeader:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        color:'#2D4059',
        marginBottom: 20,
    },
    mainInfoContainer:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color:'#2D4059',
        marginBottom: 25,
    },
    lessInfoContainer:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 23,
        color:'#2D4059',
        marginBottom: 20,
    },
    mainInfoBox:{
        backgroundColor: 'rgba(56, 190, 234, 0.2)',
        alignSelf: 'stretch',
        borderRadius: 9,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 16,
    },
    lastMainInfoBox:{
        marginBottom: 30,
    },
    lessInfoBox:{
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconBlock:{
        flex: 2,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    iconRectangle:{
        width: 44,
        height: 43,
        backgroundColor: '#1DAAD8',
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBlock:{
        flex: 5,
        alignSelf: 'stretch',
    },
    textBlockHeader:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 23,
        color:'#2E7B95',
    },
    textBlockInfo:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 17,
        color:'#7198A8',
        paddingRight: 5,
    }

    
});
