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
        ["Mês", "Produtos em Estoque", "Expenses"],
        [(date.getFullYear()).toString(), estoque, 400],
        
      ];

    const options = {
        title: "Resumo de Ultimas Vendas",
        hAxis: { title: `Em: ${date.getDate() >= 10 ? date.getDate() : '0'+date.getDate()} / ${date.getMonth()+1 >= 10 ? date.getMonth()+1 : '0'+date.getMonth()} / ${date.getFullYear()}`, titleTextStyle: { color: "#444" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "55%", height: "70%" },
      };

    return (
        <>      
            <Chart
                chartType="AreaChart"
                width="w-full"
                height="400px"
                data={data}
                options={options}
            />
        </>

    )   
    
}