import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import InfoCircle from './TextBlocks/InfoCircle';
import Colors from "../constants/Colors";


export default function MarketListElement(props){
	
	const {header, text, number, style} = props;

	return(
		<View style={[styles.circleAndTextContainer , {...style}]}>
			<InfoCircle>{number}</InfoCircle>
			<View style={styles.textColorContainer}>
				<Text style={styles.colorizedText}>{header}</Text>
				<Text style={styles.nearCircleText}>{text} </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
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