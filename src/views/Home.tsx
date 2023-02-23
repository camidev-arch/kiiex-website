import React from 'react'
import { CopyrightStyles, TickerTape } from 'react-ts-tradingview-widgets'
import FooterCompany from '../components/FooterCompany'
import FooterM from '../components/FooterM'
import HeaderContent from '../components/HeaderContent'
import SectionFive from '../components/SectionFive'
import SectionFour from '../components/SectionFour'
import SectionOne from '../components/SectionOne'
import SectionSix from '../components/SectionSix'
import SectionThree from '../components/SectionThree'
import SectionTwo from '../components/SectionTwo'
import { CRIPTOS_GROUP } from '../utils'

const Home = () => {

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
  return (<div >
   <HeaderContent />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFive />
    <SectionFour />
    <SectionSix />
    
    <TickerTape showSymbolLogo symbols={CRIPTOS_GROUP}  displayMode='compact' copyrightStyles={styles}></TickerTape>
  
    
    <FooterCompany />
  </div>
   
  )
}

export default Home