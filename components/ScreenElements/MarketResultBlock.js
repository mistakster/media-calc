import React from 'react';
import { View } from 'react-native';
import ThirdPathIcon from '../Icons/ThirdPathIcon';
import MainHeader from '../TextBlocks/MainHeader';
import MainInfo from '../TextBlocks/MainInfo';
import LessInfo from '../TextBlocks/LessInfo';
import B from "../TextBlocks/Bold";
import styled from 'styled-components'

const IconView = styled.View`
	margin-left: 25;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5
`;

const ImageView = styled.View`
	margin-top: 15;
	margin-bottom: 15
`;

const StyledImage = styled.Image`
	width: 300; 
	height: 200; 
	border-radius:9;
`;

export default function MarketResultBlock(props){
	const {
		resultHeader,
		resultInfo,
		resultSource,
		resultText
	} = props;

	return(
		<View>
			<MainHeader>{resultHeader}</MainHeader>

			<MainInfo>Вам подходит {resultHeader}</MainInfo>

			<IconView> 
				<ThirdPathIcon />
			</IconView>
			<ImageView>
				<StyledImage
					source={resultSource}
				/>
			</ImageView>
			<LessInfo>
				<B>
					{resultInfo}{"\n"}{"\n"}
				</B> 
					{resultText}
			</LessInfo>
		</View>
	);
}
