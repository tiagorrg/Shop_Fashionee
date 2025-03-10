import React from 'react';

export const Categories = ({ selectedCategory, setTempCategory }) => {
    const handleCategoryClick = (e) => {
        const category = e.target.dataset.category
        setTempCategory(category)
    };

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">
                Categories
            </div>
            <div className="sidebar-content">
                <ul className="custom-list">
                    <li
                        className={`js-category ${selectedCategory === 'All' ? 'active' : ''}`}
                        data-category="All"
                        onClick={handleCategoryClick}
                    >
                        All
                    </li>
                    <li
                        className={`js-category ${selectedCategory === 'Men' ? 'active' : ''}`}
                        data-category="Men"
                        onClick={handleCategoryClick}
                    >
                        Men
                    </li>
                    <li
                        className={`js-category ${selectedCategory === 'Women' ? 'active' : ''}`}
                        data-category="Women"
                        onClick={handleCategoryClick}
                    >
                        Women
                    </li>
                    <li
                        className={`js-category ${selectedCategory === 'Accessories' ? 'active' : ''}`}
                        data-category="Accessories"
                        onClick={handleCategoryClick}
                    >
                        Accessories
                    </li>
                    <li
                        className={`js-category ${selectedCategory === 'New Arrivals' ? 'active' : ''}`}
                        data-category="New Arrivals"
                        onClick={handleCategoryClick}
                    >
                        New Arrivals
                    </li>
                </ul>
            </div>
        </div>
    );
};