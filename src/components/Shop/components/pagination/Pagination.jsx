import React from "react";
import PaginationArrowRight from "../../icons/arrow-right.svg";
import PaginationArrowLeft from "../../icons/arrow-left.svg";

export const Pagination = ({ pagination, handlePaginationChange, totalItems }) => {
    const totalPages = Math.ceil(totalItems / pagination.pageSize);

    return (
        <div className="pagination" id="pagination">
            <div
                className="button-left"
                id="left-arrow-button"
                onClick={() => handlePaginationChange(pagination.page - 1)}
                disabled={pagination.page === 1}
            >
                <img src={PaginationArrowLeft} alt="arrow left" />
            </div>
            <div className="pages js-pages">
                {[...Array(totalPages)].map((_, index) => (
                    <div
                        key={index}
                        className={`page js-page ${pagination.page === index + 1 ? "active" : ""}`}
                        onClick={() => handlePaginationChange(index + 1)}
                    >
                        {index + 1}
                        <div/>
                    </div>
                ))}
            </div>
            <div
                className="button-right"
                id="right-arrow-button"
                onClick={() => handlePaginationChange(pagination.page + 1)}
                disabled={pagination.page === totalPages}
            >
                <img src={PaginationArrowRight} alt="arrow right" />
            </div>
        </div>
    );
};
