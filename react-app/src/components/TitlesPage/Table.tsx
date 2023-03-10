import { useEffect, useState } from "react";
import TableColumn from "../../types/TableColumn";
import { SortObject } from "../../types/SortObject";
import SortOrder from "../../types/SortOrder";
import { Title } from "../../types/Title";
import { ReactComponent as ArrowUp } from '@material-design-icons/svg/filled/arrow_upward.svg';
import { ReactComponent as ArrowDown } from '@material-design-icons/svg/filled/arrow_downward.svg';

interface TableProps {
    data: Title[],
    onDataRowClick(titleNumber: string): void;
}

function Table({
    data,
    onDataRowClick
}: TableProps) {
    // State
    const [sortedItems, setSortedItems] = useState<Title[]>([]);
    const [sortObject, setSortObject] = useState<SortObject | null>();

    // Events
    /** Watch for a change in the initial data passed into the component and update the sortItems state when change detected */
    useEffect(() => {
        setSortedItems(data);
    }, [data]);

    /** Watches for any change in the SortObject state and executes the actual sorting when it detects a change  */
    useEffect(() => {
        let sortedTitles = [...data];

        if (sortObject && sortObject.order !== "ORIGINAL") {
            switch (sortObject.column) {
                case "TITLE":
                    sortedTitles.sort((a, b) => {
                        if (a.titleNumber < b.titleNumber) {
                            return sortObject.order === "ASC" ? -1 : 1;
                        }
                        if (a.titleNumber > b.titleNumber) {
                            return sortObject.order === "ASC" ? 1 : -1;
                        }
                        return 0;
                    });
                    break;
                case "TENURE":
                    sortedTitles.sort((a, b) => {
                        if (a.tenure < b.tenure) {
                            return sortObject.order === "ASC" ? -1 : 1;
                        }
                        if (a.tenure > b.tenure) {
                            return sortObject.order === "ASC" ? 1 : -1;
                        }
                        return 0;
                    });
                    break;
            }
        }

        setSortedItems(sortedTitles);
    }, [sortObject]);

    /** Click event to handle the sorting of a column. It creates a new sortObject (comprised of the column to sort and the order/direction) */
    const onSortColumnClick = (sortByColumn: TableColumn) => {
        let order: SortOrder = "ASC";

        if (sortObject?.column === sortByColumn && sortObject?.order === "ASC") {
            order = "DESC";
        }

        if (sortObject?.column === sortByColumn && sortObject?.order === "DESC") {
            order = "ORIGINAL";
        }

        const newSortObject: SortObject = { column: sortByColumn, order: order };
        setSortObject(newSortObject);
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => onSortColumnClick("TITLE")}>
                            Title Number
                            {/* Icon for title ascending */}
                            {sortObject && sortObject.column === "TITLE" && sortObject.order === "ASC" && (
                                <ArrowUp width={14} height={14} />
                            )}
                            {/* Icon for title descending */}
                            {sortObject && sortObject.column === "TITLE" && sortObject.order === "DESC" && (
                                <ArrowDown width={14} height={14} />
                            )}
                        </th>
                        <th onClick={() => onSortColumnClick("TENURE")}>
                            Class of Title
                            {/* Icon for tenure ascending */}
                            {sortObject && sortObject.column === "TENURE" && sortObject.order === "ASC" && (
                                <ArrowUp width={14} height={14} />
                            )}
                            {/* Icon for tenure descending */}
                            {sortObject && sortObject.column === "TENURE" && sortObject.order === "DESC" && (
                                <ArrowDown width={14} height={14} />
                            )}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedItems.map((title) => {
                        return (
                            <tr key={title.titleNumber} onClick={() => onDataRowClick(title.titleNumber)}>
                                <td>{title.titleNumber}</td>
                                <td>{title.tenure}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table;
