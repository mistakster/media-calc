import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput} from "react-native";
import Colors from "../constants/Colors";

function getBorderColod(focused, error){
    return(
        focused
            ? "#33ADD6"
            : error
                ? Colors.hightlightTextColor
                : "#CCCCCC"
    );
}

export default function TextField(props){
    const [focused, setFocused] = useState(false);

    const {
        values,
        errors,
        name,
        onChange,
        style,
        ...restProps
    } = props;

    const value = values[name];
    const error = errors[name];
    return(
        <View>
        {error && (
            <Text style={styles.errorText}>{error}</Text>
        )}
        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={(text)=> onChange(text)}
            style={[
                styles.inputBorder,
                {
                    ...style,
                    borderColor: getBorderColod(focused, error)
                }
            ]}
            name={name}
            value={value}
            {...restProps}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    inputBorder: {
        borderRadius: 2,
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 10,
        height: 40,
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