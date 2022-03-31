import React from "react";

const nameUIComponent = (props) => {
  const { row, index } = props;
  const { name } = row;
  return (
    <td key={index}>
      <div>
        <b>{name}</b>
      </div>
      <a href="https://codeforces.com/contests">Register</a>
    </td>
  );
};

export default nameUIComponent;
