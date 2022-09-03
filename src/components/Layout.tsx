import { useState, useEffect } from "react";
import Axios from "axios";
import Graphics from "./Graphics";
import SideBar from "./SideBar";
import Table from "./Table";
import { url } from "inspector";


export default function Layout(){
    const [show, setShow] = useState ('1')
    const [show2, setShow2] = useState('4')
    const [values, setValues] = useState(``);


    const handleChangeValues = (value) =>{
        setValues(prevValue=>({
          ...prevValue,
          [value.target.name]: value.target.value,
          
        }));       
    }
    const handleSubmit = () =>{
        Axios.post("http://localhost:4001/register",{
        name: values.name,
        valor: values.valor,
        codigo: values.codigo
      }).then((err)=>{
      }) 
    }
    function renderizarCadastro(){
        return (
            <div className={`flex flex-col justify-center items-center text-black w-full`}>
                                    <label htmlFor="name">Nome: </label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="name" 
                                            onChange={handleChangeValues}
                                            className={`bg-gray-200 w-96 shadow-lg rounded-md`}
                                        />
                                    <label htmlFor="valor">Preco: </label>
                                        <input 
                                            type="tel" 
                                            name="valor"
                                            placeholder="valor" 
                                            onChange={handleChangeValues}
                                            className={`bg-gray-200  shadow-lg w-96 rounded-md`}
                                        />
                                    <label htmlFor="codigo">Codigo: </label>
                                        <input 
                                            type="tel" 
                                            name="codigo" 
                                            placeholder="codigo" 
                                            onChange={handleChangeValues}
                                            className={`bg-gray-200  shadow-lg w-96 rounded-md`}
                                        />
                                    <a onClick={()=>setShow2('4')} ><button className={`bg-gray-500 w-44 h-10 rounded-md mt-5`} onClick={handleSubmit} >Adicionar</button></a>
                                </div>
        )
    }
    

    return (
        <div className="bg-white">
            <div className={`flex h-screen w-screen`}>             
                <SideBar  
                    change1={() => setShow('1')}
                    change2={() => setShow('2')}
                />
                             {show === `1` ? 
                                <div className="flex flex-col w-full h-full justify-center ">
                                    <Graphics></Graphics>
                                </div>
                                :  (show2===`2`? renderizarCadastro() : 
                                <div className="flex flex-col w-full h-full justify-center items-center">
                                    
                                    <Table></Table>
                                    <button className="text-black mt-5 bg-gray-500 w-44 h-10 rounded-md" onClick={()=>setShow2(`2`)}>Cadastrar</button>
                                </div>
                                
                                )                       
                            }
                            
                    </div>
                </div>
            )

}  
