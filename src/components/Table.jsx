import { useState, useEffect } from "react";
import Axios from "axios";
import {deleteIcon, updateIcon} from "./icons/Icons"
import DialogForm from "./DialogForm"
export default function Table(){

    const [open, setOpen] = useState(true)

    const [listGames, setListGames] = useState();

    const buttonClickEdit = () =>{
        setOpen(true)
    }
    useEffect(()=>{
        Axios.get("http://localhost:4001/getCards")
        .then((response)=>{
          setListGames(response.data)
          
        }); 
      },[])
      
    return (
        <>
            <DialogForm open={open} setOpen={setOpen}></DialogForm>
            <table className="table-fixed w-10/12   items-center rounded-md shadow-lg  h-3/5 overflow-y-scroll">
                <thead className="text-xs font-semibold uppercase h-10 text-gray-50 bg-gray-700 rounded-sm">
                    <tr>
                        <th className="p-2">ID</th>
                        <th className="p-2">Produto</th>
                        <th className="p-2">Preço</th>
                        <th className="p-2">Codigo</th>
                        <th className="p-2 ">Ações</th>
                    </tr>
                </thead>      
                <tbody className="text-sm divide-y divide-gray-350 text-center text-black justify-center text-center break-all">
                {typeof listGames !== "undefined" && listGames.map((value)=>{
                    return (
                    <tr className={`${(value.ID%2) === 0 ?"":"bg-gray-50"} hover:bg-gray-300 items-center justify-center`}key={value.ID}>
                        <td className="p-2 ">{value.ID}</td>
                        <td className="p-2 ">{value.Nome}</td>
                        <td className="p-2">R$:{value.Preço}</td>
                        <td className="p-2">{value.Codigo}</td>     
                        <td className="p-2 flex justify-center items-center">
                            <button  className="mr-3">{updateIcon}</button >
                        </td>  
                    </tr> 
                )  
                })}
                </tbody>
        
            </table>
        </>
    )
}