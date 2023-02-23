import { Button, Card, Col, Image, Input, Row } from 'antd'

import fondo from '../assets/icons/banner-thumb.png'
import Title from 'antd/lib/typography/Title'
import AppStoreIcon from '../assets/icons/AppStoreIcon'
import GoogleStoreIcon from '../assets/icons/GoogleStoreIcon'
import QrIcon from '../assets/icons/QrIcon'
import ApiIcon from '../assets/icons/ApiIcon'
import RSTG from '../assets/icons/RSTG'
import RSLK from '../assets/icons/RSLK'
import RSTW from '../assets/icons/RSTW'
import RSIG from '../assets/icons/RSIG'
import RSFB from './RSFB'
import RSWS from '../assets/icons/RSWS'
import ArrowRigth from '../assets/icons/ArrowRigth'
import RedesSociales from './RedesSociales'
import { ArrowRightOutlined } from '@ant-design/icons'

const SectionOneCompany = () => {
    return (
        <Row className='main-row-one-company' >
            <Col className='column-one-one' xs={24} md={12} lg={14} span={14} >
                <Card className='card-style' bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', padding: '0px', height: '100%' }} style={{ height: '100%' }}>
                    <h1 className='main-title2' >
                        ¡Acepta criptomonedas<br></br> en tan solo segundos!
                    </h1>
                    <p className='p-company-one'>
                        Herramientas empresariales avanzadas para<br></br> potenciar los pagos con criptomonedas.
                    </p>
                    <Row style={{ width: '100%' }}>
                        <Col xs={24} md={11} lg={11}>
                            <input className='input-one1' placeholder={'Email'}></input>
                        </Col>
                        <Col xs={24} md={8} lg={8} style={{display:'flex', justifyContent:'center'}}>
                            <Button className='boton-one1' >Comenzar Ahora <ArrowRightOutlined ></ArrowRightOutlined></Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col className='container-img-company'  xs={24} md={12} lg={10} xl={10} span={10}>
                <Image className='img-one-company' src={fondo} preview={false}>
                </Image>
            </Col>
            <RedesSociales hoverColor='white' colorBackground='#233674' colorIcon='rgb(134,156,210)' />
        </Row>
    )
}

export default SectionOneCompany