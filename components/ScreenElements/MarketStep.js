import React from 'react';
import CardView from '../CardView'
import MainInfo from '../TextBlocks/MainInfo';
import MainHeader from '../TextBlocks/MainHeader';
import styled from 'styled-components'

const IconView = styled.View`
	margin-left: 25;
	display: flex;
	justify-content: center;
	align-items: center; 
	margin-top: 5;
`;

const CardsView = styled.View`
	display: flex;
	justify-content: center;
	align-items: flex-start; 
	flex-wrap: wrap;
	flex-direction: row;
	margin-bottom: 30;
`;

export default function MarketStep(props){
	const {
		header, 
		icon,
		info,
		width,
		height,
		selected,
		onClick,
		data
	} = props;

	return(
		<>
			<MainHeader>{header}</MainHeader>

			<MainInfo>{info}</MainInfo>

			<IconView> 
				{icon}
			</IconView>

			<CardsView style={{flex:1, alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row',
				flexWrap: 'wrap', marginBottom: 30}}>
				{data.icons.map(
					(element, key)=>{
						return(
							<CardView key={key} width={width} height={height} number={key} selected={selected} 
							handleClick={()=>onClick(key)} text={data.titles[key]}>
							{element}
							</CardView>
						) 
					}
				)}
			</CardsView>
		</>
	);
}