import { useState, useEffect } from "react";
import Axios from "axios";
import Graphics from "./Graphics";
import SideBar from "./SideBar";
import Table from "./Table";

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
      }).then((err,result)=>{
        if(err) return console.log('erro')
        else return console.log(`sucess`)
      }) 
      return setShow2('4')
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
                                            className={`bg-gray-200 w-96 shadow-lg rounded-md focus:bg-white h-8`}
                                        />
                                    <label htmlFor="valor">Preco: </label>
                                        <input 
                                            type="tel" 
                                            name="valor"
                                            placeholder="valor" 
                                            onChange={handleChangeValues}
                                            className={`bg-gray-200  shadow-lg w-96 rounded-md focus:bg-white h-8`}
                                        />
                                    <label htmlFor="codigo">Codigo: </label>
                                        <input 
                                            type="tel" 
                                            name="codigo" 
                                            placeholder="codigo" 
                                            onChange={handleChangeValues}
                                            className={`bg-gray-200  shadow-lg w-96 rounded-md focus:bg-white h-8`}
                                        />
                                    <button className={`bg-gray-500 w-44 h-10 rounded-md mt-5 text-white hover:text-black hover:shadow-xl`} onClick={handleSubmit} >Adicionar</button>
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
                                <div className="flex flex-col w-full h-full justify-center items-center">
                                    <div className={`flex flex-col w-4/5 justify-center h-full`}>
                                        <Graphics></Graphics>
                                    </div>
                                </div>
                                :  (show2===`2`? renderizarCadastro() : 
                                <div className="flex flex-col w-full h-full justify-center items-center">
                                    <div className={`flex flex-col  h-4/5 overflow-auto items-center w-full rounded-md `}>
                                        <Table></Table>
                                    </div>
                                    <button className=" mt-5 bg-gray-500 w-44 h-10 rounded-md text-white hover:text-black hover:shadow-xl" onClick={()=>setShow2(`2`)}>Cadastrar</button>
                                </div>
                                
                                )                       
                            }
                            
                    </div>
                </div>
            )

}  
