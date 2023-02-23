import { Button, Card, Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import ArrowRigth from '../assets/icons/ArrowRigth'
import './index.css'

interface IProps {
        icon: (color: any) => React.ReactNode,
        title: string,
        description: string,
        colorText: string,
        colorBody: string,
        clase?:string
}
const ExchangeCard = ({ colorBody, colorText, description, icon, title, clase='cards' }: IProps) => {
        const [color, setColor] = useState(clase=='cards'?'#1B3C8D':'white')
        return (
                <Card style={{
                        borderRadius: '30px',
                        width: '300px',
                        height: '260px',
                        padding: '10px',
                        margin:'15px',
                        paddingBottom:'40px'
                       
                }}
                        className={clase}
                        hoverable
                        headStyle={{ border: '0px', paddingBottom: '0px', marginBottom: '-20px' }}

                        bodyStyle={{ height: '100%', padding:'17px', marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        onMouseOver={() => { setColor(clase=='cards'?'white':'#1B3C8D') }}
                        onMouseLeave={() => setColor(clase=='cards'?'#1B3C8D':'white')
                        }
                >
                        <Row style={{ height: '100%' }}>
                                <Col style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} span={24}>
                                        <div style={{ alignSelf: 'start' }}>{icon(color)}</div>
                                        <h2 className='title_card' style={{ fontWeight: 'BOLD', fontSize: '18px', color: color == 'white' ? 'white' : '#4A4F5F', marginTop: '10px', alignSelf: 'start' }}> {title}</h2>
                                        <p style={{ fontSize: '14PX',color: color == 'white' ? 'white' : 'black' }}>
                                                {description}
                                        </p>
                                </Col>
                        </Row>

                        <Row style={{ width: '90%', display: 'flex', justifyContent: 'end' }}>
                                <Col style={{ height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} span={24}>
                                        <Button icon={<ArrowRigth color={color} heigth='45px' width='45px' />} style={{ backgroundColor: 'transparent', border: '0px', alignSelf: 'end' }}></Button>
                                </Col>
                        </Row>

                </Card>
        )
}

export default ExchangeCard