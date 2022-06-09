import React from "react";

const nameUIComponent = (data) => {
  const { row, index } = data;
  const { id, contestId, name } = row;

  const showProblem = () => {
    return window.open(
      `https://codeforces.com/contest/${contestId}/problem/${id}`
    );
  };

  return (
    <td onClick={showProblem} key={index}>
      <b>
        {id}. {name}
      </b>
    </td>
  );
};

export default nameUIComponent;
