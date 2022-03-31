import React from "react";
import "./style.css";
import Row from "./Row.js";
import _ from "lodash";

const Table = (props) => {
  const tableHeading = (
    <tr key={-1}>
      {_.map(props.column, (headingData, index) => {
        return <th key={index}>{headingData.header}</th>;
      })}
    </tr>
  );

  const tableRows = _.map(props.tableData, (row, index) => {
    return <Row key={index} row={row} columns={props.column} />;
  });

  return (
    <table>
      <tbody>
        {tableHeading}
        {tableRows}
      </tbody>
    </table>
  );
};

export default Table;
