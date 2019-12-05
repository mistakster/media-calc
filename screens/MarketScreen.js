import React, { useRef, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import CardView from '../components/CardView';
import Colors from "../constants/Colors";
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
import ThirdPathIcon from '../components/Icons/ThirdPathIcon';
import MainInfo from '../components/TextBlocks/MainInfo';
import MainHeader from '../components/TextBlocks/MainHeader';
import LessInfo from '../components/TextBlocks/LessInfo';
import InfoCircle from '../components/TextBlocks/InfoCircle';

import Make from '../assets/images/make.jpg';
import Compare from '../assets/images/compare.jpg';
import Info from '../assets/images/info.jpg';
import Pres from '../assets/images/pres.jpg';

const presStyle = ['Презентационный стиль', 'Презентационный стиль. Или его еще называют имиджевой рекламой. Лояльность потребителя к рекламируемому продукту очень низкая и цель рекламного сообщения — привлечь внимание к этому продукту.', 'Если потребитель воспринимает ваш продукт как «Дорого и не нужен», «Дорого и возможно нужен», «Дороговато и не нужен»', Pres];
const makerStyle = ['Убеждающий стиль', 'Убеждающий стиль. Лояльность потребителя к рекламируемому продукту начинает расти, уже есть определенный интерес. Цель такого рекламного сообщения — показать преимущества вашего продукта, показать выгоды для потребителя.', 'Если потребитель воспринимает ваш продукт как «Дорого и подумываю купить", «Дорого и нужен», «Дороговато но возможно нужен», «Дороговато и подумываю купить», «Могу позволить но не нужен», «Могу позволить и возможно нужен», «По карману но не нужен».', Make];
const compareStyle = ['Сравнивающий стиль', 'Сравнивающий стиль. Лояльность потребителя к рекламируемому продукту достаточно высокая. Цель рекламного сообщения в сравнивающем стиле — выгодно сравнить продукт с конкурирующим, по важным для потребителя критериям. Не называя конкурента.', 'Если потребитель воспринимает ваш продукт как «Дороговато и нужен», «Могу позволить и подумываю купить», «Могу позволить и нужен», «По карману и возможно нужен», «По карману и подумываю купить».', Compare];
const infoStyle = ['Информационный стиль', 'Информационный стиль. Лояльность потребителя к рекламируемому продукту высокая. Цель рекламного сообщения в этом случае — сообщить, информировать где именно он может купить данный продукт.', 'Если потребитель воспринимает ваш продукт как «По карману и нужен».', Info];

const resultMarketArray = [
    [presStyle, presStyle, makerStyle, makerStyle],
    [presStyle, makerStyle, makerStyle, compareStyle],
    [makerStyle, makerStyle, compareStyle, compareStyle],
    [makerStyle, compareStyle, compareStyle, infoStyle]
]


export default function HelpScreen(props) {
    
    const [selectedFirst, setSelectedFirst] = useState(null);
    const [selectedSecond, setSelectedSecond] = useState(null);
    const [cardCoordinate, setCardCoordinate] = useState(0);
    const [resultCoordinate, setResultCoordinate] = useState(0)
    const scrollRef = useRef(null);
    const width = Dimensions.get('window').width; 
    const height = Dimensions.get('window').height; 
    
    function getResultHeader(){
        return resultMarketArray[selectedFirst][selectedSecond][0];
    }
    
    function getResultText(){
        return resultMarketArray[selectedFirst][selectedSecond][1];
    }

    function getResultInfo(){
        return resultMarketArray[selectedFirst][selectedSecond][2];
    }

    function getResultSource(){
        return resultMarketArray[selectedFirst][selectedSecond][3];
    }

    
    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollRef}
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                
                
                <MainHeader>Электронный маркетолог</MainHeader>

                <MainInfo>Выберите тот стиль рекламного сообщения, который
                        сработает лучше.</MainInfo>

                <LessInfo>
                    <Text style={{fontWeight: '500'}}>Суть методики:</Text> Стиль рекламного сообщения зависит
                        от того,
                        что называют клиентской лояльностью. Клиентская лояльность может быть высокой, умеренной,
                        низкой.
                        Клиентская лояльность складывается из двух составляющих: «насколько этот Продукт дорогой»
                        с точки зрения
                        вашего Потребителя и «насколько этот Продукт нужен» ему. Клиентская лояльность —
                        это отношение
                        к вашему Продукту Потребителя.
                </LessInfo>

                <View>
                    <Text style={[styles.mainHeader,{marginTop: 25}]}>Инструкция</Text>
                </View>

                <View>
                    <Text style={[styles.mainInfoContainer, {marginBottom: 10}]}>Три простых шага сделают Вашу
                        рекламу эффективной</Text>
                </View>

                <View style={styles.circleAndTextContainer}>
                    <InfoCircle>1</InfoCircle>
                    <View style={styles.textColorContainer}>
                        <Text style={styles.colorizedText}>Выберите «Насколько дорогой» ваш Продукт в глазах
                            Потребителя.</Text>
                        <Text style={styles.nearCircleText}>Важно оценить этот критерий именно с точки зрения
                            Потребителя.</Text>
                    </View>
                </View>

                <View style={styles.circleAndTextContainer}>
                    <InfoCircle>2</InfoCircle>
                    <View style={styles.textColorContainer}>
                        <Text style={styles.colorizedText}>Выберите «Насколько нужен» ваш Продукт Потребителю.
                        </Text>
                        <Text style={styles.nearCircleText}>С его же точки зрения. Важно смотреть на ваш Продукт
                            глазами Потребителя.</Text>
                    </View>
                </View>

                <View style={[styles.circleAndTextContainer, {marginBottom: 35}]}>
                    <InfoCircle>3</InfoCircle>
                    <View style={styles.textColorContainer}>
                        <Text style={styles.colorizedText}>Получите рекомендации нашего электронного маркетолога.
                        </Text>
                        <Text style={styles.nearCircleText}>Он подскажет Вам необходимый стиль подачи рекламного 
                        сообщения для Потребителей с выбранной лояльностью.</Text>
                    </View>
                </View>

                <MainHeader>Насколько дорогой ваш продукт?</MainHeader>

                <MainInfo>С точки зрения вашего потребителя.</MainInfo>

                <View style={{marginLeft: 25, flex:1, justifyContent: 'center', alignItems: 'center', 
                marginTop: 5}}> 
                    <FirstPathIcon></FirstPathIcon>
                </View>

                <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row',
                    flexWrap: 'wrap', marginBottom: 30}}>

                    <CardView width={width} height={height} number='0' selected={selectedFirst} 
                        handleClick={()=>{
                            setSelectedFirst(0); 
                            scrollRef.current.scrollTo({x: 0, y: cardCoordinate, animated: true})}
                        } text='ДОРОГО'>
                        <BagMoneyIcon />
                    </CardView>
                    <CardView width={width} height={height} number='1' selected={selectedFirst} 
                        handleClick={()=>{
                            setSelectedFirst(1); 
                            scrollRef.current.scrollTo({x: 0, y: cardCoordinate, animated: true})}
                        } text='ДОРОГОВАТО'>
                        <PigMoneyIcon />
                    </CardView>
                    <CardView width={width} height={height} number='2' selected={selectedFirst} 
                        handleClick={()=>{
                            setSelectedFirst(2); 
                            scrollRef.current.scrollTo({x: 0, y: cardCoordinate, animated: true})}
                        } text='МОГУ ПОЗВОЛИТЬ'>
                        <WalletMoneyIcon />
                    </CardView>
                    <CardView width={width} height={height} number='3' selected={selectedFirst} 
                        handleClick={()=>{
                            setSelectedFirst(3); 
                            scrollRef.current.scrollTo({x: 0, y: cardCoordinate, animated: true})}
                        } text='ПО КАРМАНУ'>
                        <HandMoneyIcon />
                    </CardView>

                </View>

                <View
                    onLayout={event => {
                        const layout = event.nativeEvent.layout;
                        setCardCoordinate(layout.y);
                    }}
                >
                    <Text style={styles.mainHeader}>Насколько нужен ваш продукт?</Text>
                </View>

                <MainInfo>С точки зрения вашего потребителя.</MainInfo>

                <View style={{marginLeft: 25, flex:1, justifyContent: 'center', alignItems: 'center', 
                marginTop: 5}}> 
                    <SecondPathIcon></SecondPathIcon>
                </View>

                <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', 
                flexWrap: 'wrap', marginBottom: 30}}>

                    <CardView width={width} number='0' selected={selectedSecond} 
                    handleClick={()=>{
                        setSelectedSecond(0); 
                        setTimeout(()=>scrollRef.current.scrollTo({x: 0, y: resultCoordinate, animated: true}), 100) }
                        } height={height} text='МОГУ ПОЗВОЛИТЬ, НО НЕ НУЖЕН'>
                        <NotNeedIcon />
                    </CardView>
                    <CardView width={width} number='1' selected={selectedSecond} 
                        handleClick={()=>{
                            setSelectedSecond(1); 
                            setTimeout(()=>scrollRef.current.scrollTo({x: 0, y: resultCoordinate, animated: true}), 100) }
                        } height={height} text='МОГУ ПОЗВОЛИТЬ И ВОЗМОЖНО НУЖЕН'>
                        <ProbablyNeedIcon />
                    </CardView>
                    <CardView width={width} number='2' selected={selectedSecond} 
                    handleClick={()=>{
                        setSelectedSecond(2); 
                        setTimeout(()=>scrollRef.current.scrollTo({x: 0, y: resultCoordinate, animated: true}), 100) }
                        } height={height} text='МОГУ ПОЗВОЛИТЬ И ПОДУМЫВАЮ КУПИТЬ'>
                        <MaybeBuyIcon />
                    </CardView>
                    <CardView width={width} number='3' selected={selectedSecond} 
                    handleClick={()=>{
                        setSelectedSecond(3); 
                        setTimeout(()=>scrollRef.current.scrollTo({x: 0, y: resultCoordinate, animated: true}), 100) }
                        } height={height} text='МОГУ ПОЗВОЛИТЬ И НУЖЕН'>
                        <SureNeedIcon />
                    </CardView>

                </View>
                <View 
                    onLayout={event => {
                        const layout = event.nativeEvent.layout;
                        setResultCoordinate(layout.y);
                    }}
                    >
                    {
                        (selectedFirst !== null && selectedSecond !== null) ? 
                        <View>
                            <MainHeader>{getResultHeader()}</MainHeader>
            
                            <MainInfo>Вам подходит {getResultHeader()}</MainInfo>

                            <View style={{marginLeft: 25, flex:1, justifyContent: 'center', 
                            alignItems: 'center', marginTop: 5}}> 
                                <ThirdPathIcon></ThirdPathIcon>
                            </View>
                            <View style={{marginTop: 15,marginBottom: 15}}>
                                <Image
                                    style={{width: 300, height: 200, borderRadius: 9}}
                                    source={getResultSource()}
                                />
                            </View>
                            <LessInfo>
                                <Text style={{fontWeight: '500', marginBottom: 5}}>
                                        {getResultInfo()}{"\n"}{"\n"}</Text> 
                                    {getResultText()}
                            </LessInfo>
                        </View>
                        : <MainInfo>
                            Здесь будет предложенный стиль. Выберите насколько «дорогой» и «нужный» продукт 
                            потребителю
                        </MainInfo>
                    }
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    inputBorder:{
        borderRadius: 2,
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom:10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
        marginHorizontal: 30,
    },
    mainHeader:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 35,
        textAlign: 'center',
        color: Colors.baseTextColor,
        marginBottom: 20,
    },
    mainInfoContainer:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        color: Colors.baseTextColor,
        marginBottom: 15,
    },
    lessInfoContainer:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 23,
        color: Colors.lightBackground,
        marginBottom: 15,
    },
    circleAndTextContainer:{
        flex:1,
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 10,
    },
    textColorContainer:{
        paddingLeft: 10,
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorizedText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 23,
        color: Colors.mainThemeColor,
    },
    nearCircleText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 17,
        color: Colors.baseTextColor,
    },
});

