import nameUIComponent from "./NameUIComponent";
import typeAccessor from "../accessor/typeAccessor";
import durationAccessor from "../accessor/durationAccessor";
import startsAccessor from "../accessor/startTimeAccessor";

const column = [
  { header: "Name", component: nameUIComponent },
  { header: "Type", accessor: typeAccessor },
  { header: "DurationSeconds", accessor: durationAccessor },
  { header: "StartTime", accessor: startsAccessor },
];

export default column;
