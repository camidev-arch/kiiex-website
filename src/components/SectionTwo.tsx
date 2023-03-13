import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import ArrowRigth from '../assets/icons/ArrowRigth'
import './index.css'


const SectionTwo = () => {
  return (
    <Row className='main-row-two' >
    <Col xs={24}md={16} lg={16} span={16} className='col-one-two'>
        <Title className='title-col-one-two'>
          Escalabilidad, Conectividad, Simplicidad. Todo con KIIEX.
        </Title>
    </Col>
    <Col xs={24} md={8} lg={8} span={8} className='col-two-two'>
    <Title className='title-col-two-two' >
            ¡Comienza hoy mismo!
        </Title>
        <a href='https://ui.kiire.apstage.net/signup'><Button className='boton-comienza-ahora2' style={{ height:'50px',  width:'230px',  fontSize:'20px',margin:'10px'}}>Regístrate aquí <ArrowRigth color='white' width='20px' heigth='20px' /></Button></a>
    </Col>
</Row>
  )
}

export default SectionTwo