import nameUIComponent from "./NameUIComponent";
import ContestTypeAccessor from "../commonAccessor/ContestTypeAccessor";
import ratingAccessor from "../commonAccessor/RatingAccessor";
import BookmarkUIComponent from "./BookmarkUIComponent";

const Column = () => {
  const column = [
    { header: "Name", component: nameUIComponent },
    { header: "Contest Name", accessor: ContestTypeAccessor },
    { header: "Rating", accessor: ratingAccessor },
    { header: "", component: BookmarkUIComponent },
  ];
  return { column };
};

export default Column;
