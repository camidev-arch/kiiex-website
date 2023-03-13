import { Button, Card, Col, Image, Input, Row } from 'antd'
import fondo from '../assets/backgrounds/mobiles.png'
import AppStoreIcon from '../assets/icons/AppStoreIcon'
import GoogleStoreIcon from '../assets/icons/GoogleStoreIcon'
import QrIcon from '../assets/icons/QrIcon'
import ApiIcon from '../assets/icons/ApiIcon'
import ArrowRigth from '../assets/icons/ArrowRigth'
import RedesSociales from './RedesSociales'
import { useState } from 'react'

const SectionOne = () => {
    const [apple, setApple] = useState(false)
    const [qr, setQr] = useState(false)
    const [api, setApi] = useState(false)
    const [gg, setGg] = useState(false)
    return (
        <Row id='top' className='main-row-one' style={{ paddingRight: '12%', paddingLeft: '11%' }}>
            <Col className='column-one-one' xs={24} md={12} lg={12} span={12} >
                <Card className='card-style' bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'100%', padding:'0px' }} style={{}}>
                    <h1 className='main-title'>
                    #TradeConKIIEX
                    </h1>
                    <p className='main-p' >
                    Nuestro Exchange está pensado en una experiencia de usuario fácil e intuitiva. Somos la
plataforma ideal para comprar, vender e intercambiar criptomonedas. Con nosotros,
podrás hacer trading con las herramientas y comisiones más competitivas del mercado.
                    </p>
                    <Row style={{ width: '100%' }}>

                        <Col  xs={24} md={8} lg={8} >
                        <a href='https://ui.kiire.apstage.net/signup'><Button className='boton-one' style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}>Comenzar Ahora {<ArrowRigth color={'white'} heigth='25px' width='25px' />}</Button></a>
                        </Col>
                    </Row>
                    <Row className='row-one-apps'>
                        <div onMouseOver={()=>setApple(true)} onMouseLeave={()=>setApple(false)} style={{ backgroundColor: '#E6E6E6', borderRadius: '100px', margin: '5px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <a href='#'><AppStoreIcon width='30px' height='30px' color={ apple ? '#1B3C8D': '#B3B3B3'} /></a>
                        </div>
                        <div onMouseOver={()=>setGg(true)} onMouseLeave={()=>setGg(false)} style={{ backgroundColor: '#E6E6E6', borderRadius: '100px', margin: '5px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a href='#'> <GoogleStoreIcon width='30px' height='30px' color={ gg ? '#1B3C8D': '#B3B3B3'} /></a>
                        </div>
                        <div onMouseOver={()=>setQr(true)} onMouseLeave={()=>setQr(false)} style={{ backgroundColor: '#E6E6E6', borderRadius: '100px', margin: '5px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a href='#'> <QrIcon  width='38px' height='38px' color={ qr ? '#1B3C8D': '#B3B3B3'} /></a>
                        </div>
                        <div onMouseOver={()=>setApi(true)} onMouseLeave={()=>setApi(false)} style={{ backgroundColor: '#E6E6E6', borderRadius: '100px', margin: '5px', width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a href='#'>  <ApiIcon width='25px' height='25px' color={ api ? '#1B3C8D': '#B3B3B3'}/></a>
                        </div>

                    </Row>
                </Card>
            </Col>
            <Col className='col-img-one'  xs={24} md={12} lg={12} span={12}>

                <Image className='img-one' src={fondo}   preview={false}>

                </Image>
                <div style={{position:'relative', right:'-30%' }}>
                <RedesSociales hoverColor='#1B3C8D' />
                </div>
               
            </Col>
         
        </Row>
    )
}

export default SectionOne