import { useContext } from 'react'
import { Routes, Route } from "react-router-dom";
import { Col, Layout, Row, } from 'antd';
const { Content } = Layout;
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import Home from './views/Home';
import CompanyAccount from './views/CompanyAccount';
import { IScrollContext, scrollContext } from './ScrollProvider';
import { useLocation } from 'react-router-dom';
import People from './views/People';
import Tyc from './views/Tyc';
import Soon from './views/Soon'
import Comisiones from './views/Comisiones'
import PolicyPrivacy from './views/PolicyPrivacy'
function App() {
  const { setScrollTop } = useContext(scrollContext) as IScrollContext
  const location = useLocation()


  const handleScroll = (event: any) => {
    if (location.pathname != '/') {
      setScrollTop(event.currentTarget.scrollTop);
    }

  };

  return (
    <Layout onScroll={handleScroll} className='layout' style={{ width: '100vw', height: '100vh', backgroundColor: 'white', overflowX: 'hidden' }}>

      <Content>
        <Row >
          <Col style={{ width: '100%', }} span={24}>
            <div className='container-fluid main'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuentaEmpresa" element={<CompanyAccount />} />
                <Route path="/personas" element={<People />} />
                <Route path="/terminosycondiciones" element={<Tyc />} />
                <Route path="/Soon" element={<Soon />} />
                <Route path="/politicadeprivacidad" element={<PolicyPrivacy />} />
                <Route path="/comisiones" element={<Comisiones/>} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Content>
      {/*      <Footer>Footer</Footer>  */}
    </Layout>
  )
}

export default App
