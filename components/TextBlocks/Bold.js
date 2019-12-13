import React from "react";
import { Text } from "react-native";

export default function Bold(props){
    return (
        <Text style={{fontWeight: "500" }}>{props.children}</Text>
    );
} 