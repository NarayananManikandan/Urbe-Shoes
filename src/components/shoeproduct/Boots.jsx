import React, { useState } from 'react';
import logo from "../../images/logo.png"
import img1 from '../../images/Boots/img1.jpg';
import img2 from '../../images/Boots/img2.jpg';
import img3 from '../../images/Boots/img3.jpg';
import img4 from '../../images/Boots/img4.jpg';
import img5 from '../../images/Boots/img5.jpg';
import img6 from '../../images/Boots/img6.jpg';
import img7 from '../../images/Boots/img7.jpg';
import img8 from '../../images/Boots/img8.jpg';
import img9 from '../../images/Boots/img9.jpg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import facebookline from "../../images/mingcute_facebook-line.png"
import instagram from "../../images/mdi_instagram.png"
import twiter from "../../images/line-md_twitter.png"

export const Boots = ({ cartdetail, setcartdetails }) => {
  const [productdetails] = useState([
    {
      id: 1, name: "Fjordstep", productimage: img1, newprice: 4499.00, oldprice: "₹5099.00", count: 1,
    },
    {
      id: 2, name: "Thundrik", productimage: img2, newprice: 3299.00, oldprice: "₹4099.00", count: 1,
    },
    {
      id: 3, name: "Boulderiq", productimage: img3, newprice: 5299.00, oldprice: "₹6099.00", count: 1,
    },
    {
      id: 4, name: "Klavox", productimage: img4, newprice: 4499.00, oldprice: "₹5299.00", count: 1,
    },
    {
      id: 5, name: "Ironlynx", productimage: img5, newprice: 3699.00, oldprice: "₹4099.00", count: 1,
    },
    {
      id: 6, name: "Stormark", productimage: img6, newprice: 3299.00, oldprice: "₹4199.00", count: 1,
    },
    {
      id: 7, name: "Mudraxx", productimage: img7, newprice: 5299.00, oldprice: "₹6099.00", count: 1,
    },
    {
      id: 8, name: "Trekhavn", productimage: img8, newprice: 4899.00, oldprice: "₹5499.00", count: 1,
    },
    {
      id: 9, name: "Gravvik", productimage: img9, newprice: 5599.00, oldprice: "₹6099.00", count: 1,
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
        <h1 className="cattxt">— Boots Collection —</h1>
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
