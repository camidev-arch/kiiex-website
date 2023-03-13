import { Button, Col, Input, Row } from 'antd'
import React from 'react'


const SectionFourCompany = () => {
  return (
    <div className='container-fluid sectionFourCompany' >
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <h1 className='titulo-unete' style={{ marginTop: 0, textAlign: 'center', color: 'white', fontWeight:'bolder' }}>Únete al sistema financiero que te abre las posibilidades en todo el mundo.</h1>
          <p className='text-center p-one' style={{ fontSize: '28px', color: 'white', fontWeight:'lighter' }}>
            +8.000 comercios ya reciben crypto como método de pago. 
          </p>
          <Row style={{ width: '100%', display:'flex', justifyContent:'center'}}>
            <Col xs={24} md={8} lg={8} >
            <a href='https://ui.kiire.apstage.net/signup'><Button className='ant-btn ant-btn-default boton-one3' >Comenzar Ahora</Button></a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default SectionFourCompany