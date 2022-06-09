const ratingAccessor = (data) => {
  const { row, index } = data;
  const { rating } = row;
  const label = rating;
  return { index, label };
};

export default ratingAccessor;
