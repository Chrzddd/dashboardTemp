import { useState } from "react";
import Graphics from "./Graphics";
import SideBar from "./SideBar";
import Table from "./Table";

interface LayoutProps{
    titulo?:string;
}
export default function Layout(props:LayoutProps){
    const [show, setShow] = useState ('1')
    return (
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
                        <div className="flex flex-col w-80% items-center">
                            <Table></Table>
                        </div>
                    </div>
            }

        </div>
    )
}