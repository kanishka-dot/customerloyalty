
import { Table } from 'reactstrap';


export default function DataTable({tableCol, tableData, tableParameter}) {
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