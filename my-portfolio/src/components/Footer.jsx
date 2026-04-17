import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #ddd', marginTop: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '24px', marginBottom: '10px' }}>
        {/* ОНОВЛЕНО ПОСИЛАННЯ */}
        <a href="https://github.com/ImmortallSoul" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
      <p>© 2026 Всі права захищено. Створено з React.</p>
    </footer>
  );
}