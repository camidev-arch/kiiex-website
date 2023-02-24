import imgsoon from '../assets/Kii Exchange - Proximamente.png'
import HeaderKx from '../components/HeaderKx';
import HeaderCompany from '../components/HeaderCompany';
import FooterCompany from '../components/FooterCompany';

const tyccontent = () => {
    return (
      <div style={{ color: 'black', marginTop: '0', marginBottom:'0px' }}>
        <HeaderCompany />
        <img src={imgsoon} width="1920px" height="1080px" alt="Descripción de la imagen" />
        <FooterCompany />
      </div>
    )
  }

export default tyccontent;