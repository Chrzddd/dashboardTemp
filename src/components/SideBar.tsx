import MenuItem from "./MenuItem";
import {graphIcon, listProducts} from "./icons/Icons"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
interface SideBarProps{
    change1: ()=>void;
    change2:()=>void;
   

}
export default function SideBar(props: SideBarProps){
    return (
        <aside className={`flex flex-col bg-gray-500 w-1/4 sm:w-1/6 h-full justify-center shadow-xl `}>
            <div className="flex flex-row w-full justify-center items-center h-full ">
                <div className={'flex flex-row justify-center'}>
                    <Stack onClick={()=>console.log('ola')}direction="row" spacing={2}>      
                        <Avatar src="/broken-image.jpg" 
                            sx={{ width: 70, height: 70, cursor:'pointer'}}
                        />
                    </Stack>
                </div>
            </div>
            <ul className={`flex flex-col w-full h-15 items-center h-full`}>
                <MenuItem startIcon={graphIcon} onClick={props.change1} name="Gráfico de Vendas" ></MenuItem>
                <MenuItem startIcon={listProducts} onClick={props.change2} name="Lista de Produtos"></MenuItem>
            </ul>
        </aside>
    )
}