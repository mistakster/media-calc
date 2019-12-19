import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import styled from 'styled-components'

const StyledText = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 19;
    line-height: 21;
    text-align: center;
    color: ${Colors.baseTextColor};
    margin-bottom: 25;
`;

export default function MainInfo(props){
    return(
        <View>
            <StyledText style={{...props.style}}>
                {props.children}
            </StyledText>
        </View>
    );
}
