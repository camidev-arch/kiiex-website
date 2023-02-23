import { Button, Image, Typography } from 'antd'
import Title from 'antd/lib/typography/Title'
import logo from '../assets/icons/kiiLogoFooter.png'
import React from 'react'

const FooterM = () => {
    return (
        <div className='container-fluid' style={{backgroundColor:'white', minHeight:'300px', display:'flex', justifyContent:'center', alignItems:'center', width:'90%'}}>
            <div className='row' style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
                <div  className='col-12 col-md-3 col-lg-3 col-xl-3'>
                    <ul style={{listStyle:'none'}}>
                        <li>
                            <Image style={{width:'100px'}} src={logo} preview={false} >

                            </Image>
                        </li>
                        <li>
                            <Typography  className='p-one'>
                                Somos el cripto exchange más seguro, rápido y facil de operar, comienza hoy mismo
                            </Typography>
                        </li>
                        <li>
                        <Button className='btnRegistrarSix2'>
               Registrarse
              </Button>
                        </li>
                        
                    </ul>
                </div>
                <div  className='col-12 col-md-3 col-lg-3 col-xl-3'>
                <ul style={{listStyle:'none'}}>
                        <li className='space-list'>
                            <Title level={2} style={{paddingTop:'10px'}}>
                                Acerca de KiiEx
                            </Title>
                        </li>
                        <li className='space-list'>
                            <Typography   className='p-one menuItem'>
                                Empresa
                            </Typography>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Kii.global
                            </Typography>
                        </li >
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Terminos de uso
                            </Typography>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Politica de Privacidad
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div  className='col-12 col-md-3 col-lg-3 col-xl-3'>
                <ul style={{listStyle:'none'}}>
                        <li className='space-list' >
                            <Title level={2} style={{paddingTop:'10px'}}>
                                Servicios
                            </Title>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Foro de Soporte
                            </Typography>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Desarrolladores
                            </Typography>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Ayuda Tecnica
                            </Typography>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Terminos y Condiciones
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div  className='col-12 col-md-3 col-lg-3 col-xl-3'>
                <ul style={{listStyle:'none'}}>
                        <li className='space-list'>
                            <Title level={2} style={{paddingTop:'10px'}}>
                                Learn
                            </Title>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                            Tutoriales
                                                        </Typography>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Criptopedia
                            </Typography>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Comunidad
                            </Typography>
                        </li>
                        <li className='space-list'>
                            <Typography  className='p-one menuItem'>
                                Blog de noticias
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterM