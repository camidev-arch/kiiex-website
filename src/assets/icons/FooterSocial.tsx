import shadows from '@mui/material/styles/shadows'
import { Button } from 'antd'
import React, { useState } from 'react'
import FBboldIcon from './FBboldIcon'
import IGboldIcon from './IGboldIcon'
import LKboldIcon from './LKboldIcon'
import TGboldIcon from './TGboldIcon'
import TWboldIcon from './TWboldIcon'
const stylesBoton = {height:'50px', width:'50px', borderRadius:'100px', margin:'10px', display:'flex', justifyContent:'center', alignItems:'center' }

const FooterSocial = () => {
    const [tg, setTg] = useState(false)
    const [lk, setLk] = useState(false)
    const [tw, setTw] = useState(false)
    const [ig, setIg] = useState(false)
    const [fb, setFb] = useState(false)

  return (
    <div style={{display:'flex', borderRadius:'20px', backgroundColor:'##e4e4e44d', height:'90px', justifyContent:'center'}}>
        <a href='https://www.facebook.com/kiiglobal'>
        <Button onMouseOver={()=>setFb(true)} onMouseLeave={()=>setFb(false)} className='btn-footer' style={stylesBoton} >
            <FBboldIcon width={30} height={30} color={fb ? 'white': '#CCCCCC'} />
        </Button>
        </a>
        <a href='https://twitter.com/KiiGlobal'>
        <Button onMouseOver={()=>setTw(true)} onMouseLeave={()=>setTw(false)} className='btn-footer' style={stylesBoton} >
            <TWboldIcon width={22} height={22}  color={tw ? 'white': '#CCCCCC'} />
        </Button>
        </a>
        <a href='https://www.instagram.com/kiiexchange/'>
        <Button onMouseOver={()=>setIg(true)} onMouseLeave={()=>setIg(false)} className='btn-footer' style={stylesBoton} >
            <IGboldIcon width={22} height={22}  color={ig ? 'white': '#CCCCCC'}/>
        </Button>
        </a>
        <a href='https://www.linkedin.com/company/kiiglobal/'>
        <Button onMouseOver={()=>setLk(true)} onMouseLeave={()=>setLk(false)} className='btn-footer' style={stylesBoton}>
            <LKboldIcon width={22} height={22}  color={lk ? 'white': '#CCCCCC'}/>
        </Button>
        </a>
        <a href='https://t.me/kiiglobal'>
        <Button onMouseOver={()=>setTg(true)} onMouseLeave={()=>setTg(false)} className='btn-footer' style={stylesBoton}>
            <TGboldIcon width={18} height={18}  color={tg ? 'white': '#CCCCCC'}/>
        </Button>
        </a>
    </div>
  )
}

export default FooterSocial