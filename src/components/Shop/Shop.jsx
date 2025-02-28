import React, { useState, useEffect } from "react";
import { Product } from "./components/product/Product";
import { Sidebar } from "./components/sidebar/Sidebar";
import PaginationArrowRight from "./icons/arrow-right.svg";
import PaginationArrowLeft from "./icons/arrow-left.svg";
import { FilterProductsContext } from "../../context";
import { oldFilter, currentFilter, filterBySearchValue, filterProductsByFilterInfo, pageSize } from "../../constants";
import "./Shop.css";

const getDataProduct = (products) => {
    if (JSON.stringify(oldFilter) === JSON.stringify(currentFilter)) {
        return products.map((product) => {
            return <Product product={product} key={product.id} />;
        });
    }
};

const filterProducts = (searchValue, filter, sort, pagination, products) => {
    let filteredProducts = [...products];

    if (searchValue) {
        filteredProducts = filterBySearchValue(filteredProducts, searchValue);
    }

    filteredProducts = filterProductsByFilterInfo(filteredProducts, filter);

    if (sort) {
        sortProducts(filteredProducts, sort);
    }

    const { paginatedProducts, productsCount } = paginateProducts(filteredProducts, pagination);

    return {
        filteredProducts: paginatedProducts,
        productsCount,
    };
};

const sortProducts = (products, sort) => {
    if (sort === "ASC") {
        return products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "DESC") {
        return products.sort((a, b) => b.name.localeCompare(a.name));
    }
    return products;
};

const paginateProducts = (products, pagination) => {
    const { page, pageSize } = pagination;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = products.slice(startIndex, endIndex);
    return {
        paginatedProducts,
        productsCount: products.length,
    };
};

export const Shop = ({ data }) => {
    const products = data.products;
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchValue, setSearchValue] = useState("");
    const [sort, setSort] = useState("");
    const [pagination, setPagination] = useState({ page: 1, pageSize: pageSize });

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
        setSort(e.target.value);
    };

    const handlePaginationChange = (newPage) => {
        setPagination((prev) => ({ ...prev, page: newPage }));
    };

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
                            <div className="sort">
                                <select
                                    name=""
                                    id="sort"
                                    className="input"
                                    value={sort}
                                    onChange={handleSortChange}
                                >
                                    <option value="">Relevance</option>
                                    <option value="ASC">ASC</option>
                                    <option value="DESC">DESC</option>
                                </select>
                            </div>
                        </div>
                        <div className="products js-products">
                            {getDataProduct(filteredProducts)}
                        </div>
                        <div className="pagination" id="pagination">
                            <div
                                className="button-left"
                                id="left-arrow-button"
                                onClick={() =>
                                    handlePaginationChange(pagination.page - 1)
                                }
                                disabled={pagination.page === 1}
                            >
                                <img src={PaginationArrowLeft} alt="arrow left" />
                            </div>
                            <div className="pages js-pages">
                                {[...Array(Math.ceil(products.length / pagination.pageSize))].map(
                                    (_, index) => (
                                        <div
                                            key={index}
                                            className={`page js-page ${
                                                pagination.page === index + 1 ? "active" : ""
                                            }`}
                                            onClick={() => handlePaginationChange(index + 1)}
                                        >
                                            {index + 1}
                                        </div>
                                    )
                                )}
                            </div>
                            <div
                                className="button-right"
                                id="right-arrow-button"
                                onClick={() =>
                                    handlePaginationChange(pagination.page + 1)
                                }
                                disabled={
                                    pagination.page ===
                                    Math.ceil(products.length / pagination.pageSize)
                                }
                            >
                                <img src={PaginationArrowRight} alt="arrow right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FilterProductsContext.Provider>
    );
};
