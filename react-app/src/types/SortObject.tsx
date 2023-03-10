import SortOrder from "./SortOrder";
import TableColumn from "./TableColumn";

export interface SortObject {
  column: TableColumn;
  order: SortOrder;
}
