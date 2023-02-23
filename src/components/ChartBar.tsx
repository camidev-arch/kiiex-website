
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

export interface IBarChart {
    data: IChartData[]
     labels:any[],
    
 }
 
 export interface IChartData {
     data: number[],
     nameData:string,
     barColor:string
 }

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
    fill: true,
    scales: {
      y: {
        grid: {
          display: false
        }, ticks: {
          display: false
        }
      },
      x: {
        grid: {
          display: true
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

const ChartBar = () => {
  const [charData, setCharData] = useState<any>({datasets:[]})

  useEffect(() => {
   const chart:any = chartRef.current

   if(!chart) return
    
   const createGradien =(color:any) =>{
    const ctx:any = chart.ctx 
    const gradient = ctx.createLinearGradient(0,0,0,400)
    gradient.addColorStop(0,color)
    gradient.addColorStop(0.65,'rgb(44, 54, 94)')
    gradient.addColorStop(1,'rgba(255,255,255,0.6)')
    return gradient


   }
    setCharData({
      datasets:[
        {
          label:'Mis datos',
          data:[1,4,9,16,25],
          segment:{
            borderColor: (context:any)=>{
              if(context.type === 'segment'){
                return createGradien('rgba(0, 159, 227, 1)')
              }
            },
            backgroundColor:(context:any)=>{
              if(context.type === 'segment'){
                return context.p1DataIndex % 2 === 0 ? createGradien('rgba(0, 159, 227, 1)'  ): createGradien('rgba(0, 159, 227, 1)'  )
              }
            } 
          }
        },
            {
          label:'Mis datos',
          data:[1,4,9,16,25,36],
          segment:{
            borderColor: 'gray',
            backgroundColor:'gray' 
          }
        }
      ],
      labels:[100,200,300,400,500,600]
    })
  
  
  }, [])
  

  const chartRef = useRef(null)
  return (
   <Line data={charData} options={options} ref={chartRef}/>
  )
}

export default ChartBar