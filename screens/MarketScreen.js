import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';
import { BagMoneyIcon, PigMoneyIcon, WalletMoneyIcon, HandMoneyIcon, NotNeedIcon, ProbablyNeedIcon, MaybeBuyIcon, SureNeedIcon, FirstPathIcon, SecondPathIcon, ThirdPathIcon } from '../components/Icons';
import styled from 'styled-components'

const StyledView = styled.View`
    background-color: white;
    elevation:17;
    box-shadow: 0px 4px 80px rgba(49, 123, 177, 0.03);

`;

const presStyle = ['Презентационный стиль', 'Презентационный стиль. Или его еще называют имиджевой рекламой. Лояльность потребителя к рекламируемому продукту очень низкая и цель рекламного сообщения - привлечь внимание к этому продукту.', 'Если потребитель воспринимает ваш продукт как "Дорого и не нужен", "Дорого и возможно нужен", "Дороговато и не нужен"', require('../assets/images/pres.jpg')];
const makerStyle = ['Убеждающий стиль', 'Убеждающий стиль. Лояльность потребителя к рекламируемому продукту начинает расти, уже есть определенный интерес. Цель такого рекламного сообщения - показать преимущества вашего продукта, показать выгоды для потребителя.', 'Если потребитель воспринимает ваш продукт как "Дорого и подумываю купить", "Дорого и нужен", "Дороговато но возможно нужен", "Дороговато и подумываю купить", "Могу позволить но не нужен", "Могу позволить и возможно нужен", "По карману но не нужен".', require('../assets/images/make.jpg')];
const compareStyle = ['Сравнивающий стиль', 'Сравнивающий стиль. Лояльность потребителя к рекламируемому продукту достаточно высокая. Цель рекламного сообщения в сравнивающем стиле - выгодно сравнить продукт с конкурирующим, по важным для потребителя критериям. Не называя конкурента.', 'Если потребитель воспринимает ваш продукт как "Дороговато и нужен", "Могу позволить и подумываю купить", "Могу позволить и нужен", "По карману и возможно нужен", "По карману и подумываю купить".', require('../assets/images/compare.jpg')];
const infoStyle = ['Информационный стиль', 'Информационный стиль. Лояльность потребителя к рекламируемому продукту высокая. Цель рекламного сообщения в этом случае - сообщить, информировать где именно он может купить данный продукт.', 'Если потребитель воспринимает ваш продукт как "По карману и нужен".', require('../assets/images/info.jpg')];

const resultMarketArray = [
    [presStyle, presStyle, makerStyle, makerStyle],
    [presStyle, makerStyle, makerStyle, compareStyle],
    [makerStyle, makerStyle, compareStyle, compareStyle],
    [makerStyle, compareStyle, compareStyle, infoStyle]
]

export default class HelpScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            selectedFirst: null,
            selectedSecond: null,
            cardCoordinate: 0,
            resultCoordinate: 0,
        };
        this.ref = React.createRef();
    }

    getResultHeader(){
        return resultMarketArray[this.state.selectedFirst][this.state.selectedSecond][0];
    }
    
    getResultText(){
        return resultMarketArray[this.state.selectedFirst][this.state.selectedSecond][1];
    }

    getResultInfo(){
        return resultMarketArray[this.state.selectedFirst][this.state.selectedSecond][2];
    }

    getResultSource(){
        return resultMarketArray[this.state.selectedFirst][this.state.selectedSecond][3];
    }

    render(){
        const width = Dimensions.get('window').width; 
        const height = Dimensions.get('window').height; 
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='_scrollView'
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    
                    
                    <View>
                        <Text style={styles.mainHeader}>Электронный маркетолог</Text>
                    </View>
    
                    <View>
                        <Text style={styles.mainInfoContainer}>Выберите тот стиль рекламного сообщения, который сработает лучше.</Text>
                    </View>
    
                    <View>
                        <Text style={styles.lessInfoContainer}>
                            <Text style={{fontWeight: '500'}}>Суть методики:</Text> Стиль рекламного сообщения зависит от того,
                             что называют клиентской лояльностью. Клиентская лояльность может быть высокой, умеренной, низкой.
                              Клиентская лояльность складывается из двух составляющих: "насколько этот Продукт дорогой" с точки зрения
                               вашего Потребителя и "насколько этот Продукт нужен" ему. Клиентская лояльность - это отношение
                                к вашему Продукту Потребителя.
                        </Text>
                    </View>

                    <View>
                        <Text style={[styles.mainHeader,{marginTop: 25}]}>Инструкция</Text>
                    </View>

                    <View>
                        <Text style={[styles.mainInfoContainer, {marginBottom: 10}]}>Три простых шага сделают Вашу рекламу эффективной</Text>
                    </View>

                    <View style={styles.circleAndTextContainer}>
                        <View style={styles.innerCircleContainer}>
                            <View style={styles.circleContainer}>
                                <Text style={{fontSize: 14, color: '#2AB6DC'}}>1</Text>
                            </View>
                        </View>
                        <View style={styles.textColorContainer}>
                            <Text style={styles.colorizedText}>Выберите "Насколько дорогой" ваш Продукт в глазах Потребителя.</Text>
                            <Text style={styles.nearCircleText}>Важно оценить этот критерий именно с точки зрения Потребителя.</Text>
                        </View>
                    </View>

                    <View style={styles.circleAndTextContainer}>
                        <View style={styles.innerCircleContainer}>
                            <View style={styles.circleContainer}>
                                <Text style={{fontSize: 14, color: '#2AB6DC'}}>2</Text>
                            </View>
                        </View>
                        <View style={styles.textColorContainer}>
                            <Text style={styles.colorizedText}>Выберите "Насколько нужен" ваш Продукт Потребителю.</Text>
                            <Text style={styles.nearCircleText}>С его же точки зрения. Важно смотреть на ваш Продукт глазами Потребителя.</Text>
                        </View>
                    </View>

                    <View style={[styles.circleAndTextContainer, {marginBottom: 35}]}>
                        <View style={styles.innerCircleContainer}>
                            <View style={styles.circleContainer}>
                                <Text style={{fontSize: 14, color: '#2AB6DC'}}>3</Text>
                            </View>
                        </View>
                        <View style={styles.textColorContainer}>
                            <Text style={styles.colorizedText}>Получите рекомендации нашего электронного маркетолога.</Text>
                            <Text style={styles.nearCircleText}>Он подскажет Вам необходимый стиль подачи рекламного сообщения для Потребителей с выбранной лояльностью.</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.mainHeader}>Насколько дорогой ваш продукт?</Text>
                    </View>
    
                    <View>
                        <Text style={styles.mainInfoContainer}>С точки зрения вашего потребителя.</Text>
                    </View>

                    <View style={{marginLeft: 25, flex:1, justifyContent: 'center', alignItems: 'center', marginTop: 5}}> 
                        <FirstPathIcon></FirstPathIcon>
                    </View>

                    <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30}}>

                        <CardView width={width} height={height} number='0' selected={this.state.selectedFirst} handleClick={()=>{this.setState({selectedFirst: 0}); this.refs._scrollView.scrollTo({x: 0, y: this.state.cardCoordinate, animated: true})}} text='ДОРОГО'>
                            <BagMoneyIcon />
                        </CardView>
                        <CardView width={width} height={height} number='1' selected={this.state.selectedFirst} handleClick={()=>{this.setState({selectedFirst: 1}); this.refs._scrollView.scrollTo({x: 0, y: this.state.cardCoordinate, animated: true})}} text='ДОРОГОВАТО'>
                            <PigMoneyIcon />
                        </CardView>
                        <CardView width={width} height={height} number='2' selected={this.state.selectedFirst} handleClick={()=>{this.setState({selectedFirst: 2}); this.refs._scrollView.scrollTo({x: 0, y: this.state.cardCoordinate, animated: true})}} text='МОГУ ПОЗВОЛИТЬ'>
                            <WalletMoneyIcon />
                        </CardView>
                        <CardView width={width} height={height} number='3' selected={this.state.selectedFirst} handleClick={()=>{this.setState({selectedFirst: 3}); this.refs._scrollView.scrollTo({x: 0, y: this.state.cardCoordinate, animated: true})}} text='ПО КАРМАНУ'>
                            <HandMoneyIcon />
                        </CardView>

                    </View>

                    <View
                        onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            this.setState({cardCoordinate: layout.y});
                        }}
                    >
                        <Text style={styles.mainHeader}>Насколько нужен ваш продукт?</Text>
                    </View>
    
                    <View>
                        <Text style={styles.mainInfoContainer}>С точки зрения вашего потребителя.</Text>
                    </View>

                    <View style={{marginLeft: 25, flex:1, justifyContent: 'center', alignItems: 'center', marginTop: 5}}> 
                        <SecondPathIcon></SecondPathIcon>
                    </View>

                    <View style={{flex:1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30}}>

                        <CardView width={width} number='0' selected={this.state.selectedSecond} handleClick={()=>{this.setState({selectedSecond: 0}); setTimeout(()=>this.refs._scrollView.scrollTo({x: 0, y: this.state.resultCoordinate, animated: true}), 100) }} height={height} text='МОГУ ПОЗВОЛИТЬ, НО НЕ НУЖЕН'>
                            <NotNeedIcon />
                        </CardView>
                        <CardView width={width} number='1' selected={this.state.selectedSecond} handleClick={()=>{this.setState({selectedSecond: 1}); setTimeout(()=>this.refs._scrollView.scrollTo({x: 0, y: this.state.resultCoordinate, animated: true}), 100) }} height={height} text='МОГУ ПОЗВОЛИТЬ И ВОЗМОЖНО НУЖЕН'>
                            <ProbablyNeedIcon />
                        </CardView>
                        <CardView width={width} number='2' selected={this.state.selectedSecond} handleClick={()=>{this.setState({selectedSecond: 2}); setTimeout(()=>this.refs._scrollView.scrollTo({x: 0, y: this.state.resultCoordinate, animated: true}), 100) }} height={height} text='МОГУ ПОЗВОЛИТЬ И ПОДУМЫВАЮ КУПИТЬ'>
                            <MaybeBuyIcon />
                        </CardView>
                        <CardView width={width} number='3' selected={this.state.selectedSecond} handleClick={()=>{this.setState({selectedSecond: 3}); setTimeout(()=>this.refs._scrollView.scrollTo({x: 0, y: this.state.resultCoordinate, animated: true}), 100) }} height={height} text='МОГУ ПОЗВОЛИТЬ И НУЖЕН'>
                            <SureNeedIcon />
                        </CardView>

                    </View>
                    <View 
                        onLayout={event => {
                            const layout = event.nativeEvent.layout;
                            this.setState({resultCoordinate: (layout.y)});
                        }}
                        >
                        {
                            (this.state.selectedFirst !== null && this.state.selectedSecond !== null) ? 
                            <View>
                                <View>
                                    <Text style={styles.mainHeader}>{this.getResultHeader()}</Text>
                                </View>
                
                                <View>
                                    <Text style={styles.mainInfoContainer}>Вам подходит {this.getResultHeader()}</Text>
                                </View>

                                <View style={{marginLeft: 25, flex:1, justifyContent: 'center', alignItems: 'center', marginTop: 5}}> 
                                    <ThirdPathIcon></ThirdPathIcon>
                                </View>
                                <View style={{marginTop: 15,marginBottom: 15}}>
                                    <Image
                                        style={{width: 300, height: 200, borderRadius: 9}}
                                        source={this.getResultSource()}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.lessInfoContainer}>
                                        <Text style={{fontWeight: '500', marginBottom: 5}}>{this.getResultInfo()}{"\n"}{"\n"}</Text> 
                                        {this.getResultText()}
                                    </Text>
                                </View>
                            </View>
                            : <Text style={styles.mainInfoContainer}>Здесь будет предложенный стиль. Выберите насколько "дорогой" и "нужный" продукт потребителю</Text>
                        }
                    </View>
                </ScrollView>
    
            </View>
        );
    }

}

function CardView(props){

    return (
        <TouchableWithoutFeedback  onPress={props.handleClick}>
            <View style={{width: props.width * .4, height: props.height * .4}}>
                <StyledView style={{flex:1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', margin: 10}}>
                    <View style={{flex:3, justifyContent: 'flex-end', alignItems: 'center'}}>
                        {props.children}
                    </View>
                    <View style={{flex:2, justifyContent: 'flex-start', paddingTop: 15, alignItems: 'center'}}>
                        <Text style={styles.cardText}>{props.text}</Text>
                    </View>
                    <View style={[{paddingLeft: 10, paddingRight: 10, flex: 2, justifyContent: 'center', alignItems: 'stretch'}, {opacity: props.selected == props.number ? .5 : 1}]}>
                        <View
                            
                            style={styles.chooseButton}
                        >
                            <Text style={styles.chooseButtonText}>Выбрать</Text>
                            
                        </View>
                    </View>
                </StyledView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    cardText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        color:'#000000',
        alignSelf: 'center'
    },
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
        marginBottom: 15,
    },
    lessInfoContainer:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 23,
        color:'#2D4059',
        marginBottom: 15,
    },
    circleAndTextContainer:{
        flex:1,
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 10,
    },
    circleContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        borderRadius: 32/2,
        borderColor: '#2AB6DC',
        borderWidth: 1,
    },
    textColorContainer:{
        paddingLeft: 10,
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
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
    colorizedText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 23,
        color: '#2AB6DC',
    },
    nearCircleText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 17,
        color: '#2D4059',
    },
    chooseButton:{
        height: 25,
        borderWidth: 1,
        borderColor: '#33ADD6',
        backgroundColor: '#33ADD6',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chooseButtonText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        textAlign: 'center',
        color:  '#FFFFFF'
    },
      
});

