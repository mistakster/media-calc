import React from 'react'
import Svg, { Path } from 'react-native-svg'
import Colors from '../../constants/Colors';


export default function CalculatorIcon(props){
    return(
        <Svg width={18} height={18} viewBox="0 0 18 18" {...props}>
            <Path
                d="M8.092 0H2.077C.93 0 0 .93 0 2.077v6.015h8.092V0zM5.955 4.485H4.553v1.409h-.9V4.485h-1.4v-.892h1.4v-1.4h.9v1.4h1.402v.892zM17 2.077C17 .93 16.07 0 14.923 0H8.908v8.092H17V2.077zm-2.403 2.472h-3.414V3.537h3.414v1.012zM0 14.923C0 16.07.93 17 2.077 17h6.015V8.908H0v6.015zm2.535-3.795h1.047l.547.947.533-.947H5.68l-1.074 1.593 1.116 1.671H4.656l-.564-.983-.567.983H2.486l1.116-1.655-1.067-1.609zM8.908 17h6.015C16.07 17 17 16.07 17 14.923V8.908H8.908V17zm2.358-5.336h3.249v.79h-3.249v-.79zm0 1.401h3.249v.79h-3.249v-.79z"
                fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
        </Svg>
    )
}
