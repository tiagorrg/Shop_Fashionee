import React from "react";
import "./style.css"

export const NewsLetter = () => {
    return (
        <div className="news-letter">
            <div className="container">
                <div className="news-letter-wrapper">
                    <div className="news-letter-items">
                        <img className="background-points" src="./background/square-points-5x5.svg" alt=""/>
                        <div className="info">
                            <div className="title">
                                Newsletter
                            </div>
                            <div className="description">
                                Be the first to hear about deals,  offers and upcoming collections.
                            </div>
                        </div>
                        <div className="input-and-button">
                            <input type="text" placeholder="Enter your email" className="newsletter-email"/>
                            <div className="button-wrapper">
                                <button className="button">Subscribe</button>
                                <div className="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}