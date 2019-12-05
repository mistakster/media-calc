import React from 'react'
import Svg, { Path } from 'react-native-svg'


export default function WhiteMarketIcon(props){
    return(
        <Svg width={21} height={21} fill="none" {...props}>
            <Path
                d="M5.706 4.108h-.913c-.91 0-1.675.6-1.944 1.422A3.426 3.426 0 000 8.902a3.426 3.426 0 002.849 3.371 2.05 2.05 0 001.944 1.422h.913c.828 0 1.67.04 2.511.111V3.997a29.68 29.68 0 01-2.51.111zm-2.967 6.73a2.058 2.058 0 01-1.37-1.936c0-.893.573-1.655 1.37-1.938v3.875zM9.317 18.185l-.49-2.943a28.743 28.743 0 00-3.121-.178h-.913c-.046 0-.091-.005-.137-.006l.638 3.773a2.049 2.049 0 002.026 1.712 2.025 2.025 0 001.997-2.358zM19.631 0a1.37 1.37 0 00-1.37 1.37v15.064a1.37 1.37 0 002.74 0V1.37A1.37 1.37 0 0019.63 0zM9.586 3.848v10.108c3.26.424 4.917 1.072 7.304 1.891V1.957c-2.37.812-4.03 1.465-7.304 1.89z"
                fill="#fff"
            />
        </Svg>
    )
}