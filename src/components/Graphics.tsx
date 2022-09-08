import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import Axios from "axios"
interface GraphicsProps {
    
}
export default function Graphics(props:GraphicsProps){

    const [estoque, setEstoque] = useState()
    useEffect(()=>{
        Axios.get("http://localhost:4001/getCards")
        .then((response)=>{
          setEstoque(response.data.length)
          
        }); 
    },[])
    
    
    var date = new Date;
    const data = [
        ["Mês", "Estoque", "Vendas", 'Lucro'],
        [`Janeiro`, estoque, 800, 30],
        [`Fevereiro`, estoque, 400, 30],
        [`Março`, estoque, 400, 30],
        [`Abril`, estoque, 400, 30],
        [`Maio`, estoque, 400, 30],
        
      ];

    const options = {
        title: "Resumo de Ultimas Vendas",
        hAxis: { title: `Em: ${date.getDate() >= 10 ? date.getDate() : '0'+date.getDate()} / ${date.getMonth()+1 >= 10 ? date.getMonth()+1 : '0'+date.getMonth()} / ${date.getFullYear()}`, titleTextStyle: { color: "#444" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "55%", height: "80%" },
        colors: ["red", "#2596be", '#071e26'],
        
      };

    return (
        <>      
            <Chart
                chartType="Bar"
                width="100%"
                height="500px"
                data={data}
                options={options}
            />
        </>

    )   
    
}