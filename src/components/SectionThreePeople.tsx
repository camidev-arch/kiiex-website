import { Card, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CaretDownOutlined } from '@ant-design/icons';
import ChartBar from './ChartBar';

export const setearMiles = (numero: string | number) => {
    if (Number.isNaN(numero)) return 0
    return new Intl.NumberFormat('de-DE').format(parseFloat(`${numero}`).toFixed(2) as any)
}

const SectionThreePeople = () => {

    const [form, setForm] = useState({
        montoMinimo: 0,
        plazoMeses:'1',
        cripto: '1',
        moneda: 'COP',
        apy: 12,
        resultado: null,

    })

    const [APY, setAPY] = useState("")
    const [resultado, setResultado] = useState<string | 0>(0)
    const [openSelects, setOpenSelects] = useState({
        selectMoneda:false,
        selectCripto:false,
        selectMeses:false  
    })



    const handleSelect = (key:string, value:boolean) =>{
        setOpenSelects({...openSelects,[key]:value})
    }
    useEffect(() => {
        if(form.apy !== null && form.montoMinimo) {
            setResultado(setearMiles(Number(form.montoMinimo) * Number(form.apy) / 100))   
        }
    }, [form.montoMinimo, form.apy])
  
     

    useEffect(() => {
        if (form.plazoMeses != null) {
            switch (form.plazoMeses) {
                case "1":
                    setAPY("12%")
                    handlerChange('apy', 12)
                    break;
                case "3":
                    setAPY("18%")
                    handlerChange('apy',18)
                    break;
                case"6":
                    setAPY("24%")
                    handlerChange('apy', 24)
                    break;
                case "12":
                    setAPY("30%")
                    handlerChange('apy',30)
                    break;
                case "24":
                    setAPY("36%")
                    handlerChange('apy',36)
                    break;

                default:
                    break;
            }
        }
    }, [form.plazoMeses])


    const handlerChange = (name: string, value: any) => {
        setForm({ ...form, [name]: value })
    }
    return (
        <div className='container-fluid main1' style={{ backgroundColor: 'rgb(242 242 242 / 7%) ', minHeight: '600px', display: 'flex', justifyContent: 'center', width: '100%', paddingRight: '12%', paddingLeft: '12%', paddingTop: '0px', paddingBottom: '120px' }}>
            <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <Paper className='papershadow' style={{ padding: '10px',minHeight: '300px', display: 'flex', maxWidth: '1400px', justifyContent: 'center', alignItems: 'center', borderRadius:'18px' }}>
                        <Grid container spacing={2} style={{ padding: '30px',  }}>
                            <Grid item xs={12} md={12} className='text-center' >
                                <h1 className='title-blue2 text-center' style={{ fontSize: '18px'  }}>CONSULTA TODAS LAS FORMAS DE OBTENER RECOMPENSAS</h1>
                            </Grid>
                            <Grid item xs={12} md={3} style={{ display: 'flex', alignItems: 'center', justifyContent:'left' }}>
                                <label style={{ fontSize: '18px', color:'#00103B', fontWeight: 500, maxWidth: '150px',lineHeight:'20px' }}>Elige una criptomoneda:</label>
                                <Select
                                    value={form.cripto}
                                    style={{ width: 100  }}

                                    suffixIcon={<CaretDownOutlined onClick={()=>handleSelect('selectCripto', !openSelects.selectCripto)} />}
                                    open={openSelects.selectCripto}
                                    onSelect={()=>handleSelect('selectCripto', false)}
                                    onBlur={(e)=>{handleSelect('selectCripto', false)}}
                                    onChange={(e) => { handlerChange('cripto', e);handleSelect('selectCripto', false)  }}
                                    options={[
                                        {
                                            value: '1',
                                            label: 'KII',
                                        }
                                    ]}
                                />
                            </Grid>
                            <Grid item xs={12} md={5} style={{ display: 'flex', alignItems: 'center', justifyContent:'center'  }}>
                            <label style={{ fontSize: '18px',color:'#00103B', fontWeight: 500, minWidth: '150px',lineHeight:'20px'}}>Monto Mínimo de inversión</label>
                                <Select
                                    value={form.moneda}
                                    suffixIcon={<CaretDownOutlined onClick={()=>handleSelect('selectMoneda', !openSelects.selectMoneda)} />}
                                    open={openSelects.selectMoneda}
                                    onSelect={()=>handleSelect('selectMoneda', false)}
                                    onBlur={(e)=>{handleSelect('selectMoneda', false)}}
                                    style={{ width: '160px', }}
                                    onChange={(e) => { handlerChange('moneda', e) }}
                                    options={[
                                        {
                                            value: 'USD',
                                            label: 'USD',
                                        }, {
                                            value: 'COP',
                                            label: 'COP',
                                        }
                                    ]}
                                />

                                <Input style={{ maxWidth: '100px', marginLeft:'-15px' }} value={form.montoMinimo} type='number' maxLength={18} onChange={(e) => handlerChange('montoMinimo', e.target.value)} />
                                
                            </Grid>
                            <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent:'left', alignItems:'center'  }}>
                            <label style={{ fontSize: '18px', color:'#00103B', fontWeight: 500, maxWidth: '180px',lineHeight:'20px', }}>Determina un plazo en meses</label>
                                <Select
                                    value={form.plazoMeses}
                                    style={{ width: 80 }}
                                    suffixIcon={<CaretDownOutlined onClick={()=>handleSelect('selectMeses', !openSelects.selectMeses)} />}
                                    open={openSelects.selectMeses}
                                    onSelect={()=>handleSelect('selectMeses', false)}
                                    onBlur={(e)=>{handleSelect('selectMeses', false)}}

                                    onChange={(e) => { handlerChange('plazoMeses', e);handleSelect('selectMeses', false) }}
                                    options={[
                                        {
                                            value: '1',
                                            label: '1',
                                        },
                                        {
                                            value: '3',
                                            label: '3',
                                        },
                                        {
                                            value: '6',
                                            label: '6',
                                        },
                                        {
                                            value: '12',
                                            label: '12',
                                        },
                                        {
                                            value: '24',
                                            label: '24',
                                        },
                                    ]}
                                />
                               
                            </Grid>
                            <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', flexDirection:'column', justifyContent:'left', gap:'20px' }}>
                                <section className='sectionThree'>
                                <label style={{ fontSize: '18px', color:'#00103B', fontWeight: 500, maxWidth: '150px',lineHeight:'20px', }}>Rendimiento anual (APY)</label>
                                <label style={{ fontSize: '18px',  fontWeight: 600, maxWidth: '150px',paddingTop:'2px',paddingBottom:'2px',paddingInline:'10px',background:'white',minWidth:'120px'   }}>{APY}</label>
                                </section>
                                <section className='sectionThree'>
                                <label style={{ fontSize: '18px', color:'#00103B', fontWeight: 500, maxWidth: '160px',lineHeight:'20px' }}>Recompensa al finalizar el plazo</label>
                                <label style={{ fontSize: '18px', fontWeight:'bold',  maxWidth: '150px',paddingTop:'2px',paddingBottom:'2px',paddingInline:'10px',background:'white'}}>{form.moneda}</label>
                                <label style={{ fontSize: '18px', fontWeight:'bold', maxWidth: '150px',paddingTop:'2px',paddingBottom:'2px',background:'white', minWidth:'150px' }}>{resultado}</label>
                                </section>
                          
                            </Grid>
                            <Grid className='section-three-col' item xs={12} md={6} style={{ }}>
                                    <ChartBar ></ChartBar>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default SectionThreePeople