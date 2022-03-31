import React from "react";
import onclick from "./Onclick";

const nameUIComponent = (props) => {
  const { row, index } = props;
  const { id, name } = row;
  return (
    <td onClick={() => onclick(row)} key={index}>
      <b>
        {id}. {name}
      </b>
    </td>
  );
};

export default nameUIComponent;
