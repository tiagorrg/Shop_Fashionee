import React from 'react';

export const Categories = () => {
    
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">
                Categories
            </div>
            <div className="sidebar-content">
                <ul className="custom-list">
                    <li className="js-category active" data-category="All">All</li>
                    <li className="js-category" data-category="Men">Men</li>
                    <li className="js-category" data-category="Women">Women</li>
                    <li className="js-category" data-category="Accessories">Accessories</li>
                    <li className="js-category" data-category="New Arrivals">New Arrivals</li>
                </ul>
            </div>
        </div>
    );
}