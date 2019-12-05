import React from 'react'
import Svg, { Path } from 'react-native-svg'


export default function AddressIcon(props){
    return(
        <Svg width={44} height={65} fill="none" {...props}>
            <Path
                d="M22 28a6 6 0 100-12 6 6 0 000 12z"
                stroke="#000"
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M43 22.735C42.948 10.73 33.599 1 22 1S1 10.73 1 22.735C1 38.271 21.965 63 21.965 
                63S43.069 38.271 43 22.735z"
                stroke="#000"
                strokeWidth={2}
                strokeMiterlimit={10}
            />
        </Svg>
    )
}
