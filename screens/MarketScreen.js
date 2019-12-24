import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import BagMoneyIcon from '../components/Icons/BagMoneyIcon';
import PigMoneyIcon from '../components/Icons/PigMoneyIcon';
import WalletMoneyIcon from '../components/Icons/WalletMoneyIcon';
import HandMoneyIcon from '../components/Icons/HandMoneyIcon';
import NotNeedIcon from '../components/Icons/NotNeedIcon';
import ProbablyNeedIcon from '../components/Icons/ProbablyNeedIcon';
import MaybeBuyIcon from '../components/Icons/MaybeBuyIcon';
import SureNeedIcon from '../components/Icons/SureNeedIcon';
import FirstPathIcon from '../components/Icons/FirstPathIcon';
import SecondPathIcon from '../components/Icons/SecondPathIcon';
import MainInfo from '../components/TextBlocks/MainInfo';
import MainHeader from '../components/TextBlocks/MainHeader';
import LessInfo from '../components/TextBlocks/LessInfo';
import B from "../components/TextBlocks/Bold";

import Make from '../assets/images/make.jpg';
import Compare from '../assets/images/compare.jpg';
import Info from '../assets/images/info.jpg';
import Pres from '../assets/images/pres.jpg';
import MarketListElement from '../components/MarketListElement';
import MarketStep from '../components/ScreenElements/MarketStep';
import MarketResultBlock from '../components/ScreenElements/MarketResultBlock';


const presStyle = ['Презентационный стиль', 'Презентационный стиль. Или его еще называют имиджевой рекламой. Лояльность потребителя к рекламируемому продукту очень низкая и цель рекламного сообщения — привлечь внимание к этому продукту.', 'Если потребитель воспринимает ваш продукт как «Дорого и не нужен», «Дорого и возможно нужен», «Дороговато и не нужен»', Pres];
const makerStyle = ['Убеждающий стиль', 'Убеждающий стиль. Лояльность потребителя к рекламируемому продукту начинает расти, уже есть определенный интерес. Цель такого рекламного сообщения — показать преимущества вашего продукта, показать выгоды для потребителя.', 'Если потребитель воспринимает ваш продукт как «Дорого и подумываю купить", «Дорого и нужен», «Дороговато но возможно нужен», «Дороговато и подумываю купить», «Могу позволить но не нужен», «Могу позволить и возможно нужен», «По карману но не нужен».', Make];
const compareStyle = ['Сравнивающий стиль', 'Сравнивающий стиль. Лояльность потребителя к рекламируемому продукту достаточно высокая. Цель рекламного сообщения в сравнивающем стиле — выгодно сравнить продукт с конкурирующим, по важным для потребителя критериям. Не называя конкурента.', 'Если потребитель воспринимает ваш продукт как «Дороговато и нужен», «Могу позволить и подумываю купить», «Могу позволить и нужен», «По карману и возможно нужен», «По карману и подумываю купить».', Compare];
const infoStyle = ['Информационный стиль', 'Информационный стиль. Лояльность потребителя к рекламируемому продукту высокая. Цель рекламного сообщения в этом случае — сообщить, информировать где именно он может купить данный продукт.', 'Если потребитель воспринимает ваш продукт как «По карману и нужен».', Info];

const resultMarketArray = [
    [presStyle, presStyle, makerStyle, makerStyle],
    [presStyle, makerStyle, makerStyle, compareStyle],
    [makerStyle, makerStyle, compareStyle, compareStyle],
    [makerStyle, compareStyle, compareStyle, infoStyle]
];

const marketStepsData = {
    firstStep: {
        icons: [
            <BagMoneyIcon key='0'/>,
            <PigMoneyIcon key='1'/>,
            <WalletMoneyIcon key='2'/>,
            <HandMoneyIcon key='3'/>
        ],
        titles: [
            'ДОРОГО',
            'ДОРОГОВАТО',
            'МОГУ ПОЗВОЛИТЬ',
            'ПО КАРМАНУ',
        ]
    },
    secondStep: {
        icons: [
            <NotNeedIcon key='0'/>,
            <ProbablyNeedIcon key='1'/>,
            <MaybeBuyIcon key='2'/>,
            <SureNeedIcon key='3'/>
        ],
        titles: [
            'МОГУ ПОЗВОЛИТЬ, НО НЕ НУЖЕН',
            'МОГУ ПОЗВОЛИТЬ И ВОЗМОЖНО НУЖЕН',
            'МОГУ ПОЗВОЛИТЬ И ПОДУМЫВАЮ КУПИТЬ',
            'МОГУ ПОЗВОЛИТЬ И НУЖЕН',
        ]
    }
};

const firstPathIcon = (
    <FirstPathIcon/>
);

const secondPathIcon = (
    <SecondPathIcon/>
);

/**
 * Кастомный хук для прокрутки
 * @param scrollRef ссылка на прокручиваемый элемент
 * @param coordinate позиция по Y
 * @param prevSelected предыдущий выбор нужен, чтобы форсировать прокрутку при сменен варианта
 */
function useScrollTo(scrollRef, coordinate, prevSelected) {
    useEffect(() => {
        if (coordinate > 0) {
            scrollRef.current.scrollTo({
                x: 0,
                y: coordinate,
                animated: true
            });
        }
    }, [scrollRef, coordinate, prevSelected]);
}

export default function HelpScreen() {
    const [selectedFirst, setSelectedFirst] = useState(null);
    const [selectedSecond, setSelectedSecond] = useState(null);
    const [cardCoordinate, setCardCoordinate] = useState(0);
    const [resultCoordinate, setResultCoordinate] = useState(0);
    const scrollRef = useRef(null);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const isFirstSelected = typeof selectedFirst === 'number';
    const isSecondSelected = typeof selectedSecond === 'number';

    function getResultHeader() {
        return resultMarketArray[selectedFirst][selectedSecond][0];
    }

    function getResultText() {
        return resultMarketArray[selectedFirst][selectedSecond][1];
    }

    function getResultInfo() {
        return resultMarketArray[selectedFirst][selectedSecond][2];
    }

    function getResultSource() {
        return resultMarketArray[selectedFirst][selectedSecond][3];
    }

    useScrollTo(scrollRef, cardCoordinate, selectedFirst);
    useScrollTo(scrollRef, resultCoordinate, selectedSecond);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollRef}
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>

                <MainHeader>Электронный маркетолог</MainHeader>

                <MainInfo>
                    Выберите тот стиль рекламного сообщения, который сработает лучше.
                </MainInfo>

                <LessInfo>
                    <B>Суть методики:</B> Стиль рекламного сообщения зависит
                    от того, что называют клиентской лояльностью. Клиентская лояльность может быть высокой, умеренной,
                    низкой. Клиентская лояльность складывается из двух составляющих: «насколько этот Продукт дорогой»
                    с точки зрения вашего Потребителя и «насколько этот Продукт нужен» ему. Клиентская лояльность —
                    это отношение к вашему Продукту Потребителя.
                </LessInfo>

                <MainHeader style={{ marginTop: 20 }}>Инструкция</MainHeader>

                <MainInfo style={{ marginBottom: 10 }}>
                    Три простых шага сделают Вашу
                    рекламу эффективной
                </MainInfo>

                <MarketListElement number='1' header='Выберите «Насколько дорогой» ваш Продукт в глазах Потребителя.'
                    text='Важно оценить этот критерий именно с точки зрения Потребителя.'/>

                <MarketListElement number='2' header='Выберите «Насколько нужен» ваш Продукт Потребителю.'
                    text='С его же точки зрения. Важно смотреть на ваш Продукт глазами Потребителя.'/>

                <MarketListElement style={{ marginBottom: 40 }} number='3' header='Получите рекомендации нашего
                    электронного маркетолога.' text='Он подскажет Вам необходимый стиль подачи рекламного сообщения
                    для Потребителей с выбранной лояльностью.'/>

                <MarketStep
                    header='Насколько дорогой ваш продукт?'
                    info='С точки зрения вашего потребителя.'
                    icon={firstPathIcon}
                    width={width}
                    height={height}
                    data={marketStepsData.firstStep}
                    selected={selectedFirst}
                    onClick={setSelectedFirst}
                />

                {isFirstSelected && (
                    <MarketStep
                        header='Насколько нужен ваш продукт?'
                        info='С точки зрения вашего потребителя.'
                        icon={secondPathIcon}
                        width={width}
                        height={height}
                        data={marketStepsData.secondStep}
                        selected={selectedSecond}
                        onClick={setSelectedSecond}
                        onChangePosition={setCardCoordinate}
                    />
                )}

                {isFirstSelected && isSecondSelected && (
                    <MarketResultBlock
                        resultHeader={getResultHeader()}
                        resultInfo={getResultInfo()}
                        resultSource={getResultSource()}
                        resultText={getResultText()}
                        onChangePosition={setResultCoordinate}
                    />
                )}

                {(!isFirstSelected || !isSecondSelected) && (
                    <MainInfo>
                        Здесь будет предложенный стиль. Выберите сперва насколько «дорогой», затем насколько
                        «нужный» продукт потребителю
                    </MainInfo>
                )}
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
        marginHorizontal: 30,
    },
});

