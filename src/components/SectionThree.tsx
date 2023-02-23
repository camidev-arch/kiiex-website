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
        title: 'Almacenamiento Seguro',
        description: 'Todos los activos digitales están protegidos, puedes estar tranquilo, tu dinero esta seguro',
        icon: (color: string) => <SafeStorage width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Compra y vende',
        description: 'Más de 20 monedas fiat mediante transferencias bancarias y tarjetas débito o crédito',
        icon: (color: string) => <CompraVende width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Experiencia de Usuario',
        description: 'Creamos la mejor aplicacion de uso facil, con ella podrás comprar y vender todas las criptos en pocos segundos',
        icon: (color: string) => <UserXP width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Transacciones Eficaces',
        description: 'Operaciones ultrarápidas, confiables y seguras, gracias al desarrollo con tecnología de última generación',
        icon: (color: string) => <TransaccionEficaz width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Comunidad Global',
        description: 'Puedes hacer parte activa de nuestra inmensa comunidad por medio de las diferentes redes sociales, únete ahora!',
        icon: (color: string) => <ComunidadGlobal width='50px' heigth='50px' color={color} />
    },
    {
        title: 'Soporte Técnico',
        description: 'Nuestro equipo de soporte está aquí 24/7/365 a través de los canales de soporte de nuestras aplicaciones.',
        icon: (color: string) => <Soporte width='60px' heigth='60px' color={color} />
    }

]

const SectionThree = () => {
    return (
        <>
            <Row className='row-center main-row-three' >
                <Col span={16} style={{ paddingTop: '100px', marginBottom: '60px' }}>
                    <h1>
                        <b className='title-three-one'>¡El exchange más facil de usar!</b>
                    </h1>
                    <p className='p-three-one' >
                        Hemos desarrollado un exchange pensando en los usuarios, somos la plataforma ideal para comenzar a comprar y vender criptomonedas
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