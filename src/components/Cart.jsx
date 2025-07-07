import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"
import facebookline from "../images/mingcute_facebook-line.png"
import instagram from "../images/mdi_instagram.png"
import twiter from "../images/line-md_twitter.png"


export const Cart = ({ cartdetail, setcartdetails }) => {
  const handleRemove = (id) => {
    const updatedCart = cartdetail.filter((item) => item.id !== id);
    setcartdetails(updatedCart);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleIncrease = (id) => {
    const updatedCart = cartdetail.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setcartdetails(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartdetail.map((item) =>
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    );
    setcartdetails(updatedCart);
  };

  const [price, setprice] = useState(0);

  useEffect(() => {
    const total = cartdetail.reduce((acc, item) => {
      const count = Number(item.count) || 0;
      const price = Number(item.newprice) || 0;
      return acc + count * price;
    }, 0);
    setprice(total);
  }, [cartdetail]);

  return (
    <div>
      <div></div>
      {/* Header Section */}
      <section className="herocolor1">
        <header className="navbar">
          <div className="logo">
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

      {/* Cart Content */}
      <div className="cart-container">
        <h1 className="cattxt">Your Cart</h1>
        {cartdetail.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="empty-cart-image"
            />
            <div>
              <h2>Your cart is empty.</h2>
              <h3>Start Shopping Now</h3>
              <div className="buttons1">
                <Link to="/Products" class="btn-filled1">
                  Shop Now
                </Link>              </div>
            </div>
          </div>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartdetail.map((product) => {
                  const count = Number(product.count) || 0;
                  const price = Number(product.newprice) || 0;
                  return (
                    <tr key={product.id}>
                      <td>
                        <img src={product.productimage} alt={product.name} style={{ width: '80px' }} />
                      </td>
                      <td>{product.name}</td>
                      <td>
                        <button className='cnt' onClick={() => handleIncrease(product.id)}>+</button>
                        ({count})
                        <button className='cnt' onClick={() => handleDecrease(product.id)} disabled={count <= 1}>-</button>
                      </td>
                      <td>₹{price * count}</td>
                      <td>
                        <button onClick={() => handleRemove(product.id)} className="buy-btn">Delete ❎</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* ✅ Total Price Calculation */}
            <h1>
              Total Price: ₹
              {cartdetail.reduce((total, item) => {
                const count = Number(item.count) || 0;
                const price = Number(item.newprice) || 0;
                return total + count * price;
              }, 0)}
            </h1>

            {/* ✅ Action Buttons */}
            <div className="butflex">
              <div className="buttons2">
                <a href="/Products" className="btn-filled2">Back to Shop</a>
              </div>
              <div className="buttons3">
                <a href="/Cart" className="btn-filled3">Checkout Now</a>
              </div>
            </div>
          </>
        )}

      </div>


      <section>
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
      </section>

    </div>
  );
};


