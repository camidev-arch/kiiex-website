import { Col, Row } from 'antd'
import React from 'react'
import './index.css'
import ExchangeCard from './ExchangeCard'
import SafeStorage from '../assets/icons/SafeStorage'
import CompraVende from '../assets/icons/CompraVende'
import UserXP from '../assets/icons/UserXP'
import { TransaccionEficaz } from '../assets/icons/TransaccionEficaz'
import ComunidadGlobal from '../assets/icons/ComunidadGlobal'
import Soporte from '../assets/icons/Soporte'

const CARDS = [
    {
        title: 'Registro Rápido y Seguro',
        description: 'El mercado financiero está esperando por ti y estamos seguros que quieres acceder sin procesos largos ni complejos.',
        icon: (color: string) => <SafeStorage width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Comisiones EXtremadamente atractivas',
        description: 'Revisa nuestro cuadro de comisiones, y entenderás por qué somos tan competitivos siempre pesando en tu beneficio.',
        icon: (color: string) => <CompraVende width='50px' heigth='50px' color={color} />
    },
    {
        title: 'EXperiencia intuituva y fácil',
        description: 'Dinamismo, simplicidad y adaptación en cada recursos que tenemos tanto a nivel gráfico como a nivel de operaciones.',
        icon: (color: string) => <UserXP width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Tus monedas favoritas',
        description: 'Varios pares de criptomonedas están disponibles para que siempre tengas opciones, pensando siempre en tus beneficios.',
        icon: (color: string) => <TransaccionEficaz width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Estructura segura',
        description: 'Una plataforma que se adapta a ti y a tu estilo de trading, siempre pensando en la seguridad como base del trading.',
        icon: (color: string) => <ComunidadGlobal width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Soporte de verdad',
        description: 'Hablarás con personas, no con máquinas, lo cual hace que nuestro servicio de soporte humano sume a tu tranquilidad.',
        icon: (color: string) => <Soporte width='50px' heigth='50px' color={color} />
    }

]

const SectionThree = () => {
    return (
        <>
            <Row className='row-center main-row-three' >
                <Col span={16} style={{ paddingTop: '100px', marginBottom: '60px', maxWidth:'0 !important' }}>
                    <h2>
                        <b className='title-three-one' style={{fontSize:'40px !important', textAlign:'center'}}>Los beneficios que tenemos para ti no los encontrarás en ningún otro lugar</b>
                    </h2>
                    <p className='p-three-one' >
                    Pensamos en el tiempo y recursos de nuestros usuarios, por eso tenemos:
                    </p>
                </Col>
            </Row>
            <Row style={{ display:'flex', justifyContent:'center', paddingRight: '12%', paddingLeft: '12%', backgroundColor: 'rgb(242 242 242 / 7%) ', paddingBottom: '100px' }}>
                {CARDS.map((card) => {
                    return <Col md={12} xs={24} lg={8} sm={24} span={8} style={{ margin: '0px', marginRight:'-30px',marginLeft:'-30px',padding: '0px',display:'flex', alignItems:'center', justifyContent:'center',  }}> <ExchangeCard colorBody='white' colorText='#0F4DCC' clase={card.title == 'Compra y vende' ? 'cards1': undefined} description={card.description} title={card.title} icon={card.icon} /> </Col>
                })}
            </Row>
        </>
    )
}

export default SectionThree