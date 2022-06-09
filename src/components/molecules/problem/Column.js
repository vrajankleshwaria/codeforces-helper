import nameUIComponent from "./NameUIComponent";
import contestTypeAccessor from "../accessor/contestTypeAccessor";
import ratingAccessor from "../accessor/ratingAccessor";
import bookmarkUIComponent from "./BookmarkUIComponent";

const Column = () => {
  const column = [
    { header: "Name", component: nameUIComponent },
    { header: "Contest Name", accessor: contestTypeAccessor },
    { header: "Rating", accessor: ratingAccessor },
    { header: "", component: bookmarkUIComponent },
  ];
  return { column };
};

export default Column;
