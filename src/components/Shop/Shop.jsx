import React, { useState, useEffect } from "react";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Sort } from "./components/sort_products/Sort";
import { Pagination } from "./components/pagination/Pagination";
import { FilterProductsContext } from "../../context";
import { currentFilter, pageSize } from "../../constants";
import { getDataProduct, filterProducts } from "./utils";
import "./Shop.css";

export const Shop = ({ data }) => {
    const products = data.products;
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchValue, setSearchValue] = useState("");
    const [sort, setSort] = useState("");
    const [pagination, setPagination] = useState({ page: 1, pageSize });

    useEffect(() => {
        const { filteredProducts: filtered } = filterProducts(
            searchValue,
            currentFilter,
            sort,
            pagination,
            products
        );
        setFilteredProducts(filtered);
    }, [searchValue, sort, pagination, products]);

    const handleSortChange = (e) => {
        setSort(e.target.value)
    }

    const handlePaginationChange = (newPage) => {
        if (newPage !== 0 && newPage <= Math.ceil(products.length / pagination.pageSize)){
            setPagination((prev) => ({ ...prev, page: newPage }))
        }
    }

    return (
        <FilterProductsContext.Provider
            value={{
                filteredProducts,
                setFilteredProducts,
            }}
        >
            <div className="container">
                <div className="shop">
                    <Sidebar
                        filteredProducts={filteredProducts}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
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
                        <div className="products js-products">
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
        </FilterProductsContext.Provider>
    );
};
