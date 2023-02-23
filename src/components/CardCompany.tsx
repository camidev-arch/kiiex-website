import { Card, Col, Row } from 'antd'
import React, { useState } from 'react'
interface IProps {
    icon: (color: any) => React.ReactNode,
    title: string,
    description: string,
    colorText: string,
}

const CardCompany = ({colorText,description,icon,title}:IProps) => {
    const [color, setColor] = useState('#1B3C8D')
    return (
            <Card style={{
                    borderRadius: '15px',
                    width: '300px',
                    height: '240px',
                    margin:15,
                    boxShadow:'rgb(0,0,0,0.1)'

                   
            }}
                    className='cards'
                    hoverable
                    headStyle={{ border: '0px', paddingBottom: '0px', marginBottom: '-20px' }}

                    bodyStyle={{ height: '100%', padding:'17px', marginTop: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    onMouseOver={() => { setColor('white') }}
                    onMouseLeave={() => setColor('#0F4DCC')
                    }
            >
                    <Row style={{ height: '100%' }}>
                            <Col style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} span={24}>
                                    <div style={{ alignSelf: 'center' }}>{icon(color)}</div>
                                    <h2 className='title_card' style={{ fontWeight: 'BOLD', fontSize: '18px', color: color == 'white' ? 'white' : '#1B3C8D', marginTop: '10px', alignSelf: 'center' }}> {title}</h2>
                                    <p style={{ fontSize: '14PX', textAlign:'center' }}>
                                            {description}
                                    </p>
                            </Col>
                    </Row>

                  

            </Card>
    )
}

export default CardCompany