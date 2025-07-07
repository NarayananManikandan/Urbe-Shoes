import '../css/about.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import logo from "../images/logo.png"
import img1 from "../images/aboutimghero.png"
import facebookline from "../images/mingcute_facebook-line.png"
import instagram from "../images/mdi_instagram.png"
import twiter from "../images/line-md_twitter.png"

export const About = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <div>
      <section class='herocolor'>
        <header class="navbar">
          <div class="logo">
            <img src={logo} alt=" Urbé Shoes" />
          </div>
          <nav>
            <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? "✖" : "☰"}
            </div>
            <ul className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Products">Product</Link></li>
              <li><Link to="/Cart" className="cart-btn">Cart 🛒</Link></li>
            </ul>
          </nav>
        </header>

        <section class="hero">
          <div class="hero-text">
            <h1>About Us<br /><span>Urbé Shoes</span></h1>
            <div class="buttons">
              <a href="/Products" class="btn-filled">Shop Now</a>
            </div>
          </div>
          <div class="hero-image">
            <img src={img1} alt="Sneaker" />
          </div>
        </section>
      </section>
      <div className="about-container">
        {/* Story Section */}
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Urbé Shoes was born out of a vision to create sneakers that reflect individuality,
            passion, and bold creativity. What started as a small design idea in Chennai has
            grown into a brand that celebrates art, comfort, and culture in every step.
          </p>
        </section>

        {/* Our Values */}
        <section className="about-section">
          <h2>Our Core Values</h2>
          <ul className="about-list">
            <li><strong>Innovation:</strong> We challenge the norm to bring you designs that are unique.</li>
            <li><strong>Comfort:</strong> Sneakers should feel as good as they look — all-day wear, guaranteed.</li>
            <li><strong>Sustainability:</strong> We’re committed to reducing our footprint through eco-materials.</li>
            <li><strong>Community:</strong> We’re not just a brand — we’re a culture built by people like you.</li>
          </ul>
        </section>

        {/* Highlights */}
        <section className="about-section">
          <h2>Why Choose Urbé?</h2>
          <p>
            Whether you're walking into a meeting, a party, or just out for a stroll, Urbé helps
            you do it with confidence. Every pair we release is carefully designed with high-quality
            materials, ergonomic comfort, and standout aesthetics.
          </p>
        </section>

        {/* Testimonials */}
        <section className="about-section testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <p>"I've never worn anything like this before — stylish, comfortable, and truly unique!"</p>
            <span>– Aarya N., Bangalore</span>
          </div>
          <div className="testimonial">
            <p>"The designs are just 🔥. Urbé is my go-to brand now!"</p>
            <span>– Rahul M., Mumbai</span>
          </div>
        </section>

        {/* Final CTA */}
        <section className="about-section">
          <h2>Join the Revolution</h2>
          <p>
            Become part of a growing movement of sneaker lovers who crave originality. Follow us,
            share your look with #UrbéStyle, and inspire the streets.
          </p>
        </section>
      </div>
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
