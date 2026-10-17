import React from 'react';
import './card.css';

const Card = (details) => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img 
          src={details.link} 
          alt={details.name} 
        />
      </div>
      
      <div className="profile-content">
        <div className="profile-name-container">
          <h2 className="profile-name">{details.name}</h2>
          <svg className="profile-verified-badge" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#1ECB4F"/>
          </svg>
        </div>
        
        <p className="profile-headline">{details.role}</p>
        
        <div className="profile-footer">
          <div className="profile-stats">
            <div className="profile-stat-item">
              <svg className="profile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span>{details.followers}</span>
            </div>
            <div className="profile-stat-item">
              <svg className="profile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <span>{details.images}</span>
            </div>
          </div>
          
          <button className="profile-follow-btn">Follow +</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
