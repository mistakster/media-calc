import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Text } from 'react-native';
import Colors from "../constants/Colors";
import styled from 'styled-components'

const StyledView = styled.View`
    background-color: white;
    elevation:17;
    box-shadow: 0px 4px 80px rgba(49, 123, 177, 0.03);

`;

export default function CardView(props){

    return (
        <TouchableWithoutFeedback  onPress={props.handleClick}>
            <View style={{width: props.width * .4, height: props.height * .4}}>
                <StyledView style={{flex:1, flexDirection: 'column', alignItems: 'stretch', 
                justifyContent: 'center', margin: 10}}>
                    <View style={{flex:3, justifyContent: 'flex-end', alignItems: 'center'}}>
                        {props.children}
                    </View>
                    <View style={{flex:2, justifyContent: 'flex-start', paddingTop: 15, alignItems: 'center'}}>
                        <Text style={styles.cardText}>{props.text}</Text>
                    </View>
                    <View style={[{paddingLeft: 10, paddingRight: 10, flex: 2, justifyContent: 'center', 
                    alignItems: 'stretch'}, {opacity: props.selected == props.number ? .5 : 1}]}>
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
    chooseButton:{
        height: 25,
        borderWidth: 1,
        borderColor: Colors.lightBackgroundColor,
        backgroundColor: Colors.lightBackgroundColor,
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