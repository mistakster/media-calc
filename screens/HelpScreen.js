import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import MainInfo from "../components/TextBlocks/MainInfo";
import MainHeader from "../components/TextBlocks/MainHeader";
import LessInfo from "../components/TextBlocks/LessInfo";
import ColorizedCircle from "../components/TextBlocks/ColorizedCircle";
import HelpForm from "../components/HelpForm";
import ContactsBlock from "../components/ScreenElements/ContactsBlock";


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

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые необходимо внести:{"\n"}
                        </Text>
                        <Text style={{ fontWeight: "500" }}>Tvr (в %)</Text> — телевизионный
                        рейтинг выбранного ТВ канала, усредненный,{"\n"}
                        <Text style={{ fontWeight: "500" }}>
                        Количество трансляций
                        </Text>{" "}
                        рекламных роликов за рекламную кампанию,{"\n"}
                        <Text style={{ fontWeight: "500" }}>Хронометраж (сек)</Text>{" "}
                        рекламного ролика,{"\n"}
                        <Text style={{ fontWeight: "500" }}>Бюджет</Text> рекламной кампании
                        (за вычетом всех скидок),
                        <Text style={{ fontWeight: "500" }}> BASE</Text> — население того
                        населенного пункта, где вещает ТВ канал.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}
                        </Text>
                        <Text style={{ fontWeight: "500" }}>OTS</Text> — количество
                        контактов с рекламой,
                        <Text style={{ fontWeight: "500" }}> CPT</Text> — стоимость тысячи
                        контактов с рекламой,
                        <Text style={{ fontWeight: "500" }}> Reach (3+)</Text> — эффективный
                        охват аудитории,
                        <Text style={{ fontWeight: "500" }}>
                        {" "}
                        Погнозное количество
                        </Text>{" "}
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
                        <Text style={{ fontWeight: "500" }}>AQH (в тыс. человек)</Text> —
                        аудитория четверти часа, усреднённая,{"\n"}
                        <Text style={{ fontWeight: "500" }}>
                        Количество трансляций
                        </Text>{" "}
                        рекламных роликов за рекламную кампанию,{"\n"}
                        <Text style={{ fontWeight: "500" }}>Хронометраж (сек)</Text>{" "}
                        рекламного ролика,{"\n"}
                        <Text style={{ fontWeight: "500" }}>Бюджет</Text> рекламной кампании
                        (за вычетом всех скидок).{"\n"}
                        <Text style={{ fontWeight: "500" }}>BASE</Text> — население того
                        населенного пункта, где вещает ТВ канал.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}
                        </Text>
                        <Text style={{ fontWeight: "500" }}>OTS</Text> — количество
                        контактов с рекламой,
                        <Text style={{ fontWeight: "500" }}> CPT</Text> — стоимость тысячи
                        контактов с рекламой,
                        <Text style={{ fontWeight: "500" }}> Reach (3+)</Text> — эффективный
                        охват аудитории,
                        <Text style={{ fontWeight: "500" }}>
                        {" "}
                        Погнозное количество
                        </Text>{" "}
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
                        <Text style={{ fontWeight: "500" }}>ASC</Text> — количество всех
                        сторон бигбордов в городе.
                        <Text style={{ fontWeight: "500" }}> SYC</Text> — количество сторон
                        бигбордов для вашей рекламной кампании.
                        <Text style={{ fontWeight: "500" }}> BASE</Text> — население города.
                        <Text style={{ fontWeight: "500" }}> Side</Text> — сторона А или В,
                        <Text style={{ fontWeight: "500" }}> Бюджет</Text> рекламной
                        кампании за вычетом всех скидок.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ color: Colors.hightlightTextColor }}>
                        Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}
                        </Text>
                        <Text style={{ fontWeight: "500" }}>OTS</Text> — количество
                        контактов с рекламой,
                        <Text style={{ fontWeight: "500" }}> CPT</Text> — стоимость тысячи
                        контактов с рекламой,
                        <Text style={{ fontWeight: "500" }}> Reach (3+)</Text> — эффективный
                        охват аудитории,
                        <Text style={{ fontWeight: "500" }}>
                        {" "}
                        Погнозное количество
                        </Text>{" "}
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
                        <Text style={{ fontWeight: "500" }}>OTS</Text> традиционного
                        рекламного носителя корректно
                        <Text style={{ fontWeight: "500" }}>
                        {" "}
                        сравнить с количеством показов рекламы
                        </Text>{" "}
                        за месяц на том или ином сайте, который рассматривается как
                        рекламный носитель.
                        <Text style={{ fontWeight: "500" }}>
                        {" "}
                        Сравнить можно либо прогнозно либо постфактум (посткампейн).{" "}
                        </Text>
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ fontWeight: "500" }}>CPT</Text> корректно
                        <Text style={{ fontWeight: "500" }}> сравнить с CPM</Text> рекламы
                        на сайте.
                    </Text>
                </View>

                <View style={{ marginBottom: 30 }}>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{ fontWeight: "500" }}>
                        Прогнозное количество клиентов
                        </Text>{" "}
                        корректно
                        <Text style={{ fontWeight: "500" }}> сравнить с кликами</Text> по
                        рекламе на выбранном сайте.{"\n"}
                        <Text style={{ fontWeight: "500" }}>
                        Сравнивать можно либо прогнозно либо постфактум (посткампейн).
                        </Text>
                    </Text>
                </View>

                <MainHeader>Контакты</MainHeader>

                <MainInfo>Обращение к нам ни к чему вас не обяжет, но вы сможете получше,
                    поточнее примериться к нашим возможностям</MainInfo>

                <ContactsBlock></ContactsBlock>

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
