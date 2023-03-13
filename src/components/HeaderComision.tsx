import { MenuOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
import { Button, Drawer, Image, PageHeader, Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useState } from 'react'
import LOGO from '../assets/icons/LOGO_KIIEX.svg'
import './index.css'

const HeaderComision = () => {
    const [nav, setnav] = useState(false)
    const [textBtn, setTextBtn] = useState('Registro')
  return (
    <PageHeader
            className="site-page-header"
            style={{ backgroundColor: 'white', position: 'fixed', top: 0, right: 0, left: 0, zIndex: '100000' }}
            extra={[]}

        >
            <Content style={{ display: 'flex', paddingTop: 0 }}>
                <Drawer zIndex={100000} open={nav} onClose={() => { setnav(!nav) }} >
                    <Content className='content-nav2'>
                        <Link to={'/#top'}><Typography className='menuItem3' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Inicio</Typography></Link>
                        <Link to={'/cuentaEmpresa/#top'}><Typography className='menuItem3' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Empresa</Typography></Link>
                        <Link to={'/personas#top'}><Typography className='menuItem3' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Personas</Typography></Link>
                        <Link to={'/comisiones'}><Typography className='menuItem3' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Comisiones</Typography></Link>
                        <a href='https://foro.lanzamientokii.com/'><Typography className='menuItem3' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Soporte</Typography></a>
                        <a href='https://ui.kiire.apstage.net/signup'><Typography className='menuItem3' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Iniciar Sesion</Typography></a>
                        <a href='https://ui.kiire.apstage.net/login'><Button  onMouseLeave={()=>{setTextBtn('Registro')}} className='boton-register2' style={{ fontSize: '17px', height: '40px', marginTop: '3px' }}>{textBtn}</Button></a>
                    </Content>
                </Drawer>
                <Content>
                    <Content style={{ display: 'flex', justifyContent: 'start' }}>
                        <Image preview={false} style={{ width: '200px', marginTop:'7px' }} src={LOGO}>
                        </Image>
                    </Content>
                </Content>
                <Content className='nav-bar' style={{ display: nav ? 'none' : 'none' }}>
                    <Content className='content-nav'>
                        <div className="itemsMenu">
                            <Link  to={'/'}><Typography className='menuItem3'  style={{ fontWeight: 'bold',  fontSize: '17px' }}>Inicio</Typography></Link>
                            <Link  to={'/cuentaEmpresa'}><Typography className='menuItem3' style={{ fontWeight: 'bold',  fontSize: '17px' }}>Empresa</Typography></Link>
                            <Link  to={'/personas'}><Typography className='menuItem3'  style={{ fontWeight: 'bold',  fontSize: '17px' }}>Personas</Typography></Link>
                            <Link to={'/comisiones'} ><Typography className='menuItem3Active'  style={{ fontWeight: 'bold',  fontSize: '17px' }}>Comisiones</Typography></Link>
                            <a  href='https://foro.lanzamientokii.com/' target={'_blank'} ><Typography className='menuItem3'  style={{ fontWeight: 'bold',  fontSize: '17px' }}>Soporte</Typography></a>
                        </div>
                        <div style={{ display: 'flex', paddingTop:'5px' }}>
                            <a href='https://ui.kiire.apstage.net/login'><Typography className='menuItem3' style={{ fontWeight: 'bold',  fontSize: '17px', paddingTop:'10px' }}>Iniciar Sesion</Typography></a>
                            <a href='https://ui.kiire.apstage.net/signup'><Button onMouseLeave={()=>{setTextBtn('Registro')}} className='boton-one-header' style={{ fontSize: '14px', height: '40px', marginTop: '3px' }}>{textBtn}</Button></a>
                        </div>

                    </Content>

                </Content>
                <Button className='btn-menu' style={{ color: '·0f4dcc', backgroundColor: 'transparent' }} onClick={() => { setnav(!nav) }}><MenuOutlined /></Button>
            </Content>
        </PageHeader>
  )
}

export default HeaderComision