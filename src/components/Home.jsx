import App from '../App';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import logo from "../images/logo.png"
import img1 from "../images/img1.png"
import freeimg from "../images/freeimg.png"
import img24 from "../images/24img.jpg"
import moneyimg from "../images/moneyimg.jpg"
import shoe1 from "../images/bestsellingproduct/shoe1.jpeg"
import shoe2 from "../images/bestsellingproduct/shoe2.jpeg"
import shoe3 from "../images/bestsellingproduct/shoe3.jpg"
import shoe4 from "../images/bestsellingproduct/shoe4.jpg"
import shoe5 from "../images/bestsellingproduct/shoe5.jpeg"
import shoe6 from "../images/bestsellingproduct/shoe6.jpeg"
import facebookline from "../images/mingcute_facebook-line.png"
import instagram from "../images/mdi_instagram.png"
import twiter from "../images/line-md_twitter.png"


export const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // 👉 You can add API call or validation here
        console.log("Subscribed email:", email);
        alert(`Thank you for subscribing, ${email}!`);
        setEmail(""); // Clear the input
    };
    return (
        <div>
            <section class='herocolor'>
                <header className="navbar">
                    <div className="logo">
                        <img src={logo} alt=" Urbé Shoes" />
                    </div>

                    <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? "✖" : "☰"}
                    </div>

                    <nav className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Products">Products</Link>
                            </li>
                            <li>
                                <Link to="/Cart" className="cart-btn">
                                    Cart 🛒
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section class="hero">
                    <div class="hero-text">
                        <h1>Step Into<br /><span> Your Style</span></h1>
                        <p>Discover uniquely crafted sneakers<br />built to elevate your fashion game.</p>
                        <h2>Start from<br /><span>RS. 7,000</span><span class="offertxt">19% OFF</span></h2>
                        <div class="buttons">
                            <Link to="/Products" class="btn-filled">
                                    Shop Now
                                </Link>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src={img1} alt="Sneaker" />
                    </div>
                </section>
            </section>


            <section className="features">
                <div className="feature-box">
                    <img src={freeimg} alt="Free Shipping" />
                    <h4>Free Shipping</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetu <br />
                        adipisicing elit sed
                    </p>
                </div>

                <div className="feature-box">
                    <img src={img24} alt="Free Shipping" />
                    <h4>Support 24/7</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetu <br />
                        adipisicing elit sed
                    </p>
                </div>

                <div className="feature-box">
                    <img src={moneyimg} alt="Money Return" />
                    <h4>Money Return</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetu <br />
                        adipisicing elit sed
                    </p>
                </div>
            </section>

            <section class="best-selling">
                <h2>— Best Selling —</h2>

                <div class="product-grid">
                    {/* <!-- Product Card --> */}
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe1} alt="Shoe" />
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
                        <p class="price">₹ 1399.00 <span class="old-price">₹ 1699.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/SlipOns")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe3} alt="Shoe" />
                        <h4>Loafers and Oxfords</h4>
                        <p class="price">₹ 1799.00 <span class="old-price">₹ 2299.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/LoafersandOxfords")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>

                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe4} alt="Shoe" />
                        <h4>Slides and Sandals</h4>
                        <p class="price">₹ 2499.00 <span class="old-price">₹ 3099.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/SlidesandSandals")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe5} alt="Shoe" />
                        <h4>Flip Flops</h4>
                        <p class="price">₹ 999.00 <span class="old-price">₹ 1299.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/FlipFlops")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    <div class="card">
                        <span class="badge">New</span>
                        <img src={shoe6} alt="Shoe" />
                        <h4>Clogs</h4>
                        <p class="price">₹ 2999.00 <span class="old-price">₹ 3399.00</span></p>
                        <div class="card-footer">
                            <button class="buy-btn" onClick={() => navigate("/Clogs")}>See More</button>
                            <span class="wishlist">♡</span>
                        </div>
                    </div>
                    {/* <!-- Repeat with other products -->
              <!-- You can duplicate the card block for all 6 items --> */}
                </div>
            </section>

            <div class="tabs">
                <button onClick={() => navigate("/products")}>Browse All Categories</button>
            </div>

            <section>
                <div class="container1">
                    <h1>Exciting Offers: You can’t miss</h1>
                    <div class="subheading">Bundle Offers</div>
                    <div class="carousel-wrapper">
                        <div class="arrow" onclick="scrollCarousel(-1)">&#9664;</div>
                        <div class="carousel" id="carousel">
                            <div class="card1">
                                <div class="new-tag">NEW</div>
                                <div class="discount">Extra 7% OFF</div>
                                <div class="details">
                                    Buy any 2 products, get Extra 7% off<br />
                                    <small>Automatic applied on checkout. No code required.</small>
                                    <div class="small">T&C Apply</div>
                                </div>
                            </div>
                            <div class="card1">
                                <div class="new-tag">NEW</div>
                                <div class="discount">Extra 10% OFF</div>
                                <div class="details">
                                    Buy any 3 products, get Extra 10% off<br />
                                    <small>Automatic applied on checkout. No code required.</small>
                                    <div class="small">T&C Apply</div>
                                </div>
                            </div>
                        </div>
                        <div class="arrow" onclick="scrollCarousel(1)">&#9654;</div>
                    </div>
                </div>
            </section>
            <section className="subscribe-section">
                <div className="subscribe-image">
                    <img src="../src/images/contactimg.png" alt="Chicken Delivery" />
                </div>

                <div className="subscribe-content">
                    <h2>
                        Step into Style with <span style={{ color: '#d42c2c' }}>Exclusive Shoe Deals</span>
                    </h2>
                    <p>
                        Join our mailing list for the latest arrivals, members-only discounts, and unbeatable offers on premium footwear!                    </p>

                    <form className="subscribe-form" onSubmit={handleSubscribe} navigate={"/Home"}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe Now</button>
                    </form>

                    <ul className="features1">
                        <li><span>✅</span> Exclusive Discounts on Latest Footwear</li>
                        <li><span>🛒</span> Early Access to New Collections & Sales</li>
                        <li><span>🚚</span> Free Shipping on Orders Above ₹999</li>
                        <li><span>🔥</span> Limited-Time Offers & Flash Sales</li>
                    </ul>
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
