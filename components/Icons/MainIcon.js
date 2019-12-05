import React from 'react'
import Svg, { Path } from 'react-native-svg'
import Colors from '../../constants/Colors';


export default function MainIcon(props){
    const color = props.focused ?  Colors.tabIconSelected : Colors.tabIconDefault;
    return(
        <Svg width={18} height={18} viewBox="0 0 18 18" {...props}>
            <Path
                d="M8.045 1.892l-.001 8.043 8.045.002c0 4.444-3.6 8.044-8.044 8.044A8.045 8.045 0 018 1.892h.046z"
                fill={color}
            />
            <Path
                d="M9.341.02A8.66 8.66 0 0118 8.68l-8.665.01S9.307.02 9.341.02z"
                fill={color}
            />
        </Svg>
    )
}