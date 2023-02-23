import { Button, Col, Row } from 'antd'
import React from 'react'
import ArrowRigth from '../assets/icons/ArrowRigth'

const SectionFivePeople = () => {
  return (
    <div className='container-fluid sectionFivePeople' >
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <h1 style={{ marginTop: 0, textAlign: 'center', color: 'white', fontWeight:'bold' }}>Aprovecha al máximo todas tus criptomonedas</h1>
          <p className='text-center p-one main-p2' style={{ fontSize: '20px', color: 'white', fontWeight:'lighter' }}>
            Mejora tu experiencia en la criptoeconomía a través de los beneficios exclusivos de nuestro exchange
          </p>
          <Row style={{ width: '100%' }}>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} xs={24} md={24} lg={24} >
              <Button className='boton-one3' style={{maxWidth:'300px'}} >Inscríbete para comenzar <ArrowRigth color='white' width='20px' heigth='20px' /></Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default SectionFivePeople