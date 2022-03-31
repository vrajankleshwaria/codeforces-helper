const durationAccessor = (props) => {
  const { row, index } = props;
  const { durationSeconds } = row;
  const label = durationSeconds;
  return { index, label };
};

export default durationAccessor;
