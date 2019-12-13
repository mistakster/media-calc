import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import MainInfo from "../components/TextBlocks/MainInfo";
import MainHeader from "../components/TextBlocks/MainHeader";
import LessInfo from "../components/TextBlocks/LessInfo";
import ColorizedCircle from "../components/TextBlocks/ColorizedCircle";
import HelpForm from "../components/HelpForm";
import ContactsBlock from "../components/ScreenElements/ContactsBlock";
import B from "../components/TextBlocks/Bold";


export default function HelpScreen(props) {
    
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <MainHeader>Термины</MainHeader>

                <MainInfo>Показатели и понятия используемые в Медиакалькуляторе.</MainInfo>

                <ColorizedCircle>1</ColorizedCircle>

                <LessInfo>Рекламный носитель ТВ</LessInfo>

                <View >
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые необходимо внести:{"\n"}
                        </Text>
                        <B>Tvr (в %)</B> — телевизионный
                        рейтинг выбранного ТВ канала, усредненный,{"\n"}
                        <B>
                        Количество трансляций 
                        </B>
                        рекламных роликов за рекламную кампанию,{"\n"}
                        <B>Хронометраж (сек) </B>
                        рекламного ролика,{"\n"}
                        <B>Бюджет </B>рекламной кампании
                        (за вычетом всех скидок),
                        <B> BASE</B> — население того
                        населенного пункта, где вещает ТВ канал.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}
                        </Text>
                        <B>OTS</B> — количество
                        контактов с рекламой,
                        <B> CPT</B> — стоимость тысячи
                        контактов с рекламой,
                        <B> Reach (3+)</B> — эффективный
                        охват аудитории, 
                        <B> Погнозное количество </B>
                        обратившихся к вам клиентов.
                    </Text>
                </View>

                <ColorizedCircle>2</ColorizedCircle>

                <LessInfo>Рекламный носитель Радио Эфирное</LessInfo>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые необходимо внести:{"\n"}
                        </Text>
                        <B>AQH (в тыс. человек)</B> —
                        аудитория четверти часа, усреднённая,{"\n"}
                        <B>Количество трансляций </B>
                        рекламных роликов за рекламную кампанию,{"\n"}
                        <B>Хронометраж (сек) </B>
                        рекламного ролика,{"\n"}
                        <B>Бюджет </B>рекламной кампании 
                        (за вычетом всех скидок).{"\n"}
                        <B>BASE</B> — население того
                        населенного пункта, где вещает ТВ канал.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}
                        </Text>
                        <B>OTS</B> — количество
                        контактов с рекламой,
                        <B> CPT</B> — стоимость тысячи
                        контактов с рекламой,
                        <B> Reach (3+)</B> — эффективный
                        охват аудитории,
                        <B> Погнозное количество </B>
                        обратившихся к вам клиентов.
                    </Text>
                </View>

                <ColorizedCircle>3</ColorizedCircle>

                <LessInfo>Рекламный носитель{"\n"}
                    Бигборды/Мультимедийные экраны</LessInfo>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые необходимо внести:{"\n"}
                        </Text>
                        <B>ASC</B> — количество всех
                        сторон бигбордов в городе.
                        <B> SYC</B> — количество сторон
                        бигбордов для вашей рекламной кампании.
                        <B> BASE</B> — население города.
                        <B> Side</B> — сторона А или В,
                        <B> Бюджет</B> рекламной
                        кампании за вычетом всех скидок.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}
                        </Text>
                        <B>OTS</B> — количество
                        контактов с рекламой,
                        <B> CPT</B> — стоимость тысячи
                        контактов с рекламой,
                        <B> Reach (3+)</B> — эффективный
                        охват аудитории,
                        <B> Погнозное количество </B>
                        обратившихся к вам клиентов.
                    </Text>
                </View>

                <ColorizedCircle>4</ColorizedCircle>

                <LessInfo>Рекламный носитель Интернет</LessInfo>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, по которым можно сравнить рекламную компанию:{"\n"}
                        </Text>
                        <B>OTS </B>традиционного
                        рекламного носителя корректно
                        <B> сравнить с количеством показов рекламы </B>
                        за месяц на том или ином сайте, который рассматривается как
                        рекламный носитель.
                        <B>Сравнить можно либо прогнозно либо постфактум (посткампейн). </B>
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <B>CPT </B>корректно
                        <B> сравнить с CPM </B>рекламы на сайте.
                    </Text>
                </View>

                <View style={{ marginBottom: 30 }}>
                    <Text style={styles.textInfoContainer}>
                        <B>Прогнозное количество клиентов </B>корректно
                        <B> сравнить с кликами </B>
                        по рекламе на выбранном сайте.{"\n"}
                        <B> Сравнивать можно либо прогнозно либо постфактум (посткампейн). </B>
                    </Text>
                </View>

                <MainHeader>Контакты</MainHeader>

                <MainInfo>Обращение к нам ни к чему вас не обяжет, но вы сможете получше,
                    поточнее примериться к нашим возможностям</MainInfo>

                <ContactsBlock />

                <HelpForm />
                
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
    textInfoContainer: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: Colors.baseTextColor,
        marginBottom: 15
    },
});
