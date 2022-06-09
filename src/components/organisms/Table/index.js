import React from "react";
import "./table.css";
import Row from "../Row";
import _ from "lodash";

const Table = (props) => {
  const heading = (
    <tr key={-1}>
      {_.map(props.column, (headingData, index) => {
        return <th key={index}>{headingData.header}</th>;
      })}
    </tr>
  );

  const rows = _.map(props.tableData, (row, index) => {
    return <Row key={index} row={row} columns={props.column} />;
  });

  return (
    <table>
      <tbody>
        {heading}
        {rows}
      </tbody>
    </table>
  );
};

export default Table;
