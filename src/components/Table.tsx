import { useState, useEffect } from "react";
import Axios from "axios";
import {deleteIcon, updateIcon} from "./icons/icons"


export default function Table(){
    const [listGames, setListGames] = useState();
    useEffect(()=>{
        Axios.get("http://localhost:4001/getCards")
        .then((response)=>{
          setListGames(response.data)
          
        }); 
      },[])
      
    return (
      
        <table className="table-fixed w-2/3  items-center rounded-md shadow-lg  h-3/5 overflow-y-scroll">
            <thead className="text-xs font-semibold uppercase h-10 text-gray-50 bg-gray-700 rounded-sm">
                <tr>
                    <th className="p-2">ID</th>
                    <th className="p-2">Produto</th>
                    <th className="p-2">Preço</th>
                    <th className="p-2">Codigo</th>
                    <th className="p-2 ">Ações</th>
                </tr>
            </thead>      
            <tbody className="text-sm divide-y divide-gray-350 text-center text-black">
            {typeof listGames !== "undefined" && listGames.map((value)=>{
                return (
                <tr className={`${(value.ID%2) === 0 ?"":"bg-gray-50"} hover:bg-gray-300 `}key={value.ID}>
                    <td className="p-2 ">{value.ID}</td>
                    <td className="p-2 ">{value.Nome}</td>
                    <td className="p-2">R$:{value.Preço}</td>
                    <td className="p-2">{value.Codigo}</td>     
                    <td className="p-2 flex justify-center">
                        <button className="mr-3">{deleteIcon}</button >
                        <button className="mr-3">{updateIcon}</button >

                    </td>  
                </tr> 
            )  
            })}
            </tbody>
       
        </table>
    )
}