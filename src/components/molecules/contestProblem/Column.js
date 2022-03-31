import nameUIComponent from "./NameUIComponent";
import ratingAccessor from "../commonAccessor/RatingAccessor";

const column = [
  { header: "Name", component: nameUIComponent },
  { header: "Rating", accessor: ratingAccessor },
];

export default column;
