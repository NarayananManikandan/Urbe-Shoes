import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/Product.css'
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png"
import shoe1 from "../images/bestsellingproduct/shoe1.jpeg"
import shoe2 from "../images/bestsellingproduct/shoe2.jpeg"
import shoe3 from "../images/bestsellingproduct/shoe3.jpg"
import shoe4 from "../images/bestsellingproduct/shoe4.jpg"
import shoe5 from "../images/bestsellingproduct/shoe5.jpeg"
import shoe6 from "../images/bestsellingproduct/shoe6.jpeg"
import shoe7 from "../images/bestsellingproduct/shoe7.jpeg"
import shoe8 from "../images/bestsellingproduct/shoe8.jpeg"
import shoe9 from "../images/bestsellingproduct/shoe9.jpeg"
import facebookline from "../images/mingcute_facebook-line.png"
import instagram from "../images/mdi_instagram.png"
import twiter from "../images/line-md_twitter.png"



export const Products = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div>
            <section className='herocolor1'>
                <header class="navbar">
                    <div class="logo">
                        <img src={logo} alt=" Urbé Shoes" />
                    </div>
                    <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? "✖" : "☰"}
                    </div>
                    <nav className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Products">Product</Link></li>
                            <li><Link to="/Cart" className="cart-btn">Cart 🛒</Link></li>
                        </ul>
                    </nav>
                </header>
            </section>
            <div>
                <h1 class="cattxt">— Category Collection —</h1>
            </div>
            <section>
                <div class="product-grid">
                    {/* <!-- Product Card --> */}
                    <div class="card">
                        <span class="badge">New</span>
                        <img src= {shoe1} alt="Shoe" />
                        <h4>Sneakers</h4>
                        <p class="price">₹ 1899.00 <span class="old-price">₹ 2299.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/Sneakers")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe2} alt="Shoe" />
                        <h4>Slip Ons</h4>
                        <p class="price">₹ 1799.00 <span class="old-price">₹ 2399.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/SlipOns")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe3} alt="Shoe" />
                        <h4>Loafers and Oxfords</h4>
                        <p class="price">₹ 1499.00 <span class="old-price">₹ 2499.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/LoafersandOxfords")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>

                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe4} alt="Shoe" />
                        <h4>Slides and Sandals</h4>
                        <p class="price">₹ 2499.00 <span class="old-price">₹ 3799.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/SlidesandSandals")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe5} alt="Shoe" />
                        <h4>Flip Flops</h4>
                        <p class="price">₹ 999.00 <span class="old-price">₹ 1399.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/FlipFlops")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe6} alt="Shoe" />
                        <h4>Clogs</h4>
                        <p class="price">₹ 2699.00 <span class="old-price">₹ 3099.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/Clogs")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe7} alt="Shoe" />
                        <h4>Boots</h4>
                        <p class="price">₹ 4999.00 <span class="old-price">₹ 6099.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/Boots")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe8} alt="Shoe" />
                        <h4>Sports</h4>
                        <p class="price">₹ 2999.00 <span class="old-price">₹ 3399.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/Sports")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe9} alt="Shoe" />
                        <h4>Party</h4>
                        <p class="price">₹ 1799.00 <span class="old-price">₹ 2299.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/Party")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    {/* <!-- Repeat with other products -->
              <!-- You can duplicate the card block for all 6 items --> */}
                </div>
            </section>

            <footer class="footer">
                <div class="footer-top">
                    <img src={logo} alt="Urbe Shoes Logo" class="logo" />
                </div>

                <div class="footer-content">
                    <div class="footer-box">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">🏠 Home</a></li>
                            <li><a href="/About">📢 About Us</a></li>
                            <li><a href="/Products">👟 Product</a></li>
                            <li><a href="/Cart">🛒 Cart</a></li>
                            <li><a href="/Login">🔑 Login</a></li>
                        </ul>
                    </div>

                    <div class="footer-box">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>📞 +91 98765 43210</li>
                            <li>📧 urbe@shoes.com</li>
                            <li>📍 123 Street, Mumbai, India</li>
                        </ul>
                    </div>

                    <div class="footer-box">
                        <h3>Legal Links</h3>
                        <ul>
                            <li>📜 Privacy Policy</li>
                            <li>⚖️ Terms & Conditions</li>
                            <li>🚚 Shipping & Returns</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div class="footer-social">
                    <a href="#"><i class="fab fa-facebook-f"><img src={facebookline} alt="" /></i></a>
                    <a href="#"><i class="fab fa-instagram"><img src={instagram} alt="" /></i></a>
                    <a href="#"><i class="fab fa-twitter"><img src={twiter} alt="" /></i></a>
                </div>
                <p class="copyright">©2025 Urbe Shoes. All Rights Reserved</p>
            </footer>
        </div>
    )
}
