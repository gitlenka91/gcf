import { useState } from "react";
import './Table.css';

const Table = (props) => {
  const [tableData, setTableData] = useState(props.data);
  const columns = Object.keys(tableData[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column,idx) => (
            <th key={`${column}-${idx}`}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data,idx) => {
          return <tr key={idx}>
            {columns.map((item) => {
              return <td key={`${item}-${idx}`}>{data[item]}</td>
            })}
          </tr>
        })}
      </tbody>
    </table>
  )
};

export default Table;