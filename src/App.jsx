
import React from 'react';

// Import icons
import { GamepadIcon, ArrowRight, Send, Bell, Gamepad, Users } from "lucide-react";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#" className="navbar-logo">
            <GamepadIcon className="gamepad-icon text-primary-DEFAULT" />
            <span className="logo-text">Gamepals</span>
          </a>
          
          <div className="navbar-links">
            <a href="#" className="text-link">Blog</a>
            <a href="#" className="text-link">Posts</a>
          </div>
          
          <div className="navbar-actions">
            <a 
              href="https://t.me/your_channel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-channel btn-primary hidden md:flex items-center gap-2 animate-fade-in"
            >
              <Send className="w-4 h-4" />
              Channel
              <ArrowRight className="w-3 h-3" />
            </a>
            <a 
              href="https://t.me/your_bot_username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Open Bot
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section with game cover background */}
      <section className="hero">
        <div className="hero-background">
          {[
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ene.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co92du.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co7j43.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co8ok7.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co49wj.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co89n1.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co5r6t.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co2xlq.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co5cxf.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co84ii.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co6qlk.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co9f4v.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co7dfn.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co2l7z.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co4w4j.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co7u0c.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co48rz.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co8fu7.jpg",
            "https://images.igdb.com/igdb/image/upload/t_cover_big/co86ix.jpg"
          ].map((imageUrl, index) => (
            <div key={`game-cover-${index}`} className="game-cover">
              <img src={imageUrl} alt={`Game cover ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <div className="hero-content-wrapper">
          <div className="hero-badge">Find Gaming Friends</div>
          <h1 className="hero-title">Gaming Friends Always Nearby</h1>
          <h2 className="hero-subtitle">CS2, Dota 2, Fortnite, PUBG and other popular games. Find teammates for your favorite games right in Telegram!</h2>
          <p className="hero-description">
            Gamepals is a Telegram bot for finding gaming partners. Simply message the bot, create a post about looking for teammates, and receive notifications when someone wants to join your game!
          </p>
          <div className="hero-buttons">
            <a 
              href="https://t.me/your_bot_username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-lg btn-primary"
            >
              Open Bot in Telegram
            </a>
            <a 
              href="https://t.me/your_channel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-lg btn-secondary"
            >
              Gaming Channel
            </a>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-heading">
            <h2 className="features-title">Made for Gamers</h2>
            <p className="features-subtitle">Gamepals is a Telegram bot that helps you find perfect teammates for your favorite games</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Gamepad className="w-5 h-5" />
              </div>
              <h3 className="feature-title">Any Games</h3>
              <p className="feature-description">CS2, Dota 2, Fortnite, PUBG and many others. Find partners for any game</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="feature-title">Simple Telegram Bot</h3>
              <p className="feature-description">Create a post through the bot and receive notifications about new partners right in Telegram</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="feature-title">Active Community</h3>
              <p className="feature-description">Thousands of gamers have already found their perfect teammates through Gamepals in Telegram</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Bell className="w-5 h-5" />
              </div>
              <h3 className="feature-title">Smart Notifications</h3>
              <p className="feature-description">The bot monitors new responses and instantly notifies you about potential partners</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Games Section */}
      <section className="games">
        <div className="container">
          <div className="games-heading">
            <h2 className="games-title">Find Partners for Any Game</h2>
            <p className="games-subtitle">We support all popular multiplayer games</p>
          </div>
          
          <div className="games-grid">
            {['CS2', 'Dota 2', 'Fortnite', 'PUBG', 'Apex Legends', 'Valorant', 'League of Legends', 'Overwatch'].map((game) => (
              <div key={game} className="game-card">
                <div className="game-image" style={{backgroundImage: `url(https://placehold.co/400x225/333/fff?text=${game})`}}></div>
                <h3 className="game-title">{game}</h3>
                <p className="game-players">1000+ active players</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-heading">
            <h2 className="testimonials-title">User Testimonials</h2>
            <p className="testimonials-subtitle">Find out what people who already use our app are saying</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-content">Found a permanent team for MM in CS2 in just one day. Now we play together every evening!</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">A</div>
                <div>
                  <p className="testimonial-name">Alexander</p>
                  <p className="testimonial-game">CS2 player</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-content">Convenient for finding a team for ranked games. You can specify your rank and role to find suitable teammates.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">E</div>
                <div>
                  <p className="testimonial-name">Elena</p>
                  <p className="testimonial-game">Dota 2 player</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-content">No more playing with randoms. Within a few minutes I find partners of the right level for cooperative gameplay.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">D</div>
                <div>
                  <p className="testimonial-name">Dmitry</p>
                  <p className="testimonial-game">Fortnite player</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to find your Gamepals?</h2>
            <p className="cta-description">Join thousands of players who have already found friends for gaming together</p>
            
            <div className="cta-buttons">
              <a 
                href="https://t.me/your_bot_username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-lg btn-primary"
              >
                Find Partners
              </a>
              <a 
                href="https://t.me/your_support" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-lg btn-secondary"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <GamepadIcon className="w-5 h-5 text-white" />
              <span className="font-semibold">Gamepals</span>
            </div>
            
            <div className="footer-links">
              <div>
                <h3 className="footer-links-title">Legal</h3>
                <ul className="footer-links-list">
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="footer-links-title">Company</h3>
                <ul className="footer-links-list">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">© 2023 Gamepals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
