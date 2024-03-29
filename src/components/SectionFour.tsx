import { Col, Row,Image } from 'antd';
import TABLA from '../assets/backgrounds/tabla.png'
import React from 'react'
import { CopyrightStyles } from "react-ts-tradingview-widgets";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

const SectionFour = () => {
  const styles: CopyrightStyles = {
    parent: {
      fontSize: "0px",
      color: "transparent",
    },
    link: {
      textDecoration: "line-trough",
    },
    span: {
      color: "transparent",
    },
  };
  return (
    <div className='container-fluid main' style={{ backgroundColor: 'white',  display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '12%', paddingLeft: '12%', paddingBottom: '100px', paddingTop: '100px' }}>
      <Row>
        <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop:'100px' }} >
          <Col span={24}  className='text-center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '0px' }}>
            <h1 >
              <b className='title-section-four'>Conoce las tendencias del mercado</b>
            </h1>
            <p className='p-section-four' style={{ fontSize: '20px' }}>
              No pierdas la próxima oportunidad para ganar comprando y vendiendo criptomonedas en nuestro exchange.
            </p>
          </Col>
          <Col span={24}  style={{ width: '100%', alignSelf: 'center', justifyContent:'center', height: '600px', marginTop: '-150px' }}>
            <Image preview={false} src={TABLA} />

          </Col>
        </Col>
      </Row>

    </div>
  )
}

export default SectionFour