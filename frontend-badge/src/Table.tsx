import React from "react";
import "./Table.css";

interface RowData {
  id: number;
  title: string;
  body: string;
}

interface TableProps {
  data: RowData[];
}

const Table = (props: TableProps) => {
  const { data } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
