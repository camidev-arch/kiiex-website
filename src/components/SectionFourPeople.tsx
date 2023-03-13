import { Button, Col, Image, Row } from 'antd'
import React from 'react'
import fondo from '../assets/icons/banner-thumb.png'
import CardBeneficios, { IPropsCards } from './CardBeneficios'
import AhorroIcon from '../assets/icons/AhorroIcon'
import PayIcon from '../assets/icons/PayIcon'
import AppOkIcon from '../assets/icons/AppOkIcon'

const SectionFourPeople = () => {
    const CARDS: IPropsCards[] = [{
        title: 'Una App estable y segura a tu alcance',
        description: 'No experimentarás molestias, demoras o caídas de nuestra plataforma.',
        icon: <AppOkIcon color='#00103B' width='100px' heigth='300px' />
    },
    {
        title: 'Pagos instantáneos',
        description: 'Procesa tus pagos de manera rápida, segura y con una comisión pensada en tu bienestar.',
        icon: <AhorroIcon color='#00103B' width='140px' heigth='100px' />
    },
    {
        title: 'Pagos instantáneos',
        description: 'No necesitas buscar herramientas por fuera, todo lo tienes aquí.',
        icon: <PayIcon color='#00103B' width='100px' heigth='140px' />
    }

    ]
    return (
        <Row className='row-center main-row-three' style={{ paddingRight: '12%', paddingLeft: '12%', paddingBottom: '100px' }} >
            <Col className='col-one-beneficios2' span={13} xl={13} lg={13} md={24} xs={24} >

                <h1 className='title-ben' style={{ fontSize: '46px',color:'#00103B' }}>
                    <b style={{color:'#00103B'}}>Coin, Wallet y Exchange, KII es todo un ecosistema para ti.</b>
                </h1>
                <p className='p-one-people-six' style={{ fontSize: '18px' }}>
                Para acceder a nuestras soluciones solo debes empezar por crear tu cuenta totalmente gratis.
                </p>
                <div className='cardContainer'>
                {CARDS.map(({ description, icon, title }) => {
                    return <CardBeneficios title={title} description={description} icon={icon} reverse />
                })}
                </div>
               
            </Col>
            <Col className='container-img-company2' xs={24} md={11} lg={11} xl={11} span={11}>
                <Image className='img-one-company2' src={fondo} preview={false}>
                </Image>
            </Col>
        </Row>
    )
}

export default SectionFourPeople