import logo from '../assets/icons/LOGO_KIIEX.svg'
import fee3 from '../assets/KIIEx Tabla USDT.png'
import fee2 from '../assets/KIIEx Tabla Stablecoin.png'
import fee1 from '../assets/KIIEx Tabla Spot.png'
import FooterCompany from '../components/FooterCompany';
import HeaderKx from '../components/HeaderKx';

const tyccontent = () => {
    return (
      <div style={{ color: 'black', marginTop: '12%', marginBottom:'0px' }}>
        <HeaderKx />
        
        <h1 style={{textAlign:'center', marginBottom:'7%'}} >Comisiones </h1>
        <h3 style={{textAlign:'center', marginBottom:'3%'}} >Comisiones Spot </h3>
        <div style={{overflowX: 'hidden'}}>
        <img style={{margin:'auto', display: 'block'}} src={fee1} width="" height="400px" alt="Descripción de la imagen" />
        </div>
        <h3 style={{textAlign:'center', marginBottom:'3%', marginTop:'7%'}} >Comisiones Stablecoin </h3>
        <div style={{overflowX: 'hidden'}}>
        <img style={{margin:'auto', display: 'block'}} src={fee2} width="" height="400px" alt="Descripción de la imagen" />
        </div>
        <h3 style={{textAlign:'center', marginBottom:'3%', marginTop:'7%'}} >Comisiones USDT </h3>
        <div style={{overflowX: 'hidden'}}>
        <img style={{margin:'auto', display: 'block', marginBottom:'10%'}} src={fee3} width="" height="400px" alt="Descripción de la imagen" />
        </div>
        
        <FooterCompany />
      </div>
    )
  }

export default tyccontent;