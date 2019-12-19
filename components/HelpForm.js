import React, { useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";
import TextField from "./TextField";


export default function HelpForm(){

    const [values, setValues] = useState({name: '', mail: '', message: ''});
    const [errors, setErrors] = useState({name: false, mail: false, message: false});
    
    const [complete, setComplete] = useState(false);
    const [fetching, setFetching] = useState(false);

    function onChange(name, text){
        setValues({...values, [name]: text});
        setErrors({...errors, [name]: false})
    }

    function validate() {
        if (fetching) return false;
        if (values.mail.length > 0 && values.name.length > 0 && values.message.length > 0) {
            setFetching(true);
            new Promise(function(resolve) {
                setTimeout(() => {
                resolve(false);
                }, 1000);
            })
                .then(res => {
                    setComplete(true);
                    setFetching(res);
                        setValues({name: '', mail: '', message: ''});
                })
                .catch(err => console.log(err));
        }
        else{
            setErrors(
                {
                    name: values.name.length > 0 ? false : 'Введите Имя',
                    mail: values.mail.length > 0 ? false : 'Введите E-mail',
                    message: values.message.length > 0 ? false : 'Введите сообщение',
                }
            );
        }
    }

    return(
        <View>
            <View style={{ marginTop: 45 }}>
                <Text style={styles.formLabelContainer}>
                    <Text>Отправить сообщение {"\n"}</Text>
                </Text>
            </View>
            
            <TextField values={values} errors={errors} name='mail' onChange={(text)=>onChange('mail', text)}
                placeholder='E-mail'/>
            <TextField values={values} errors={errors} name='name' onChange={(text)=>onChange('name', text)}
                placeholder='Имя' />
            <TextField values={values} errors={errors} name='message' multiline={true} numberOfLines={5}
                style={{height: 140, paddingTop: 10, textAlignVertical: "top"}}  
                onChange={(text)=>onChange('message', text)} placeholder='Сообщение'/>

            <View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.sendButton}
                    onPress={validate}
                >
                    {fetching ? (
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.sendButtonText}>Подождите </Text>
                        <ActivityIndicator
                        style={{ paddingTop: 5 }}
                        size="small"
                        color="#FFFFFF"
                        />
                    </View>
                    ) : (
                    <Text style={styles.sendButtonText}>Отправить </Text>
                    )}
                </TouchableOpacity>
            </View>

            {complete ? (
            <View style={styles.successBox}>
                <Text style={styles.sendButtonText}>
                Спасибо! Данные успешно отправлены.
                </Text>
            </View>
            ) : null}

            <View style={{marginBottom: 70}} />
        </View>
    )
}

const styles = StyleSheet.create({
    formLabelContainer: {
        position: "absolute",
        top: -25,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 23,
        color: Colors.baseTextColor
    },
    sendButton: {
        height: 40,
        borderWidth: 1,
        color: Colors.lightBackgroundColor,
        backgroundColor: Colors.lightBackgroundColor,
        borderColor: Colors.lightBackgroundColor,
        padding: 15,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    successBox: {
        marginTop: 20,
        height: 60,
        borderWidth: 1,
        borderColor: "#62C584",
        backgroundColor: "#62C584",
        padding: 15,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    sendButtonText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
        color: "#FFFFFF"
    }
});