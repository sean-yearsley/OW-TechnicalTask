import { ReactComponent as Arrows } from '@material-design-icons/svg/filled/unfold_more.svg';
import { ReactComponent as ArrowUp } from '@material-design-icons/svg/filled/keyboard_arrow_up.svg';
import { ReactComponent as ArrowDown } from '@material-design-icons/svg/filled/keyboard_arrow_down.svg';
import { SortObject } from '../../types/SortObject';
import TableColumn from '../../types/TableColumn';

interface SortIconProps {
    columnName: TableColumn;
    sortObject?: SortObject
}

function SortIcon({
    columnName,
    sortObject = undefined
}: SortIconProps) {
    return (
        <>
            {/* Show the arrows icon if: 1) no sortObject, 2) columnName doesn't match the name on the sortObject, 3) the columnName matches the name on the sortObject and is in original order */}
            {(sortObject === undefined ||
                sortObject.column !== columnName ||
                sortObject && sortObject.column === columnName && sortObject.order === "ORIGINAL") && (
                    <Arrows className="inline ml-1" style={{ fill: '#fff' }} width={18} height={18} />
                )}

            {/* Show the up arrow icon if the columnName matches the name on the sortObject and is in ascending order */}
            {sortObject && sortObject.column === columnName && sortObject.order === "ASC" && (
                <ArrowUp className="inline ml-1" style={{ fill: '#fff' }} width={18} height={18} />
            )}

            {/* Show the down arrow icon if the columnName matches the name on the sortObject and is in descending order */}
            {sortObject && sortObject.column === columnName && sortObject.order === "DESC" && (
                <ArrowDown className="inline ml-1" style={{ fill: '#fff' }} width={18} height={18} />
            )}
        </>
    );
}

export default SortIcon;
