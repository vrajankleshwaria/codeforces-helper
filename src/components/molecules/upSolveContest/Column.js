import nameUIComponent from "./NameUIComponent";
import typeAccessor from "../commonAccessor/TypeAccessor";
import durationAccessor from "../commonAccessor/DurationAccessor";
import startsAccessor from "../commonAccessor/StartsAccessor";

const column = [
  { header: "Name", component: nameUIComponent },
  { header: "Type", accessor: typeAccessor },
  { header: "DurationSeconds", accessor: durationAccessor },
  { header: "StartTime", accessor: startsAccessor },
];

export default column;

// props
