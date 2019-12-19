import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import styled from 'styled-components'

const StyledText = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30;
    line-height: 35;
    text-align: center;
    color: ${Colors.baseTextColor};
    margin-bottom: 20;
`;

export default function MainHeader(props){
    return(
            <View>
                <StyledText style={{...props.style}}>{props.children}</StyledText>
            </View>
    );
}
