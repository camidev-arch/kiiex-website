import { Button } from 'antd'
import React from 'react'
import FooterSocial from '../assets/icons/FooterSocial'

import './index.css'

const SectionSix = () => {
  return (
    <div className='container main1' style={{ backgroundColor: 'white', minHeight: '600px', display: 'flex', justifyContent: 'center', width: '100%',paddingRight: '12%', paddingLeft: '12%', paddingTop:'250px', paddingBottom:'250px' }}>
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <h1 className='title-blue text-center'>KIIEX es para todos, ¡no nos limitamos!</h1>
          <h1 style={{ marginTop: 0, textAlign: 'center', fontWeight:'bold', color:'#00103B' }}>Bien sea que estás empezando, o que eres todo un profesional.</h1>
          <p className='text-center p-one' style={{fontSize:'20px'}}>
          Una plataforma que piensa en tu seguridad, tu privacidad, tus recursos y tu experiencia,
          todo en un solo lugar. 
          </p>
          <p className='text-center p-one' style={{fontSize:'20px'}}>
          Bien sea que quieres comprar, vender o intercambiar criptomonedas, o desees hacer
          trading, con KIIEX las posibilidades no acaban.
          </p>
          <p className='text-center p-one' style={{fontSize:'20px'}}>
          Haz trading desde cualquier lugar del mundo y con total confianza, recuerda que con
          nuestro equipo de soporte siempre hablarás con una persona, no con una máquina.
          </p>
          <FooterSocial />
          <a href='https://ui.kiire.apstage.net/signup'><Button className='boton-two-comenzar' style={{backgroundColor:'white', height:'50px',  width:'230px',  fontSize:'20px',margin:'10px'}}>
            ¡Regístrate ahora! 
          </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionSix