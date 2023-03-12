import { useEffect, useState } from "react";
import TableColumn from "../../types/TableColumn";
import { SortObject } from "../../types/SortObject";
import SortOrder from "../../types/SortOrder";
import { Title } from "../../types/Title";
import { ReactComponent as ArrowUp } from '@material-design-icons/svg/filled/arrow_upward.svg';
import { ReactComponent as ArrowDown } from '@material-design-icons/svg/filled/arrow_downward.svg';
import Pagination from "../Shared/Pagination";

interface TableProps {
    data: Title[],
    onDataRowClick(titleNumber: string): void;
}

function Table({
    data,
    onDataRowClick
}: TableProps) {
    const titlesPerPage = 5;

    // State
    const [titlesToDisplay, setTitlesToDisplay] = useState<Title[]>([]);
    const [titles, setTitles] = useState<Title[]>([]);
    const [sortObject, setSortObject] = useState<SortObject | null>();

    const [currentPage, setCurrentPage] = useState<number>(1);

    // Events
    /** Watch for a change in the data parameter, when a change is detected update the titles state and do the initial pagination to set the titlesToDisplay */
    useEffect(() => {
        setTitles(data);
        updatePaginationForTitles([...data]);
    }, [data]);

    /** Watches for any change in the SortObject state, when a change it detected it executes the actual sorting functionality  */
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

        // Update the titles state, do the pagination for the newly sorted list and reset the current page back to the first page
        setTitles(sortedTitles);
        updatePaginationForTitles(sortedTitles);
        setCurrentPage(1);
    }, [sortObject]);

    /** Watch for a change with the currentPage state, when changed it will update the pagination for the titles state */
    useEffect(() => {
        updatePaginationForTitles(titles);
    }, [currentPage]);

    /** Performs the functionality of the pagination on the titles passed in and then updates the titlesToDisplay */
    const updatePaginationForTitles = (titles: Title[]) => {
        const indexOfLastTitle = currentPage * titlesPerPage;
        const indexOfFirstTitle = indexOfLastTitle - titlesPerPage;
        const displayTitles = [...titles].splice(indexOfFirstTitle, titlesPerPage);
        setTitlesToDisplay(displayTitles);
    }

    /** Handles the sorting of a column on table header cell click, it creates a new sortObject (comprised of the column to sort and the order/direction) */
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

    /** Handles the on next page button click for the pagination */
    const onNextPageClick = () => {
        setCurrentPage((nextPage) => nextPage + 1);
    };

    /** Handles the on previus page button click for the pagination */
    const onPreviousPageClick = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div>
            <table className="table-fixed border w-full">
                <thead className="border border-slate-500">
                    <tr>
                        <th className="font-bold p-2 border-b border-slate-500 text-left bg-[#006A87] text-white hover:cursor-pointer" onClick={() => onSortColumnClick("TITLE")}>
                            Title Number
                            {/* Icon for title ascending */}
                            {sortObject && sortObject.column === "TITLE" && sortObject.order === "ASC" && (
                                <ArrowUp className="inline ml-1" style={{fill: '#fff'}} width={18} height={18} />
                            )}
                            {/* Icon for title descending */}
                            {sortObject && sortObject.column === "TITLE" && sortObject.order === "DESC" && (
                                <ArrowDown className="inline ml-1" style={{fill: '#fff'}} width={18} height={18} />
                            )}
                        </th>
                        <th className="font-bold p-2 border-b border-slate-500 text-left bg-[#006A87] text-white hover:cursor-pointer" onClick={() => onSortColumnClick("TENURE")}>
                            Class of Title
                            {/* Icon for tenure ascending */}
                            {sortObject && sortObject.column === "TENURE" && sortObject.order === "ASC" && (
                                <ArrowUp className="inline ml-1" style={{fill: '#fff'}} width={18} height={18} />
                            )}
                            {/* Icon for tenure descending */}
                            {sortObject && sortObject.column === "TENURE" && sortObject.order === "DESC" && (
                                <ArrowDown className="inline ml-1" style={{fill: '#fff'}} width={18} height={18} />
                            )}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {titlesToDisplay.map((title) => {
                        return (
                            <tr className="odd:bg-slate-100 hover:bg-slate-300 hover:cursor-pointer" key={title.titleNumber} onClick={() => onDataRowClick(title.titleNumber)}>
                                <td className="p-2 border-b text-left">{title.titleNumber}</td>
                                <td className="p-2 border-b text-left">{title.tenure}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Pagination totalItems={titles.length} itemsPerPage={titlesPerPage} currentPage={currentPage} handlePrevPageClick={onPreviousPageClick} handleNextPageClick={onNextPageClick} />
        </div>
    );
}

export default Table;
