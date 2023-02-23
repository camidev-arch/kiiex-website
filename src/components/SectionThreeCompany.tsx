import { Button, Col, Row } from 'antd'
import React from 'react'
import ArrowRigth from '../assets/icons/ArrowRigth'
import ClientService24 from '../assets/icons/ClientService24'
import ClientVerify from '../assets/icons/ClientVerify'
import CustomPedido from '../assets/icons/CustomPedido'
import LowComision from '../assets/icons/LowComision'
import CardBeneficios, { IPropsCards } from './CardBeneficios'

const SectionThreeCompany = () => {

    const CARDS: IPropsCards[] = [{
        title: 'Bajas comisiones de negociación',
        description: 'Comisión de menos del 1% para todas las ordenes P2P. Tarifa cero hasta 2023-07-01.',
        icon: <LowComision color='#1B3C8D' width='100px' heigth='100px' />
    },
    {
        title: 'Personalizar cada pedido',
        description: 'Personaliza el precio y la cantidad de tu pedido. Gana con la diferencia de precios',
        icon: <CustomPedido color='#1B3C8D' width='100px' heigth='100px' />
    },
    {
        title: 'Servicio de atención al cliente 24/7',
        description: 'Atención al cliente uno a uno, todas tus preguntas serán atendidas puntualmente',
        icon: <ClientService24 color='#1B3C8D' width='100px' heigth='100px' />
    },
    {
        title: 'Protección del comerciante verificado',
        description: 'Disfruta de la protección exclusiva de la plataforma. Más garantías en transacciones.',
        icon: <ClientVerify color='#1B3C8D' width='100px' heigth='100px' />
    }

    ]
    return (
        <Row className='row-center main-row-three' style={{ paddingRight: '12%', paddingLeft: '12%', paddingBottom:'150px', paddingTop:'150px' }} >
            <Col className='col-one-beneficios' span={12} xl={12} lg={12} md={24} xs={24} >

                <h1 className='title-section-three' >
                    <b>Estos son los beneficios de ser un comerciante verificado por KiiEx</b>
                </h1>
                <p className='p-section-three' >
                    Estar verificado es generar confianza a los usuarios para identificar a las empresas con las que puedes comerciar
                </p>
                <h2 className='h2-register-section-three' >Registrate y recibe un bono de $100</h2>
                <div className='container-boton-beneficios' >
                    <Button className='btn-registrar-section-three' >
                        Crea tu cuenta <ArrowRigth color='white' width='20px' heigth='20px' />
                    </Button>
                </div>
            </Col>
            <Col className='container-card-beneficios' span={12} style={{ marginBottom: '60px', textAlign: 'left', paddingLeft: '50px' }}>
                {CARDS.map(({ description, icon, title }) => {
                    return <CardBeneficios title={title} description={description} icon={icon} />
                })}
            </Col>
        </Row>
    )
}

export default SectionThreeCompany