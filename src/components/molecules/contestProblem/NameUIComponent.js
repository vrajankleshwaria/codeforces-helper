import React from "react";
import onclick from "./Onclick";

const nameUIComponent = (data) => {
  const { row, index } = data;
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
