import { Button, Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import StepOne from '../assets/icons/StepOne'
import StepThree from '../assets/icons/StepThree'
import StepTwo from '../assets/icons/StepTwo'
import logo from '../assets/icons/banner-thumb.png'
import logo1 from '../assets/backgrounds/background2.png'
import ArrowRigth from '../assets/icons/ArrowRigth'


const SectionFive = () => {
  return (


    <Row className='section-five' >
      
        <Col xs={24} md={24} lg={24} xl={16} className='listFive' >


          <ol style={{ listStyle: 'none',  marginTop: '16%' }}>

            <li>
              <h1 style={{ color: 'white', fontSize: '40px', textAlign:'left', fontWeight:'bolder' }}>
                La forma más facil de comenzar a operar con criptomonedas
              </h1>
            </li>
            <li>
              <Title className='five-steps' style={{ color: 'white' }} level={3}>
                <StepOne width={'45px'} /> Crea una cuenta gratuita en Kii Exchange
              </Title>
            </li>
            <li>
              <Title className='five-steps' style={{ color: 'white'}} level={3}>
                <StepTwo width={'45px'} /> Configura un método de pago
              </Title>
            </li>
            <li>
              <Title className='five-steps' style={{ color: 'white'}} level={3}>
                <StepThree width={'45px'} /> Compra y vende criptomonedas
              </Title>
            </li>
            <li>
              <Button className='boton-comienza-ahora4' style={{ color: '#0F4DCC', width: '315px', height: '50px', fontWeight: 'bold', fontSize: '20px', padding: '5px', marginTop:'20px' }}>
                ¡Comienza ahora mismo! <ArrowRigth color='#00103B' width='20px' heigth='20px' />
              </Button>
            </li>

          </ol>




        </Col>
        <Col xs={24} md={24} lg={24} xl={8} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%' }}>
          <img className='img-five' src={logo} style={{ maxHeight: '800px', maxWidth: '900px', marginTop: '10%' }} />
        </Col>
      

    </Row>
  )
}

export default SectionFive