import { Button, Col, Image, Row } from 'antd'
import React from 'react'
import fondo from '../assets/icons/banner-thumb.png'
import CardBeneficios, { IPropsCards } from './CardBeneficios'
import AhorroIcon from '../assets/icons/AhorroIcon'
import PayIcon from '../assets/icons/PayIcon'
import AppOkIcon from '../assets/icons/AppOkIcon'

const SectionFourPeople = () => {
    const CARDS: IPropsCards[] = [{
        title: 'Una APP estable y segura a tu alcance',
        description: 'Con nuestro exchange no experimentarás las molestas caídas, siempre estamos online',
        icon: <AppOkIcon color='#00103B' width='100px' heigth='300px' />
    },
    {
        title: 'Ahorro fácil con grandes recompensas',
        description: 'Conserva tus activos como KII, USDC, USDT y comienza a recibir beneficios de inmediato',
        icon: <AhorroIcon color='#00103B' width='100px' heigth='100px' />
    },
    {
        title: 'Pagos instantáneaos por menos del 1%',
        description: 'Procesa tus pagos de manera facil y rapida por menos del 1% de comision',
        icon: <PayIcon color='#00103B' width='100px' heigth='140px' />
    }

    ]
    return (
        <Row className='row-center main-row-three' style={{ paddingRight: '12%', paddingLeft: '12%', paddingBottom: '100px' }} >
            <Col className='col-one-beneficios2' span={13} xl={13} lg={13} md={24} xs={24} >

                <h1 style={{ fontSize: '46px',color:'#00103B' }}>
                    <b style={{color:'#00103B'}}>¡Más que un exchange una app para ganar!</b>
                </h1>
                <p className='p-one-people-six' style={{ fontSize: '18px' }}>
                    No necesitas una fortuna para acceder a nuestros productos financieros, comienza creando una cuenta en pocos pasos
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