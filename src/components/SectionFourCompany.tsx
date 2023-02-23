import { Button, Col, Input, Row } from 'antd'
import React from 'react'


const SectionFourCompany = () => {
  return (
    <div className='container-fluid sectionFourCompany' >
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <h1 style={{ marginTop: 0, textAlign: 'center', color: 'white', fontWeight:'bolder' }}>Únete al primer sistema financiero abierto del mundo</h1>
          <p className='text-center p-one' style={{ fontSize: '28px', color: 'white', fontWeight:'lighter' }}>
            +8000 comercios que ya aceptan criptomonedas como método de pago
          </p>
          <Row style={{ width: '100%', display:'flex', justifyContent:'center'}}>
            <Col xs={24} md={14} lg={14}>
              <input className='input-one1' placeholder={'Email'}></input>
            </Col>
            <Col xs={24} md={8} lg={8} >
              <Button className='boton-one1' >Comenzar Ahora</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default SectionFourCompany