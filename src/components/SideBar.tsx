import MenuItem from "./MenuItem";

interface SideBarProps{
    change1: ()=>void;
    change2:()=>void;
   

}
export default function SideBar(props: SideBarProps){
    return (
        <aside className={`flex flex-col bg-gray-500 w-1/6 h-full justify-center shadow-xl`}>
            <ul className={`flex flex-col w-full h-15 items-center `}>
                <MenuItem onClick={props.change1} name="Gráfico de Vendas" ></MenuItem>
                <MenuItem onClick={props.change2} name="Lista de Produtos"></MenuItem>
            </ul>
        </aside>
    )
}