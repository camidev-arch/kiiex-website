import { Button } from 'antd'
import React from 'react'
import FooterSocial from '../assets/icons/FooterSocial'

import './index.css'

const SectionSix = () => {
  return (
    <div className='container main1' style={{ backgroundColor: 'white', minHeight: '600px', display: 'flex', justifyContent: 'center', width: '100%',paddingRight: '12%', paddingLeft: '12%', paddingTop:'250px', paddingBottom:'250px' }}>
      <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          <h1 className='title-blue text-center'>¡Cripto exchange para todos!</h1>
          <h1 style={{ marginTop: 0, textAlign: 'center', fontWeight:'bold', color:'#00103B' }}>Una comunidad con alcance mundial</h1>
          <p className='text-center p-one' style={{fontSize:'20px'}}>
            Kii Exchange opera a nivel global, ahora mismo estamos creando nuestra comunidad cripto a nivel mundial, si quieres rodearte de personas con tu misma pasión por las criptomonedas, solo debes crear una cuenta y unirte a todas nuestras redes sociales
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