import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse } from 'antd'
import Title from 'antd/lib/typography/Title'
import React, { useId } from 'react'

const SectionSixPeople = () => {
    
    const { Panel } = Collapse;
    const PQR = [
        {
            title: '¿Cómo funciona el staking?',
            content:"Staking es un método para verificar y asegurar transacciones en blockchains de prueba de participación. Es más rápido y más eficiente energéticamente que otros métodos, como la prueba de trabajo. Además, los participantes son recompensados por ayudar en el proceso. A cambio de delegar su criptografía, se le recompensa con más activos de la red. Para generar recompensas de participación en una cadena de bloques de prueba de participación, un nodo debe designar una cierta cantidad de tokens en la red como participación (similar a un depósito de seguridad). La posibilidad de que se elija ese nodo para validar el siguiente bloque suele ser proporcional a la cantidad de tokens que se están apostando. Si el nodo valida con éxito un bloque, se le otorga la recompensa de participación, de forma similar a como se recompensa a un minero en las cadenas de Prueba de trabajo. Los validadores pierden parte de su participación si aprueban una transacción fraudulenta; esto los incentiva a aprobar solo transacciones válidas"
        },
        {
            title: '¿Qué activos ganan recompensas de participación?',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {
            title: '¿Quién puede hacer staking en Kii Exchange?',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            title: '¿Cuáles son los riesgos asociados con el staking?',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {
            title: '¿Hay una tarifa asociada con estos servicios?',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {
            title: '¿Pagaré impuestos sobre mis recompensas de participación?',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {
            title: '¿Cómo gano el rendimineto de DeFi en Coinbase?',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {
            title: '¿Cuál es la diferencia entre el staking y el rendimiento de DeFi?',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},
        {
            title: '¿Puedo transferir otras cripto a KIIEx para ganar recompensas?',
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." }
    ]

  return (
    <div className='container-fluid text-center' style={{paddingTop:'15%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',paddingBottom:'15%', backgroundColor:'rgb(242 242 242 / 7%) '}}>
        <Title style={{fontWeight:'bold', color:'#00103B'}}>Preguntas frecuentes</Title>
        <p className='p-people-six' style={{color:'#4A4F5F'}}>
Resuelve aqui todas las dudas más frecuentes acerca de nuestro exchange, el funcionamiento de nuestros servicios y demás información importante
        </p>
        <Collapse className='collapse-six' style={{}} defaultActiveKey={['1']} expandIcon={(e)=> e.isActive ? <MinusOutlined className='btn-footer' style={{fontSize:'20px', borderRadius:'50px', padding:'10px'}} />: <PlusOutlined className='btn-footer' style={{fontSize:'20px', backgroundColor:'#F9F9F9', borderRadius:'50px', padding:'10px'}} />} expandIconPosition={'end'}>
            {PQR.map((pregunta)=>{
                return   <Panel className='title-panel-six' style={{backgroundColor:'transparent'}} forceRender  header={pregunta.title} key={useId()} >
                <p className='p-six-panel' style={{}}>{pregunta.content}</p>
              </Panel>
            })}
    </Collapse>
    </div>
  )
}

export default SectionSixPeople