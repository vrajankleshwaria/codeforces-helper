import React from "react";
import { Link } from "react-router-dom";

const nameUIComponent = (props) => {
  const { row, index } = props;
  const { id, name } = row;
  return (
    <td key={index}>
      <div>
        <b>{name}</b>
      </div>
      <Link to={`/upSolve/${id}`}>Enter</Link>
    </td>
  );
};

export default nameUIComponent;
