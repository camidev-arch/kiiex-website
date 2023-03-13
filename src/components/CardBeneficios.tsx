import React from 'react'

 export interface IPropsCards {
    title:string,
    icon:React.ReactNode,
    description:string
    reverse?:boolean
}
const CardBeneficios = ({description,icon,title, reverse = false}:IPropsCards) => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'10px', paddingRight:'0px'}}>
  { !reverse && icon}
    <div style={!reverse ? {marginLeft:'20px', paddingTop:'10px'}:{marginRight:'20px', paddingTop:'10px'}}>
        <h4 className='h-one-res' style={{fontSize:'19px', marginBottom:'0px', color:'#1B3C8D', fontWeight:'bold'}}>{title}</h4>
        <p className='p-size p-one p-one-res' style={{fontSize:'15px', paddingTop:'10px',color:reverse? '':'#4A4F5F'}}>{description}</p>
    </div>
    { reverse && icon}
</div>
  )
}

export default CardBeneficios