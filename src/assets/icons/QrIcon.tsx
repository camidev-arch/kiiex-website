import { height } from '@mui/system'
import React from 'react'

const QrIcon = ({width='40', height='40', color='gray'}:any) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill={'#E6E6E6'} xmlns="http://www.w3.org/2000/svg">
<rect x="13.5" y="13.5" width="10.0905" height="10.0905" stroke={color} stroke-width="3"/>
<rect x="16.3594" y="16.3594" width="4.36351" height="4.36351" fill={color}/>
<rect x="32.7188" y="22.3594" width="3.27263" height="3.27263" fill={color}/>
<rect x="27.2578" y="22.3594" width="3.27263" height="3.27263" fill={color}/>
<rect x="28.7578" y="13.5" width="5.72701" height="5.72701" stroke={color} stroke-width="3"/>
<rect x="28.7578" y="28.7812" width="5.72701" height="5.72701" stroke={color} stroke-width="3"/>
<rect x="22.3594" y="27.2812" width="3.27263" height="3.27263" fill={color}/>
<rect x="22.3594" y="32.7422" width="3.27263" height="3.27263" fill={color}/>
<rect x="13.5" y="28.7812" width="5.72701" height="5.72701" stroke={color} stroke-width="3"/>
</svg>
  )
}

export default QrIcon