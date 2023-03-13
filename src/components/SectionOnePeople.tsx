import { Button, Card, Col, Image, Input, Row } from 'antd'
import React from 'react'
import RedesSociales from './RedesSociales'
import fondo from '../assets/backgrounds/peopleOne.png'
import { ArrowRightOutlined } from '@ant-design/icons'
import Title from 'antd/lib/typography/Title'
import ArrowRigth from '../assets/icons/ArrowRigth'

const SectionOnePeople = () => {
    return (<>
        <Row id='top' className='main-row-one-people' >
            <Col className='column-one-one' xs={24} md={12} lg={14} span={14} >
                <Card className='card-style' bodyStyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%', padding: '0px', height: '100%', }} style={{ height: '100%' }}>
                    <h1 className='main-title3' >
                        El exchange más confiable para comprar y vender Criptomonedas
                    </h1>
                    <p className='main-p2' style={{ fontSize: '35px', }}>
                        Una plataforma que nació siendo segura e intuitiva <br></br>para ti, en todo lugar y momento.
                    </p>
                    <Row >
                        <Col xs={24} md={8} lg={9} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
                            <a href='https://ui.kiire.apstage.net/signup'><Button className='btn-registrar3' style={{ height: '50px', width: '300px' }} >Crea tu cuenta ahora <ArrowRightOutlined></ArrowRightOutlined></Button></a>
                            <span style={{ fontSize: '13px',minWidth:'300px' }}>¿Ya tienes una cuenta? <a style={{ color: '#0f4dcc' }} href='https://ui.kiire.apstage.net/login'>Iniciar sesión</a></span>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col className='container-img-company' xs={24} md={12} lg={10} xl={10} span={10}>
                <Image className='img-one-people' src={fondo} preview={false}>
                </Image>
            </Col>
            <RedesSociales colorBackground='#E6E6E6' colorIcon='#B3B3B3' hoverColor='#1B3C8D' />
        </Row>
        <Row className='row-people-blue' style={{ paddingLeft: '12%', paddingRight: '12%', backgroundColor: 'white', paddingBottom: '100px', minHeight: '300px', paddingTop:'100px' }}>
            <Col className='sectionTwoBlue' md={24} xs={24} lg={24} span={24} style={{ margin: '0px', padding: '0px', width: '100%', display: 'flex', alignItems: 'center', justifyContent:'space-around', gap:'50px' }} >
                <h1 className='card-titulo' style={{ color: 'white', }}>Sé parte de una economía digital pensada en soluciones reales para personas reales.<br></br></h1>
                <div>
                    <Title className='title-col-two-two' >
                        ¡Comienza ahora mismo! 
                    </Title>
                    <a href='https://ui.kiire.apstage.net/signup'><Button className='boton-comienza-ahora2' style={{ backgroundColor: 'white', height: '50px', width: '230px', fontSize: '20px', margin: '10px' }}>Regístrate aquí <ArrowRigth color='white' width='20px' heigth='20px' /></Button></a>
                </div>
            </Col>

        </Row>
    </>

    )
}

export default SectionOnePeople