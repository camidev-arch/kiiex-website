import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer, Image, PageHeader, Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react'
import LOGO from '../assets/icons/LOGO_KIIEX_COMPANY.png'
import './index.css'
import { IScrollContext, scrollContext } from '../ScrollProvider';

const HeaderCompany = () => {
    const [nav, setnav] = useState(false)
    const { scrollTop } = useContext(scrollContext) as IScrollContext
    const [textBtn, setTextBtn] = useState('Registro')


    return (
        <PageHeader
            className="site-page-header"
            style={{ backgroundColor: scrollTop == 0 ? 'transparent' : 'rgba(27,60,141,1)', opacity:'0.9', position: 'fixed', top: 0, right: 0, left: 0, zIndex: '100000' }}
            extra={[]}

        >
            <Content style={{ display: 'flex', paddingTop: 0 }}>
                <Drawer zIndex={100000} open={nav} onClose={() => { setnav(!nav) }} >
                    <Content className='content-nav2'>
                        <Link to={'/'}><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Inicio</Typography></Link>
                        <Link to={'/cuentaEmpresa'}><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Empresa</Typography></Link>
                        <Link to={'/personas'}><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Personas</Typography></Link>
                        <a><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Aprende</Typography></a>
                        <a><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Soporte</Typography></a>
                        <a><Typography className='menuItem' style={{ fontWeight: 'bold', padding: '10px', fontSize: '17px' }}>Iniciar Sesion</Typography></a>
                        <Button onMouseOver={()=>setTextBtn('¡Muy Pronto!')} onMouseLeave={()=>{setTextBtn('Registro')}} className='boton-register2' style={{ fontSize: '17px', height: '40px', marginTop: '3px' }}>{textBtn}</Button>
                    </Content>
                </Drawer>
                <Content>
                    <Content style={{ display: 'flex', justifyContent: 'start' }}>
                        <Image preview={false} style={{ width: '200px', marginTop:'7px' }} src={LOGO}>
                        </Image>
                    </Content>
                </Content>
                <Content className='nav-bar' style={{paddingRight:'5.6%', display:'none'}}>
                    <Content className='content-nav'>
                        <div className="itemsMenu">
                            <Link to={'/'}><Typography className='menuItem2' style={{ fontWeight: 'bold', fontSize: '17px' }}>Inicio</Typography></Link>
                            <Link to={'/cuentaEmpresa'}><Typography className='menuItem2Active' style={{ fontWeight: 'bold', fontSize: '17px' }}>Empresa</Typography></Link>
                            <Link to={'/personas'}><Typography className='menuItem2' style={{ fontWeight: 'bold', fontSize: '17px' }}>Personas</Typography></Link>
                            <Link to='' ><Typography className='menuItem2' style={{ fontWeight: 'bold', fontSize: '17px' }}>Aprende</Typography></Link>
                            <a  href='https://foro.lanzamientokii.com/' target={'_blank'} ><Typography className='menuItem2' style={{ fontWeight: 'bold', fontSize: '17px' }}>Soporte</Typography></a>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Link to={'/Soon'}><Typography className='menuItem2' style={{ fontWeight: 'bold', fontSize: '17px', paddingTop: '10px' }}>Iniciar Sesion</Typography></Link>
                            <Button onMouseOver={()=>setTextBtn('¡Próximamente!')} onMouseLeave={()=>{setTextBtn('Registro')}} className='boton-register2' style={{ fontSize: '15px', height: '40px', marginTop: '3px' }}>{textBtn}</Button>
                        </div></Content>

                </Content>
                <Button className='btn-menu' style={{ color: 'white', backgroundColor: 'transparent' }} onClick={() => { setnav(!nav) }}><MenuOutlined /></Button>
            </Content>
        </PageHeader>
    )
}

export default HeaderCompany