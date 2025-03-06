
import React from 'react';

// Import icons
import { GamepadIcon, ArrowRight, Send, CheckCircle, Users, Bell, Gamepad } from "lucide-react";

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
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="game-cover"></div>
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
          <h2 className="section-title">Made for Gamers</h2>
          <p className="section-subtitle">Gamepals is a Telegram bot that helps you find perfect teammates for your favorite games</p>
          
          <div className="features-grid">
            <div className="feature-card hover-scale">
              <div className="feature-icon">
                <Gamepad className="w-5 h-5" />
              </div>
              <h3 className="feature-title">Any Games</h3>
              <p className="feature-description">CS2, Dota 2, Fortnite, PUBG and many others. Find partners for any game</p>
            </div>
            
            <div className="feature-card hover-scale">
              <div className="feature-icon">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="feature-title">Simple Telegram Bot</h3>
              <p className="feature-description">Create a post through the bot and receive notifications about new partners right in Telegram</p>
            </div>
            
            <div className="feature-card hover-scale">
              <div className="feature-icon">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="feature-title">Active Community</h3>
              <p className="feature-description">Thousands of gamers have already found their perfect teammates through Gamepals in Telegram</p>
            </div>
            
            <div className="feature-card hover-scale">
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
          <h2 className="section-title">Find Partners for Any Game</h2>
          <p className="section-subtitle">We support all popular multiplayer games</p>
          
          <div className="games-grid">
            {['CS2', 'Dota 2', 'Fortnite', 'PUBG', 'Apex Legends', 'Valorant', 'League of Legends', 'Overwatch'].map((game) => (
              <div key={game} className="game-card">
                <img 
                  src={`https://placehold.co/400x225/333/fff?text=${game}`} 
                  alt={game} 
                  className="game-image" 
                />
                <div className="game-overlay">{game}</div>
                <div className="game-overlay-hover">Click to find teammates</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">User Testimonials</h2>
          <p className="section-subtitle">Find out what people who already use our app are saying</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card hover-scale">
              <p className="testimonial-content">Found a permanent team for MM in CS2 in just one day. Now we play together every evening!</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">A</div>
                <div className="testimonial-info">
                  <span className="testimonial-name">Alexander</span>
                  <span className="testimonial-role">CS2 player</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card hover-scale">
              <p className="testimonial-content">Convenient for finding a team for ranked games. You can specify your rank and role to find suitable teammates.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">E</div>
                <div className="testimonial-info">
                  <span className="testimonial-name">Elena</span>
                  <span className="testimonial-role">Dota 2 player</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card hover-scale">
              <p className="testimonial-content">No more playing with randoms. Within a few minutes I find partners of the right level for cooperative gameplay.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">D</div>
                <div className="testimonial-info">
                  <span className="testimonial-name">Dmitry</span>
                  <span className="testimonial-role">Fortnite player</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content animate-fade-up">
            <h2 className="section-title">Ready to find your Gamepals?</h2>
            <p className="section-subtitle">Join thousands of players who have already found friends for gaming together</p>
            
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
              <GamepadIcon className="w-5 h-5 text-primary-DEFAULT" />
              <span className="font-semibold">Gamepals</span>
            </div>
            
            <div className="footer-links">
              <a href="#" className="text-link">Terms</a>
              <a href="#" className="text-link">Privacy</a>
              <a href="#" className="text-link">Contact</a>
            </div>
            
            <div className="footer-copyright">
              © 2023 Gamepals. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
