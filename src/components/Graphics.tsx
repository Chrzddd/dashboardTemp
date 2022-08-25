import { Chart } from "react-google-charts";
interface GraphicsProps {
    
}
export default function Graphics(props:GraphicsProps){

    const data = [
        ["Year", "Sales", "Expenses", "a"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
        ["2016", 1030, 540],
        ["2016", 1030, 540],
      ];

    const options = {
        title: "Company Performance",
        hAxis: { title: "Year", titleTextStyle: { color: "#444" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "60%", height: "70%" },
      };

    return (
        <>      
            <Chart
                chartType="AreaChart"
                width="w-full"
                height="400px"
                data={data}
                options={options}
            />
        </>

    )   
    
}