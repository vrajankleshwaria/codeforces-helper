import React from "react";
import "./style.css";
import _ from "lodash";

const Row = (props) => {
  const { columns, row } = props;
  return (
    <tr>
      {_.map(columns, (column, index) => {
        let data = { row: row, index: index };
        if (column.component !== undefined) {
          return column.component(data);
        }
        if (column.accessor !== undefined) {
          const { index, label } = column.accessor(data);
          return <td key={index}>{label}</td>;
        }
      })}
    </tr>
  );
};

export default Row;
