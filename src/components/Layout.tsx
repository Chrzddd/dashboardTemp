import { useState } from "react";
import Graphics from "./Graphics";
import SideBar from "./SideBar";
import Table from "./Table";

interface LayoutProps{
    titulo?:string;
}
export default function Layout(props:LayoutProps){
    const [show, setShow] = useState ('1')
    const [show2, setShow2] = useState('4')

    function renderizarCadastrar(){
        return (
            <div className={`flex flex-col justify-center items-center`}>
                <input type="text" className={`bg-gray-200 w-1/6 rounded-md`}/>
                <input type="text" className={`bg-gray-200 mt-5 w-1/6`}/>
                <input type="text" className={`bg-gray-200 mt-5 w-1/6`}/>
                <button onClick={()=>setShow2('4')}>Adicionar</button>
            </div>
        )
    }

    return (
        <div>

            <div className={`flex h-screen w-screen`}>             
                <SideBar  
                    change1={() => setShow('1')}
                    change2={() => setShow('2')}
                    
                />
                {
                    show === '1' ? 
                        <div className="flex flex-col w-full justify-center">
                            <Graphics></Graphics> 
                        </div>
                    : 
                        <div className="flex flex-col w-full justify-center">
                            
                            {show2 === '5' ? renderizarCadastrar(): <div className="flex flex-col w-80% items-center">
                                <Table></Table>
                            </div>}
                                <button  className={`${show2 === '5' ? 'hidden' : ''}`}onClick={()=>setShow2('5')}>Cadastrar</button>
                        </div>
                }

                
            </div>
        </div>
    )
}