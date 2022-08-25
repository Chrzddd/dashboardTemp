import MenuItem from "./MenuItem";

interface SideBarProps{
    title:string;
    subtitle:string;
}
export default function SideBar(){
    return (
        <aside className={`flex flex-col bg-gray-300 w-1/6 justify-center`}>
            <ul className={`flex flex-col w-full items-center `}>
                <MenuItem url="/a" name="Gráfico de Vendas"></MenuItem>
                <MenuItem url="/b" name="Lista de Produtos"></MenuItem>
            </ul>
        </aside>
    )
}