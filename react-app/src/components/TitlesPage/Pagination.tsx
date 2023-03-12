import Button from "../Shared/Button";

interface PaginationProps {
    currentPage: number;
    totalTitles: number;
    titlesPerPage: number;
    handleNextPageClick(): void;
    handlePrevPageClick(): void;
}

function Pagination({
    currentPage,
    totalTitles,
    titlesPerPage,
    handleNextPageClick,
    handlePrevPageClick
}: PaginationProps) {
    const totalPages = Math.ceil(totalTitles / titlesPerPage);
    return (
        <div className="w-full flex pt-4">
            <div data-testid="btn-prev" className="text-left w-1/2 md:w-1/3">
                <Button text="Previous" onClickHandler={handlePrevPageClick} disabled={currentPage === 1} />
            </div>

            <div className="text-center w-1/3 hidden md:block">
                Page {currentPage} of {totalPages}
            </div>

            <div data-testid="btn-next"className="text-right w-1/2 md:w-1/3">
                <Button text="Next" onClickHandler={handleNextPageClick} disabled={currentPage === totalPages} />
            </div>
        </div>
    );
}

export default Pagination;
