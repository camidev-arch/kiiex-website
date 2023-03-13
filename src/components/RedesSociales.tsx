import React, { useState } from 'react'
import RSIG from '../assets/icons/RSIG'
import RSLK from '../assets/icons/RSLK'
import RSTG from '../assets/icons/RSTG'
import RSTW from '../assets/icons/RSTW'
import RSWS from '../assets/icons/RSWS'
import RSFB from './RSFB'

interface IProps{
    colorIcon?:string,
    colorBackground?:string
    hoverColor?:string
}

const RedesSociales = ({colorIcon='#B3B3B3',colorBackground='#E6E6E6', hoverColor='#0F50CF'}:IProps) => {
    const [tg, setTg] = useState(false)
    const [lk, setLk] = useState(false)
    const [tw, setTw] = useState(false)
    const [ig, setIg] = useState(false)
    const [fb, setFb] = useState(false)
    const [ws, setWs] = useState(false)

  return (
    <div className='redes-sociales' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: colorBackground, padding: '3px', borderRadius: '100px', maxWidth:'50px', position:'relative', top:'6%', right:'-15%' }}>
    <div onMouseOver={()=>setTg(true)} onMouseLeave={()=>setTg(false)} style={{ margin: '3px' }}>
       <a href='https://t.me/kiiglobal' target={'_blank'}> <RSTG width={'30px'} color={tg ? hoverColor:colorIcon}/></a>
    </div>
    <div onMouseOver={()=>setLk(true)} onMouseLeave={()=>setLk(false)} style={{ margin: '3px' }}>
    <a href='https://www.linkedin.com/company/kiiglobal' target={'_blank'}> <RSLK width={'30px'} color={lk ? hoverColor:colorIcon} /></a>
    </div>
    <div  onMouseOver={()=>setTw(true)} onMouseLeave={()=>setTw(false)} style={{ margin: '3px' }}>
    <a href='https://twitter.com/KiiGlobal' target={'_blank'}> <RSTW width={'30px'} color={tw ? hoverColor:colorIcon} /></a>
    </div>
    <div onMouseOver={()=>setIg(true)} onMouseLeave={()=>setIg(false)} style={{ margin: '3px' }}>
    <a href='https://www.instagram.com/kiiexchange/' target={'_blank'}> <RSIG width={'30px'} color={ig ? hoverColor:colorIcon}/></a>
    </div>
    <div onMouseOver={()=>setFb(true)} onMouseLeave={()=>setFb(false)} style={{ margin: '3px' }}>
    <a href='https://www.facebook.com/kiiglobal' target={'_blank'}>  <RSFB width={'30px'} color={fb ? hoverColor:colorIcon}/></a>
    </div>

</div>
  )
}

export default RedesSociales

