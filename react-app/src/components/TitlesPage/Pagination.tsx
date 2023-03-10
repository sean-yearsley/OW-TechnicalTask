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
        <>
            <div>
                <button onClick={() => handlePrevPageClick()} disabled={currentPage === 1}>
                    Previous
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button onClick={() => handleNextPageClick()} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </>
    );
}

export default Pagination;
