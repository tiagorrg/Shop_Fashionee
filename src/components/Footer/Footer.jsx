import React from "react";
import "./style/footer.css"
import logoIcon from '../../icons/logo.svg';
import sendIcon from '../../icons/send.svg';
import payoneerIcon from '../../icons/payoneer.svg';
import masterCardIcon from '../../icons/master-card.svg';
import paypalIcon from '../../icons/paypal.svg';
import visaIcon from '../../icons/visa.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-info">
                    <div className="column column-1">
                        <div className="logo">
                            <img src={logoIcon} alt="Logo"/>
                        </div>
                        <div className="about-brand">
                            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
                        </div>
                        <div className="find-us">
                            <div className="find-us-text">Find us here:</div>
                            <div className="find-us-links">
                                <div className="find-us-link">
                                    <a href="https://yandex.ru">FB</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="https://yandex.ru">TW</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="https://yandex.ru">INS</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="https://yandex.ru">PT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column column-2">
                        <div className="about">About</div>
                        <ul className="custom-list">
                            <li className="item"><a href="https://yandex.ru">About us</a></li>
                            <li><a href="https://yandex.ru">Collections</a></li>
                            <li><a href="https://yandex.ru">Shop</a></li>
                            <li><a href="https://yandex.ru">Blog</a></li>
                            <li><a href="https://yandex.ru">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="column column-3">
                        <div className="about">Useful links</div>
                            <ul className="custom-list">
                                <li><a href="https://yandex.ru">Privacy Policy</a></li>
                                <li><a href="https://yandex.ru">Terms of use</a></li>
                                <li><a href="https://yandex.ru">Support</a></li>
                                <li><a href="https://yandex.ru">Shipping details</a></li>
                                <li><a href="https://yandex.ru">FAQs</a></li>
                            </ul>
                    </div>
                    <div className="column column-4">
                        <div className="about">Newsletter</div>
                        <div className="newsletter-text">Subscribe to be the first to hear about deals,  offers and upcoming collections.</div>
                        <div className="newsletter-form">
                            <form action="">
                                <label>
                                    <input type="text" placeholder="Enter your email" className="newsletter-email"/>
                                    <img src={sendIcon} alt="Send" className="send-icon"/>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div>
                        © All right reserved. Fashionee 2020
                    </div>
                    <div className="payment-methods-container">
                        <div>Payment methods:</div>
                        <div className="payment-methods">
                            <div className="paumant-method">
                                <img src={visaIcon} alt="visa"/>
                            </div>
                            <div className="paumant-method">
                                <img src={masterCardIcon} alt="master card"/>
                            </div>
                            <div className="paumant-method">
                                <img src={paypalIcon} alt="paypal"/>
                            </div>
                            <div className="paumant-method">
                                <img src={payoneerIcon} alt="payoneer"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="background-left-item"><img src="./background/square-points-5x5.svg" alt=""/></div>
            <div className="background-right-item"><img src="./background/square-points-10x10.svg" alt=""/></div>
        </footer>
    )
}