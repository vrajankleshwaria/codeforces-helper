import nameUIComponent from "./NameUIComponent";
import ratingAccessor from "../accessor/ratingAccessor";

const column = [
  { header: "Name", component: nameUIComponent },
  { header: "Rating", accessor: ratingAccessor },
];

export default column;
