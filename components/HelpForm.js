import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput,TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";


export default function HelpForm(props){
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [complete, setComplete] = useState(false);
    const [fetching, setFetching] = useState(false);

    const [mailFocused, setMailFocused] = useState(false);
    const [mailError, setMailError] = useState(false);

    const [nameFocused, setNameFocused] = useState(false);
    const [nameError, setNameError] = useState(false);

    const [messageFocused, setMessageFocused] = useState(false);
    const [messageError, setMessageError] = useState(false);

    function validate() {
        if (fetching) return false;
        setMailError(mail.length > 0 ? false : true);
        setNameError(name.length > 0 ? false : true);
        setMessageError(message.length > 0 ? false : true);
        if (mail.length > 0 && name.length > 0 && message.length > 0) {
        setFetching(true);
        new Promise(function(resolve, reject) {
            setTimeout(() => {
            resolve(false);
            }, 2000);
        })
            .then(res => {
            setComplete(true);
            setFetching(res);
            setMail("");
            setName("");
            setMessage("");
            })
            .catch(err => console.log(err));
        }
    }

    return(
        <View>
            <View style={{ marginTop: 45 }}>
                <Text style={styles.formLabelContainer}>
                    <Text>Отправить сообщение {"\n"}</Text>
                </Text>
            </View>
            <View>
                {mailError ? (
                    <Text style={styles.errorText}>Введите E-mail</Text>
                ) : null}
                <TextInput
                    onFocus={() => setMailFocused(true)}
                    onBlur={() => setMailFocused(false)}
                    style={[
                        styles.inputBorder,
                        {
                            height: 40,
                            borderColor: mailFocused
                            ? "#33ADD6"
                            : mailError
                            ? Colors.hightlightTextColor
                            : "#CCCCCC"
                        }
                    ]}
                    placeholder="E-mail"
                    onChangeText={input => {
                    setMail(input);
                    setMailError(false);
                    }}
                    value={mail}
                />
            </View>

            <View>
                {nameError ? <Text style={styles.errorText}>Введите Имя</Text> : null}
                <TextInput
                    onFocus={() => setNameFocused(true)}
                    onBlur={() => setNameFocused(false)}
                    style={[
                        styles.inputBorder,
                        {
                            height: 40,
                            borderColor: nameFocused
                            ? "#33ADD6"
                            : nameError
                            ? Colors.hightlightTextColor
                            : "#CCCCCC"
                        }
                    ]}
                    placeholder="Имя"
                    onChangeText={text => {
                    setName(text);
                    setNameError(false);
                    }}
                    value={name}
                />
            </View>

            <View>
                {messageError ? (
                    <Text style={styles.errorText}>Введите сообщение</Text>
                ) : null}
                <TextInput
                    onFocus={() => setMessageFocused(true)}
                    onBlur={() => setMessageFocused(false)}
                    multiline={true}
                    numberOfLines={5}
                    style={[
                        styles.inputBorder,
                        {
                            paddingTop: 10,
                            textAlignVertical: "top",
                            borderColor: messageFocused
                            ? "#33ADD6"
                            : messageError
                            ? Colors.hightlightTextColor
                            : "#CCCCCC"
                        }
                    ]}
                    placeholder="Сообщение"
                    onChangeText={text => {
                    setMessage(text);
                    setMessageError(false);
                    }}
                    value={message}
                />
            </View>

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

            <View>
                <Text style={styles.contactInfoContainer}>
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBorder: {
        borderRadius: 2,
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 10
    },
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
    },
    errorText: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 23,
        color: Colors.hightlightTextColor
    }
});