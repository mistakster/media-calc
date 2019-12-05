import React from 'react'
import Svg, { Path } from 'react-native-svg'


export default function PhoneIcon(props){
    return(
        <Svg width={34} height={64} fill="none" {...props}>
            <Path
                d="M33 1H1v62h32V1zM13 5h8M1 51h32M1 9h32"
                stroke="#000"
                strokeWidth={2}
                strokeMiterlimit={10}
            />
            <Path
                d="M17 59a2 2 0 100-4 2 2 0 000 4z"
                stroke="#000"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinejoin="bevel"
            />
        </Svg>
    )
}
