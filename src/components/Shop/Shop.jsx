import React, { useState, useEffect, useContext } from "react";

import { Sidebar } from "./components/sidebar/Sidebar";
import { Sort } from "./components/sort_products/Sort";
import { Pagination } from "./components/pagination/Pagination";
import { NewsLetter } from "./components/NewsLetter";

import { AppContext } from "../../context";
import { pageSize, oldFilter } from "../../constants";
import { getDataProduct, filterProducts } from "./utils";
import "./Shop.css";

export const Shop = ({ products }) => {
    const [currentFilter, setCurrentFilter] = useState(oldFilter)
    const [searchValue, setSearchValue] = useState("");
    const [sort, setSort] = useState("");
    const [pagination, setPagination] = useState({ page: 1, pageSize });

    const {filteredProducts, setFilteredProducts} = useContext(AppContext);

    useEffect(() => {
        const { filteredProducts: filtered } = filterProducts(
            searchValue,
            currentFilter,
            sort,
            pagination,
            products
        )
        setFilteredProducts(filtered)
    }, [searchValue, sort, pagination, products, currentFilter, setFilteredProducts])

    const handleSortChange = (e) => {
        setSort(e.target.value)
    }

    const handlePaginationChange = (newPage) => {
        if (newPage !== 0 && newPage <= Math.ceil(products.length / pagination.pageSize)){
            setPagination((prev) => ({ ...prev, page: newPage }))
        }
    }

    return (
        <>
            <div className="container">
                <div className="shop">
                    <Sidebar
                        setSearchValue = {setSearchValue}
                        currentFilter = {currentFilter}
                        setCurrentFilter = {setCurrentFilter}
                    />
                    
                    <div className="products-wrapper">
                        <div className="sort-and-count">
                            <div className="product-count">
                                There are{" "}
                                <span className="bold" id="products-count">
                                    {filteredProducts.length}
                                </span>{" "}
                                products in this category
                            </div>

                            <Sort
                                sort = {sort}
                                handleSortChange = {handleSortChange}
                            />
                        </div>

                        <div className="products">
                            {getDataProduct(filteredProducts)}
                        </div>

                        <Pagination
                            pagination={pagination}
                            handlePaginationChange={handlePaginationChange}
                            totalItems={products.length}
                        />
                    </div>
                </div>
            </div>
            <NewsLetter/>
        </>
    );
};
