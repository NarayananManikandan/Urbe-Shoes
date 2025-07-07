import React, { useState } from 'react';
import logo from "../../images/logo.png"
import img1 from '../../images/Slides and Sandals/img1.jpg';
import img2 from '../../images/Slides and Sandals/img2.jpg';
import img3 from '../../images/Slides and Sandals/img3.jpg';
import img4 from '../../images/Slides and Sandals/img4.jpg';
import img5 from '../../images/Slides and Sandals/img5.jpg';
import img6 from '../../images/Slides and Sandals/img6.jpg';
import img7 from '../../images/Slides and Sandals/img7.jpg';
import img8 from '../../images/Slides and Sandals/img8.jpg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import facebookline from "../../images/mingcute_facebook-line.png"
import instagram from "../../images/mdi_instagram.png"
import twiter from "../../images/line-md_twitter.png"



export const SlidesandSandals = ({ cartdetail, setcartdetails }) => {
  const [productdetails] = useState([
    {
      id: 1, name: "Soluxe", productimage: img1, newprice: 3599.00, oldprice: "₹4099.00", count: 1,
    },
    {
      id: 2, name: "Zlidez", productimage: img2, newprice: 5999.00, oldprice: "₹7099.00", count: 1,
    },
    {
      id: 3, name: "Street Pulse", productimage: img3, newprice: 5799.00, oldprice: "₹6299.00", count: 1,
    },
    {
      id: 4, name: "Swaylo", productimage: img4, newprice: 4699.00, oldprice: "₹5599.00", count: 1,
    },
    {
      id: 5, name: "Flotra", productimage: img5, newprice: 3999.00, oldprice: "₹4599.00", count: 1,
    },
    {
      id: 6, name: "VibraStep", productimage: img6, newprice: 5199.00, oldprice: "₹8999.00", count: 1,
    },
    {
      id: 7, name: "SnugSand", productimage: img7, newprice: 5699.00, oldprice: "₹7299.00", count: 1,
    },
    {
      id: 8, name: "Walkora", productimage: img8, newprice: 4699.00, oldprice: "₹5299.00", count: 1,
    },
  ]);

  const handleAddToCart = (product) => {
    setcartdetails([...cartdetail, product]);
    try {
      // Your logic to add to cart
      setcartdetails([...cartdetail, product]);

      toast.success("Added to cart successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Failed to add to cart!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div>
      {/* Header */}
      <section className='herocolor1'>
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
      </section>

      {/* Product Title */}
      <div>
        <h1 className="cattxt">— Sneakers Collection —</h1>
      </div>

      {/* Product Grid */}
      <section>
        <div className="product-grid">
          {productdetails.map((product) => (
            <div className="product-card1" key={product.id}>
              <span className="badge">New</span>
              <img src={product.productimage} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <div className="price-section">
                  <span className="new-price">₹{product.newprice}</span>
                  <span className="old-price">{product.oldprice}</span>
                </div>
                <button className="buy-btn" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
  );

}
