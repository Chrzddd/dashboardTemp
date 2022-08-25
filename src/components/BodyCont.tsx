import { Chart } from "react-google-charts";
import Graphics from "./Graphics";
interface BodyContProps{

}
export default function BodyCont(props: BodyContProps){ 


    return (
        <div className={`flex flex-col w-full h-full justify-center`}>
           <Graphics></Graphics>
        </div>
    )
}