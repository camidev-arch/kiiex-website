import logo from '../assets/icons/LOGO_KIIEX.svg'
import fee4 from '../assets/KIIEx Tabla Fijo.png'
import fee3 from '../assets/KIIEx Tabla USDT.png'
import fee2 from '../assets/KIIEx Tabla Stablecoin.png'
import fee1 from '../assets/KIIEx Tabla Spot.png'
import FooterCompany from '../components/FooterCompany';
import HeaderKx from '../components/HeaderKx';

const tyccontent = () => {
    return (
      <div style={{ color: 'black', marginTop: '12%', marginBottom:'0px' }}>
        <HeaderKx />
        
        <h1 style={{textAlign:'center', marginBottom:'2%'}} >Comisiones </h1>
        <p style={{textAlign:'center', marginBottom:'7%', marginRight:'14%', marginLeft:'14%', fontSize:'20px'}} >En KIIEX las soluciones están hechas a la medida, por eso creamos varios tipos de
        comisiones que disminuyen cada vez que tu volumen aumenta.
        Ten presente que nos basamos en una estructura Maker-Taker, a la cual se suma que
        nuestras tarifas piensan siempre en el trader, su tiempo, sus recursos y sus beneficios.</p>
        <h3 style={{textAlign:'center', marginBottom:'1%'}} >Conoce aquí los detalles de las comisiones</h3>
        <div className='img-comision-container'>
        <img style={{margin:'auto', display: 'block', marginTop:'2%'}} src={fee1} width="" height="400px" alt="Descripción de la imagen" />
        </div>
        <div className='img-comision-container'>
        <img style={{margin:'auto', display: 'block', marginTop:'2%'}} src={fee2} width="" height="400px" alt="Descripción de la imagen" />
        </div>
        <div className='img-comision-container'>
        <img style={{margin:'auto', display: 'block', marginTop:'2%'}} src={fee3} width="" height="400px" alt="Descripción de la imagen" />
        </div>
        <p style={{textAlign:'center', marginTop:'2%', marginRight:'14%', marginLeft:'14%', fontSize:'14px'}} >*Los depósitos que realices son gratuitos y no te cobran comisión.</p>
        <p style={{textAlign:'center', marginBottom:'0%', marginRight:'14%', marginLeft:'14%', fontSize:'14px'}} >*Los retiros que realices tienen una comisión acorde al tipo de moneda y la red que
utilices</p>
        <h4 style={{textAlign:'center', marginBottom:'3%', marginTop:'7%'}} >Conoce aquí los detalles de comisión por retiro</h4>
    
        <div className='img-comision-container'>
        <img style={{margin:'auto', display: 'block', marginBottom:'10%'}} src={fee4} width="" height="1080px" alt="Descripción de la imagen" />
        </div>
        
        <FooterCompany />
      </div>
    )
  }

export default tyccontent;