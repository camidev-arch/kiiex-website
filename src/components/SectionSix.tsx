import { Button } from 'antd'
import React from 'react'
import FooterSocial from '../assets/icons/FooterSocial'

import './index.css'

const SectionSix = () => {
  return (
    <div className='container main1' style={{ backgroundColor: 'white', minHeight: '600px', display: 'flex', justifyContent: 'center', width: '100%',paddingRight: '12%', paddingLeft: '12%', paddingTop:'250px', paddingBottom:'250px' }}>
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <h1 className='title-blue text-center'>KIIEX es para todos, ¡sin límites!</h1>
          <h1 style={{ marginTop: 0, textAlign: 'center', fontWeight:'bold', color:'#00103B' }}>Una comunidad con alcance mundial</h1>
          <p className='text-center p-one' style={{fontSize:'20px'}}>
          Nuestra comunidad, día a día crece al igual que la inclusión financiera que queremos generar en todo el
          mundo, y esto lo logramos una operación a la vez.
          </p>
          <FooterSocial />
          <Button className='boton-two-comenzar' style={{backgroundColor:'white', height:'50px',  width:'230px',  fontSize:'20px',margin:'10px'}}>
            ¡Regístrate ahora! 
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SectionSix