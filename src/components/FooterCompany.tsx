import { Button, Image, Typography } from 'antd'
import Title from 'antd/lib/typography/Title'
import logo from '../assets/icons/logokiexfooter.svg'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Grid } from '@mui/material'

const FooterCompany = () => {
    const location = useLocation()

    return (
        <div className='container-fluid footerBG' style={{  minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: '50px', }}>
            {/*   <div className='row' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <div  className='col-12 col-md-3 col-lg-3 col-xl-3 footerDiv'>
                    <ul  style={{ listStyle: 'none', marginTop: '-50px' }}>
                        <li>
                            <Image style={{ width: '200px', marginTop: '10px', marginBottom: '20px' }} src={logo} preview={false} >

                            </Image>
                        </li>
                        <li>
                            <p className='p-one'>
                                Somos el cripto exchange más seguro, rápido y facil de operar, comienza hoy mismo
                            </p>

                        </li>
                        <li style={{display:'flex',justifyContent:'end'}}>
                            <Button className='btnRegistrarSix2' style={{ margin: '-10px' }}>
                                Registrarse
                            </Button>
                        </li>

                    </ul>
                </div>
                <div  className='col-12 col-md-3 col-lg-3 col-xl-3 footerDiv'>
                    <ul className='footerMain' style={{ listStyle: 'none' }}>
                        <li className='space-list'>
                            <Title level={2} style={{ paddingTop: '10px' }}>
                                Acerca de KiiEx
                            </Title>
                        </li>
                        <li className='list-item'>
                            <NavLink to={location.pathname=='/cuentaEmpresa'?'/':'/cuentaEmpresa'}>
                            <Typography className='p-one menuItem'>
                               {location.pathname=='/cuentaEmpresa'?'Inicio':'Empresa'}
                            </Typography>
                            </NavLink>
                           
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Kii.global
                            </Typography>
                        </li >
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Terminos de uso
                            </Typography>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Politica de Privacidad
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div  className='col-12 col-md-3 col-lg-3 col-xl-3 footerDiv'>
                    <ul style={{ listStyle: 'none' }}>
                        <li className='space-list' >
                            <Title level={2} style={{ paddingTop: '10px' }}>
                                Servicios
                            </Title>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Foro de Soporte
                            </Typography>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Desarrolladores
                            </Typography>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Ayuda Tecnica
                            </Typography>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Enviar una solicitud
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className='col-12 col-md-3 col-lg-3 col-xl-3 footerDiv'>
                    <ul style={{ listStyle: 'none' }}>
                        <li className='space-list'>
                            <Title level={2} style={{ paddingTop: '10px' }}>
                                Learn
                            </Title>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Tutoriales
                            </Typography>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Criptopedia
                            </Typography>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Comunidad
                            </Typography>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Blog de noticias
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div> */}
            <Grid className='footerUniversal' container spacing={1} style={{}}>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'left', width: '100%' }}>
                    <Image style={{ width: '200px', marginTop: '10px', marginBottom: '20px', marginLeft:'35%' }} src={logo} preview={false} >

                    </Image>
                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Title className='title-footer' level={2} style={{ paddingTop: '10px' }}>
                        Sobre KIIEX 
                    </Title>
                </Grid>
                <Grid className='title-footer' item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Title level={2} style={{ paddingTop: '10px' }}>
                        Servicios
                    </Title>
                </Grid>
                <Grid className='title-footer' item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Title level={2} style={{ paddingTop: '10px' }}>
                        Learn
                    </Title>
                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '200px', }}>
                    <p style={{ fontSize: '16px', maxWidth: '270px', marginLeft: '35px' }}>
                        Somos el Exchange más seguro, rápido y fácil de usar. Cambiamos el mundo una operación a la vez.
                    </p>
                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingRight: '90px' }}>
                    <ul className='footerMain' style={{ listStyle: 'none', padding:0 }}>

                        <li className='list-item'>
                            <NavLink to={location.pathname == '/cuentaEmpresa' ? '/' :  location.pathname == '/personas' ? '/':  '/cuentaEmpresa'}>
                                <Typography className='p-one menuItem'>
                                    {location.pathname == '/cuentaEmpresa' ? 'Inicio' : location.pathname == '/personas' ? 'Inicio':  'Empresa'}
                                </Typography>
                            </NavLink>

                        </li>
                        <li className='list-item'>
                        <NavLink to={location.pathname == '/personas' ? '/cuentaEmpresa' : '/personas'}>
                                <Typography className='p-one menuItem'>
                                    {location.pathname == '/personas' ? 'Empresa' : 'Personas'}
                                </Typography>
                            </NavLink>
                        </li >
                        <li className='list-item'>
                        <NavLink to={location.pathname == '/comisiones' ? '/comisiones' : '/comisiones'}>
                            <Typography className='p-one menuItem'>
                                Comisiones
                            </Typography>
                        </NavLink>
                        </li>
                        
                    </ul>
                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingRight: '20px' }}>
                    <ul className='footerMain' style={{ listStyle: 'none' }}>
                        <li className='list-item'>
                        <a href='https://foro.lanzamientokii.com/'>
                            <Typography className='p-one menuItem'>
                                Foro de Soporte
                            </Typography>
                        </a>   
                        </li>
                        
                        <li className='list-item'>
                        <NavLink to={location.pathname == '/terminosycondiciones' ? '/terminosycondiciones' : '/terminosycondiciones'}>
                            <Typography className='p-one menuItem'>
                            Terminos y Condiciones 
                            </Typography>
                        </NavLink>
                        </li>
                        <li className='list-item'>
                        <NavLink to={location.pathname == '/politicadeprivacidad' ? '/politicadeprivacidad' : '/politicadeprivacidad'}>
                            <Typography className='p-one menuItem'>
                                Politica de privacidad
                            </Typography>
                        </NavLink>
                        </li>
                    
                    </ul>

                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <ul style={{ listStyle: 'none' }}>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Tutoriales
                            </Typography>
                        </li>
                        <li className='list-item'>
                        <a href='https://www.instagram.com/kiiexchange/'>
                            <Typography className='p-one menuItem'>
                                Comunidad
                            </Typography>
                        </a>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Blog de noticias
                            </Typography>
                        </li>
                    </ul>

                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '200px', }}>

                    <div  style={{ fontSize: '17px', minWidth: '330px', display: 'flex', justifyContent: 'flex-end' }}>
                    <a href='https://ui.kiire.apstage.net/signup'>
                        <Button className='btnRegistrarSix2' style={{}}>
                            Registrarse
                        </Button>
                    </a>
                    </div>
                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '200px', }}>

                   
                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '200px', }}>

                  
                </Grid>
                <Grid item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '200px', }}>

               
                </Grid>
            </Grid>
            <Grid  className='footerUniversal2' container spacing={1} style={{}}>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                    <Image style={{ width: '200px', marginTop: '10px', marginBottom: '20px' }} src={logo} preview={false} >

                    </Image>
                    <p style={{ fontSize: '14px', maxWidth: '250px', textAlign:'center' }}>
                    Somos el Exchange más seguro, rápido y fácil de usar. Cambiamos el mundo una operación a la vez.
                    </p>
                    <div className='container-btn-footer' style={{  }}>
                    <a href='https://ui.kiire.apstage.net/signup'>
                        <Button className='btnRegistrarSix2' style={{}}>
                            Registrarse
                        </Button>
                    </a>
                    </div>


                </Grid>
                <Grid className='text-center' item lg={12} style={{ display: 'flex', justifyContent: 'start', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                    <Title className='title-footer' level={2} style={{ paddingTop: '10px' }}>
                        Sobre KiiEx
                    </Title>
                    <ul className='footerMain' style={{ listStyle: 'none', padding:0 }}>

                    <li className='list-item'>
                            <NavLink to={location.pathname == '/cuentaEmpresa' ? '/' :  location.pathname == '/personas' ? '/':  '/cuentaEmpresa'}>
                                <Typography className='p-one menuItem'>
                                    {location.pathname == '/cuentaEmpresa' ? 'Inicio' : location.pathname == '/personas' ? 'Inicio':  'Empresa'}
                                </Typography>
                            </NavLink>

                        </li>
                        <li className='list-item'>
                        <NavLink to={location.pathname == '/personas' ? '/cuentaEmpresa' : '/personas'}>
                                <Typography className='p-one menuItem'>
                                    {location.pathname == '/personas' ? 'Empresa' : 'Personas'}
                                </Typography>
                            </NavLink>
                        </li >
                        <li className='list-item'>
                        <NavLink to={location.pathname == '/comisiones' ? '/comisiones' : '/comisiones'}>
                            <Typography className='p-one menuItem'>
                                Comisiones
                            </Typography>
                        </NavLink>
                        </li>
                    </ul>
                </Grid>
                <Grid className='text-center' item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                    <Title className='title-footer' level={2} style={{ paddingTop: '10px' }}>
                        Servicios
                    </Title>
                    <ul className='footerMain' style={{ listStyle: 'none',padding:0 }}>
                    <li className='list-item'>
                    <a href='https://foro.lanzamientokii.com/'>
                            <Typography className='p-one menuItem'>
                                Foro de Soporte
                            </Typography>
                    </a>
                        </li>
                        <li className='list-item'>
                        <NavLink to={location.pathname == '/terminosycondiciones' ? '/terminosycondiciones' : '/terminosycondiciones'}>
                            <Typography className='p-one menuItem'>
                                Terminos y condiciones
                            </Typography>
                        </NavLink>
                        </li>
                        <li className='list-item'>
                        <NavLink to={location.pathname == '/politicadeprivacidad' ? '/politicadeprivacidad' : '/politicadeprivacidad'}>
                        <Typography className='p-one menuItem'>
                                Politica de Privacidad
                            </Typography>
                        </NavLink>
                        </li>
                    </ul>
                </Grid>
                <Grid className='text-center' item lg={3} style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                    <Title className='title-footer' level={2} style={{ paddingTop: '10px' }}>
                        Learn
                    </Title>
                    <ul style={{ listStyle: 'none', padding:0 }}>
                    <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Tutoriales
                            </Typography>
                        </li>
                        <li className='list-item'>
                        <a href='https://www.instagram.com/kiiexchange/'>
                            <Typography className='p-one menuItem'>
                                Comunidad
                            </Typography>
                        </a>
                        </li>
                        <li className='list-item'>
                            <Typography className='p-one menuItem'>
                                Blog de noticias
                            </Typography>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    )
}

export default FooterCompany