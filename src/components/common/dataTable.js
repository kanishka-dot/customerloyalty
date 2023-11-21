
import { Table } from 'reactstrap';


export default function DataTable({tableCol, tableData, tableParameter}) {
    console.log(tableData);
      return (
        <Table
            bordered
            striped
        >
            <thead>
                <tr>
                    {tableCol.map((column) => (
                        <th key={column.id}>
                            {column.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </Table>
    )
}