import BodyCont from "./BodyCont";
import SideBar from "./SideBar";

interface LayoutProps{
    titulo?:string;
}
export default function Layout(props:LayoutProps){
    return (
        <div className={`flex h-screen w-screen`}>             
            <SideBar/>
            <BodyCont/>
        </div>
    )
}