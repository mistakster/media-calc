import React, {useState} from 'react';
import { Platform, View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { PhoneIcon, AddressIcon } from '../components/Icons';


export default function HelpScreen(props) {
  
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [complete, setComplete] = useState(false);
    const [fetching, setFetching] = useState(false);
    
    const [mailFocused, setMailFocused] = useState(false);
    const [mailError, setMailError] = useState(false);

    const [nameFocused, setNameFocused] = useState(false);
    const [nameError, setNameError] = useState(false);

    const [messageFocused, setMessageFocused] = useState(false);
    const [messageError, setMessageError] = useState(false);

    function validate(){
        if(fetching) return false;
        setMailError(mail.length > 0 ? false: true);
        setNameError(name.length > 0 ? false: true);
        setMessageError(message.length > 0 ? false: true);
        if((mail.length > 0) && (name.length > 0) && (message.length > 0)){ 
            setFetching(true);
            new Promise(function(resolve, reject){
                setTimeout(() => {
                    resolve(false);
                  }, 2000);
            }).then(
                res=> {
                    setComplete(true);
                    setFetching(res);
                    setMail('');
                    setName('');
                    setMessage('');
                }
            ).catch(
                err=> console.log(err)
            );
            /*fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail: mail,
                name: name,
                message: message
            }),**/

        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                
                
                <View>
                    <Text style={styles.mainHeader}>Термины</Text>
                </View>

                <View>
                    <Text style={styles.mainInfoContainer}>Показатели и понятия используемые в Медиакалькуляторе.</Text>
                </View>

                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={{fontSize: 20, color: '#C93B59'}}>1</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.lessInfoContainer}>Рекламный носитель ТВ</Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{color: '#C93B59'}}>Параметры, которые необходимо внести:{"\n"}</Text>
                        <Text style={{fontWeight: '500'}}>Tvr (в %)</Text> - телевизионный рейтинг выбранного ТВ канала, усредненный,{"\n"}
                        <Text style={{fontWeight: '500'}}>Количество трансляций</Text> рекламных роликов за рекламную кампанию,{"\n"}
                        <Text style={{fontWeight: '500'}}>Хронометраж (сек)</Text> рекламного ролика,{"\n"}
                        <Text style={{fontWeight: '500'}}>Бюджет</Text> рекламной кампании (за вычетом всех скидок),
                        <Text style={{fontWeight: '500'}}> BASE</Text> - население того населенного пункта, где вещает ТВ канал.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{color: '#C93B59'}}>Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}</Text>
                        <Text style={{fontWeight: '500'}}>OTS</Text> - количество контактов с рекламой,
                        <Text style={{fontWeight: '500'}}> CPT</Text> - стоимость тысячи контактов с рекламой,
                        <Text style={{fontWeight: '500'}}> Reach (3+)</Text> - эффективный охват аудитории,
                        <Text style={{fontWeight: '500'}}> Погнозное количество</Text> обратившихся к вам клиентов.
                    </Text>
                </View>

                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={{fontSize: 20, color: '#C93B59'}}>2</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.lessInfoContainer}>Рекламный носитель Радио Эфирное</Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{color: '#C93B59'}}>Параметры, которые необходимо внести:{"\n"}</Text>
                        <Text style={{fontWeight: '500'}}>AQH (в тыс. человек)</Text> - аудитория четверти часа, усреднённая,{"\n"}
                        <Text style={{fontWeight: '500'}}>Количество трансляций</Text> рекламных роликов за рекламную кампанию,{"\n"}
                        <Text style={{fontWeight: '500'}}>Хронометраж (сек)</Text> рекламного ролика,{"\n"}
                        <Text style={{fontWeight: '500'}}>Бюджет</Text> рекламной кампании (за вычетом всех скидок).{"\n"}
                        <Text style={{fontWeight: '500'}}>BASE</Text> - население того населенного пункта, где вещает ТВ канал.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{color: '#C93B59'}}>Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}</Text>
                        <Text style={{fontWeight: '500'}}>OTS</Text> - количество контактов с рекламой,
                        <Text style={{fontWeight: '500'}}> CPT</Text> - стоимость тысячи контактов с рекламой,
                        <Text style={{fontWeight: '500'}}> Reach (3+)</Text> - эффективный охват аудитории,
                        <Text style={{fontWeight: '500'}}> Погнозное количество</Text> обратившихся к вам клиентов.
                    </Text>
                </View>

                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={{fontSize: 20, color: '#C93B59'}}>3</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.lessInfoContainer}>Рекламный носитель{"\n"}
                    Бигборды/Мультимедийные экраны</Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{color: '#C93B59'}}>Параметры, которые необходимо внести:{"\n"}</Text>
                        <Text style={{fontWeight: '500'}}>ASC</Text> - количество всех сторон бигбордов в городе. 
                        <Text style={{fontWeight: '500'}}> SYC</Text> - количество сторон бигбордов для вашей рекламной кампании. 
                        <Text style={{fontWeight: '500'}}> BASE</Text> - население города. 
                        <Text style={{fontWeight: '500'}}> Side</Text> - сторона А или В, 
                        <Text style={{fontWeight: '500'}}> Бюджет</Text> рекламной кампании за вычетом всех скидок.
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{color: '#C93B59'}}>Параметры, которые вы получите с помощью Медиакалькулятора:{"\n"}</Text>
                        <Text style={{fontWeight: '500'}}>OTS</Text> - количество контактов с рекламой,
                        <Text style={{fontWeight: '500'}}> CPT</Text> - стоимость тысячи контактов с рекламой,
                        <Text style={{fontWeight: '500'}}> Reach (3+)</Text> - эффективный охват аудитории,
                        <Text style={{fontWeight: '500'}}> Погнозное количество</Text> обратившихся к вам клиентов.
                    </Text>
                </View>

                <View style={styles.circleContainer}>
                    <View style={styles.circle}>
                        <Text style={{fontSize: 20, color: '#C93B59'}}>4</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.lessInfoContainer}>Рекламный носитель Интернет</Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{color: '#C93B59'}}>Параметры, по которым можно сравнить рекламную компанию:{"\n"}</Text>
                        <Text style={{fontWeight: '500'}}>OTS</Text> традиционного рекламного носителя корректно
                        <Text style={{fontWeight: '500'}}> сравнить с количеством показов рекламы</Text> за месяц на том или ином сайте, который рассматривается как рекламный носитель.
                        <Text style={{fontWeight: '500'}}> Сравнить можно либо прогнозно либо постфактум (посткампейн). </Text>
                    </Text>
                </View>

                <View>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{fontWeight: '500'}}>CPT</Text> корректно
                        <Text style={{fontWeight: '500'}}> сравнить с CPM</Text> рекламы на сайте.
                    </Text>
                </View>

                <View style={{marginBottom: 30}}>
                    <Text style={styles.textInfoContainer}>
                        <Text style={{fontWeight: '500'}}>Прогнозное количество клиентов</Text> корректно
                        <Text style={{fontWeight: '500'}}> сравнить с кликами</Text> по рекламе на выбранном сайте.{"\n"}
                        <Text style={{fontWeight: '500'}}>Сравнивать можно либо прогнозно либо постфактум (посткампейн).</Text>
                    </Text>
                </View>
                
                <View>
                    <Text style={styles.mainHeader}>Контакты</Text>
                </View>

                <View>
                    <Text style={styles.mainInfoContainer}>Обращение к нам ни к чему вас не обяжет, 
                    но вы сможете получше, поточнее примериться к нашим возможностям</Text>
                </View>
                

                <View style={styles.centerIcon}>
                    <PhoneIcon/>
                </View>

                <View>
                    <Text style={styles.contactInfoContainer}>
                        <Text style={{fontWeight: '500'}}>Контакты {"\n"}</Text>
                        <Text>Челябинск: +7(351) 218-85-45 {"\n"}Екатеринбург: +7(351) 218-85-45 {"\n"}</Text>
                    </Text>
                </View>

                <View>
                    <Text style={styles.contactInfoContainer}>
                        <Text style={{fontWeight: '500', fontSize: 16}}>sales@zaycev.net {"\n"}</Text>
                    </Text>
                </View>

                <View style={styles.centerIcon}>
                    <AddressIcon/>
                </View>

                <View>
                    <Text style={styles.contactInfoContainer}>
                        <Text style={{fontWeight: '500'}}>Адрес {"\n"}</Text>
                        <Text>Челябинск, ул. Энтузиастов, 30,{"\n"}офис 215{"\n"}</Text>
                    </Text>
                </View>

                <View style={{marginTop:45}}>
                    <Text style={styles.formLabelContainer}>
                        <Text>Отправить сообщение {"\n"}</Text>
                    </Text>
                </View>
                <View>
                    {mailError ? (<Text style={styles.errorText}>Введите E-mail</Text>) : null}
                    <TextInput
                        onFocus={() => setMailFocused(true)}
                        onBlur={() => setMailFocused(false)}
                        style={[styles.inputBorder, {height: 40, borderColor: mailFocused ? '#33ADD6' : mailError ? '#C93B59' : '#CCCCCC'}]}
                        placeholder='E-mail'
                        onChangeText={input => {setMail(input); setMailError(false);}}
                        value={mail}
                    />
                </View>

                <View>
                    {nameError ? (<Text style={styles.errorText}>Введите Имя</Text>) : null}   
                    <TextInput
                        onFocus={() => setNameFocused(true)}
                        onBlur={() => setNameFocused(false)}
                        style={[styles.inputBorder, {height: 40, borderColor: nameFocused ? '#33ADD6' : nameError ? '#C93B59' : '#CCCCCC'}]}
                        placeholder='Имя'
                        onChangeText={text => {setName(text); setNameError(false);}}
                        value={name}
                    />
                </View>

                <View>
                    {messageError ? (<Text style={styles.errorText}>Введите сообщение</Text>) : null}
                    <TextInput
                        onFocus={() => setMessageFocused(true)}
                        onBlur={() => setMessageFocused(false)}
                        multiline={true}
                        numberOfLines={5}
                        style={[styles.inputBorder, {paddingTop: 10, textAlignVertical: "top", borderColor: messageFocused ? '#33ADD6' : messageError ? '#C93B59' : '#CCCCCC'}]}
                        placeholder='Сообщение'
                        onChangeText={text => {setMessage(text); setMessageError(false);}}
                        value={message}
                    />
                </View>
                
                <View>
                    <TouchableOpacity
                        activeOpacity={.5}
                        style={styles.sendButton}
                        onPress={validate}
                    >
                        {fetching ? 
                            <View style={{flexDirection: 'row'}}><Text style={styles.sendButtonText}>Подождите </Text>
                            <ActivityIndicator style={{paddingTop: 5}} size="small" color="#FFFFFF" /></View>
                            : <Text style={styles.sendButtonText}>Отправить </Text>}
                        
                    </TouchableOpacity>
                </View>

                { complete ? 
                    <View style={styles.successBox}>
                        <Text style={styles.sendButtonText}>Спасибо! Данные успешно отправлены.</Text>
                    </View>
                : null }

                <View>
                    <Text style={styles.contactInfoContainer}>
                        {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                    </Text>
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
        marginBottom: 10,
    },
    lessInfoContainer:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 23,
        color:'#C93B59',
        marginBottom: 5,
    },
    textInfoContainer:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 20,
        color:'#2D4059',
        marginBottom: 15,
    },
    circleContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
    },
    circle:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
        height: 56,
        borderRadius: 56/2,
        borderColor: '#C93B59',
        borderWidth: 2,
    },
    centerIcon:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',marginTop: -15,
        marginTop: 25,
        marginBottom: 15,
    },
    contactInfoContainer:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 23,
        textAlign: 'center',
        color:'#2D4059',
    },
    formLabelContainer:{
        position: 'absolute',
        top:-25,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,                        
                    
        lineHeight: 23,
        color:'#2D4059',
    },
    sendButton:{
        height: 40,
        borderWidth: 1,
        borderColor: '#33ADD6',
        backgroundColor: '#33ADD6',
        padding: 15,
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      successBox:{
        marginTop: 20,
        height: 60,
        borderWidth: 1,
        borderColor: '#62C584',
        backgroundColor: '#62C584',
        padding: 15,
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      sendButtonText:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        color:  '#FFFFFF'
      },
      errorText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 23,
        color:'#C93B59',
      }
      
});

