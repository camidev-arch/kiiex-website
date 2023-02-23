import { Button } from 'antd'
import React from 'react'

const SectionTwoPeople = () => {
    return (
        <div className='container-fluid main1' style={{ backgroundColor: 'rgb(242 242 242 / 7%) ', minHeight: '600px', display: 'flex', justifyContent: 'center', width: '100%', paddingRight: '12%', paddingLeft: '12%', paddingTop: '120px', paddingBottom: '80px' }}>
            <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div className='col-12' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <h1 className='title-blue text-center'>¡Cripto exchange para todos!</h1>
                    <h1 className='subtitle-three-people text-center' style={{ marginTop: 0, textAlign: 'center' }}>Todas tus criptomonedas ganando recompensas en modo automático</h1>
                    <p className='p-three-people main-p2 text-center'>
                        Conserva criptomonedas para obetener más criptomonedas. Obtén rendimientos de forma pasiva conservando tus criptomonedas en KII Exchange, inicia ahora mismo creando una cuenta, y comienza a ver crecer tu inversión de manera fácil y segura.
                    </p>
                    <Button className='btn-registrar3' style={{ backgroundColor: 'white', height: '50px', width: '320px',  margin: '10px' }}>
                        Crea tu cuenta aquí en pocos pasos
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SectionTwoPeople