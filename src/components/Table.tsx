import { useState, useEffect } from "react";
import Axios from "axios";


export default function Table(){
    const [listGames, setListGames] = useState();

    useEffect(()=>{
        Axios.get("http://localhost:4001/getCards")
        .then((response)=>{
          setListGames(response.data)});
      },[])
    return (
        <table className="table-fixed w-2/3 items-center border-gray-500 shadow-lg rounded-sm">
            <thead className="text-xs font-semibold uppercase text-gray-50 bg-gray-700 rounded-sm">
                <tr><th className="p-2">ID</th>
                    <th className="p-2">Produto</th>
                    <th className="p-2">Preço</th>
                    <th className="p-2">Codigo</th>
                </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-350 text-center text-black">
            {typeof listGames !== "undefined" && listGames.map((value)=>{
                return (
                <tr key={value.ID}>
                    <td className="p-2 ">{value.ID}</td>
                    <td className="p-2 ">{value.Nome}</td>
                    <td className="p-2">R$: {value.Preço}</td>
                    <td className="p-2">{value.Codigo}</td>     
                </tr> 
            )    
            })}
            </tbody>
        </table>
    )
}