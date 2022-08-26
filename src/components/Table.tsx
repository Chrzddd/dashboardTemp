export default function Table(){
    return (
        <table className="table-fixed w-2/3 items-center border-gray-500 shadow-lg rounded-sm">
            <thead className="text-xs font-semibold uppercase text-gray-50 bg-gray-700 rounded-sm">
                <tr>
                    <th className="p-2">Produto</th>
                    <th className="p-2">Data de Entrada</th>
                    <th className="p-2">Valor</th>
                    <th className="p-2 ">Ações</th>
                </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-350 text-center ">
                <tr>
                    <td className="p-2 ">Notebook</td>
                    <td className="p-2">26 / 08 / 2022</td>
                    <td className="p-2">R$ 2500</td>
                    
                </tr>
                <tr>
                    <td className="p-2 ">Notebook</td>
                    <td className="p-2">26 / 08 / 2022</td>
                    <td className="p-2">R$ 2500</td>
                </tr>
                <tr>
                    <td className="p-2 ">Notebook</td>
                    <td className="p-2">26 / 08 / 2022</td>
                    <td className="p-2">R$ 2500</td>
                </tr>
                
            </tbody>
        </table>
    )
}