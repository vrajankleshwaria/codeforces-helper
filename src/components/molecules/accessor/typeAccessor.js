const typeAccessor = (props) => {
  const { row, index } = props;
  const { type } = row;
  const label = type;
  return { index, label };
};

export default typeAccessor;
