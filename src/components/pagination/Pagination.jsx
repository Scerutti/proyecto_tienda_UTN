
import "./pagination.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <>
            {totalPages > 0 ? (
                <div className="pagination">
                    <button
                        className="pagination-button"
                        disabled={currentPage === 1}
                        onClick={handlePreviousPage}
                    >
                        Anterior
                    </button>
                    <span className="pagination-info">
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        className="pagination-button"
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}
                    >
                        Siguiente
                    </button>
                </div>
            ) : (
                <div className="pagination">
                    <button
                        className="pagination-button"
                        disabled
                        onClick={handlePreviousPage}
                    >
                        Anterior
                    </button>
                    <span className="pagination-info">Sin páginas</span>
                    <button
                        className="pagination-button"
                        disabled
                        onClick={handleNextPage}
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </>
    );
};



export default Pagination;
