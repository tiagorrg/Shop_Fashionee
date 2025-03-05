import { Product } from "./components/product/Product";
import { filterBySearchValue, filterProductsByFilterInfo } from "../../constants";

export const getDataProduct = (products) => {
    if (products.length === 0) return null;
    return products.map((product) => <Product product={product} key={product.id} />);
};

export const filterProducts = (searchValue, filter, sort, pagination, products) => {
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

export const sortProducts = (products, sort) => {
    if (sort === "ASC") {
        return products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "DESC") {
        return products.sort((a, b) => b.name.localeCompare(a.name));
    }
    return products;
};

export const paginateProducts = (products, pagination) => {
    const { page, pageSize } = pagination;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = products.slice(startIndex, endIndex);
    return {
        paginatedProducts,
        productsCount: products.length,
    };
};
