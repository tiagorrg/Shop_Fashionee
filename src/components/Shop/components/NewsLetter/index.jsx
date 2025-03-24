import React from "react";
import "./style.css"

export const NewsLetter = () => {
    return (
        <div class="news-letter">
            <div class="container">
                <div class="news-letter-wrapper">
                    <div class="news-letter-items">
                        <img class="background-points" src="./background/square-points-5x5.svg" alt=""/>
                        <div class="info">
                            <div class="title">
                                Newsletter
                            </div>
                            <div class="description">
                                Be the first to hear about deals,  offers and upcoming collections.
                            </div>
                        </div>
                        <div class="input-and-button">
                            <input type="text" placeholder="Enter your email" class="newsletter-email"/>
                            <div class="button-wrapper">
                                <button class="button">Subscribe</button>
                                <div class="vertical-line"></div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}