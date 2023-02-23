import { Button, Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import './index.css'
import { TransaccionEficaz } from '../assets/icons/TransaccionEficaz'
import FastConfigIcon from '../assets/icons/FastConfigIcon'
import WorldIcon from '../assets/icons/WorldIcon'
import CardCompany from './CardCompany'
import { ArrowRightOutlined } from '@ant-design/icons'
import ArrowRigth from '../assets/icons/ArrowRigth'

const CARDS = [
    {
        title: 'Configuración Rápida',
        description: 'De los primeros pasos en solo minutos con nuestro producto autogestionado',
        icon: (color: string) => <FastConfigIcon width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Conversión Fácil',
        description: 'Puedes cambiar tus criptomonedas por efectivo con nuestro producto gestionado por KiiEx.',
        icon: (color: string) => <TransaccionEficaz width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Mercado Global',
        description: 'Recibe pagos en cualquier momento de clientes que estén en cualquier lugar del mundo.',
        icon: (color: string) => <WorldIcon width='50px' heigth='50px' color={color} />
    }

]
const SectionTwoCompany = () => {
    return (
        <>
            <Row className='row-center main-row-three' style={{ paddingRight: '10%', paddingLeft: '10%' }} >
                <Col span={24} style={{ paddingTop: '100px', marginBottom: '60px', }}>
                    <h1 className='title-section-two-company' >
                        KII EXCHANGE
                    </h1>
                    <h1 className='subtitle-section-two-company' >
                        <b>Somos el aliado cripto más confiable para tu negocio</b>
                    </h1>
                    <p className='p-section-two-company'>
                        Hemos desarrollado la herramienta más adecuada para que tu empresa comience a
                        aceptar todos los pagos con las criptomonedas más populares
                    </p>
                </Col>
            </Row>
            <Row style={{ paddingRight: '12%', paddingLeft: '12%', backgroundColor: 'rgb(242 242 242 / 7%) ', paddingBottom: '100px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                {CARDS.map((card) => {
                    return <Col md={8} xs={24} lg={8} span={8} style={{display:'flex', justifyContent:'center'}}> <CardCompany colorText='#0F4DCC' description={card.description} title={card.title} icon={card.icon} /> </Col>
                })}
            </Row>
            <Row className='row-company-blue' style={{ paddingLeft: '12%', paddingRight: '12%', backgroundColor: 'rgb(242 242 242 / 7%)', paddingBottom: '100px', minHeight: '300px' }}>
                <Col className='sectionTwoBlue' md={24} xs={24} lg={24} span={24} style={{ margin: '0px', padding: '0px', width: '100%', display:'flex', alignItems:'center' }} >
                    <h1 className='title-section-blue-two-company' style={{color:'white',}}>Diseñado para recibir pagos de cualquier persona sin importar donde estés.</h1>
                    <div>
                        <Title className='title-col-two-two' >
                            ¡Comienza hoy mismo!
                        </Title>
                        <Button className='boton-comienza-ahora2' style={{ backgroundColor: 'white', height: '50px', width: '230px',  fontSize: '20px', margin: '10px' }}>Regístrate aquí <ArrowRigth color='white' width='20px' heigth='20px' /></Button>
                    </div>
                </Col>

            </Row>
        </>
    )
}

export default SectionTwoCompany