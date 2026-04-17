import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ toggleTheme, currentTheme }) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '2px solid #3b82f6' }}>
      <h2>Роман Коновал | КН-2</h2>
      <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/about">Про мене</Link>
        <Link to="/my-city">Моє місто</Link>
        <Link to="/my-future">Мій розвиток</Link>
        <button className="btn-theme" onClick={toggleTheme}>
          {currentTheme === 'light' ? '🌙 Темна' : '☀️ Світла'}
        </button>
      </nav>
    </header>
  );
}