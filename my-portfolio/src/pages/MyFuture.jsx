import React from 'react';

export default function MyFuture() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Мій розвиток</h1>

      {/* --- ДОДАНО ЗОБРАЖЕННЯ --- */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img 
          src="/image_0.png" // Посилання з кореня public/
          alt="Кіт Майстер Чіф" 
          style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} 
        />
      </div>

      <div className="card" style={{ borderLeft: '4px solid #3b82f6', fontStyle: 'italic', marginTop: '15px' }}>
        "Код, який ти пишеш сьогодні, створює твоє завтра."
      </div>

      <h2 style={{ marginTop: '25px', marginBottom: '15px' }}>3 кроки в майбутнє</h2>
      <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
        <li>Успішно завершити розробку та захистити курсовий проєкт "АРМ фахівця з нерухомості".</li>
        <li>Поглибити знання з алгоритмів та структур даних для оптимізації застосунків.</li>
        <li>Опанувати просунутий React та знайти роботу на позиції Junior Front-end / Full-stack Developer.</li>
      </ol>

      <h2 style={{ marginTop: '25px', marginBottom: '10px' }}>Робота мрії 💼</h2>
      <p style={{ lineHeight: '1.6' }}>
        Створювати складні, але зручні для користувача системи. Працювати в команді, де цінують 
        чисту архітектуру коду, ефективну взаємодію з базами даних та сучасні підходи до розробки інтерфейсів.
      </p>

      {/* --- ДОДАНО РОЗДІЛ ПРОЄКТІВ З GITHUB --- */}
      <h2 style={{ marginTop: '25px', marginBottom: '15px' }}>Мої проєкти на GitHub (⭐)</h2>
      <p>Ось кілька моїх робіт, які ти можеш переглянути на GitHub:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
        
        <div className="card">
          <h3 style={{ color: '#e34c26' }}>HTML + CSS</h3>
          <p>Базова верстка та стилізація.</p>
          {/* ЗАМІНІТЬ ЗАПОВНЮВАЧІ НА ВАШІ РЕАЛЬНІ НАЗВИ РЕПОЗИТОРІЇВ */}
          <a href="https://github.com/ImmortallSoul/YOUR-HTML-CSS-REPO" target="_blank" rel="noreferrer">Проєкт 1: Ваша Назва</a><br/>
          <a href="https://github.com/ImmortallSoul/ANOTHER-HTML-CSS-REPO" target="_blank" rel="noreferrer">Проєкт 2: Інша Назва</a>
        </div>

        <div className="card">
          <h3 style={{ color: '#f7df1e' }}>JavaScript / C++</h3>
          <p>Логіка та алгоритми.</p>
          <a href="https://github.com/ImmortallSoul/YOUR-JS-REPO" target="_blank" rel="noreferrer">Проєкт 1: Ваша Назва</a><br/>
          <a href="https://github.com/ImmortallSoul/ANOTHER-JS-REPO" target="_blank" rel="noreferrer">Проєкт 2: Інша Назва</a>
        </div>

        <div className="card">
          <h3 style={{ color: '#61dafb' }}>React</h3>
          <p>SPA-застосунки.</p>
          {/* Я ВИКОРИСТОВУЮ 'mini-portfolio' ЯК ОДИН ПРИКЛАД */}
          <a href="https://github.com/ImmortallSoul/mini-portfolio" target="_blank" rel="noreferrer">Проєкт 1: Це міні-портфоліо</a><br/>
          <a href="https://github.com/ImmortallSoul/YOUR-REACT-REPO" target="_blank" rel="noreferrer">Проєкт 2: Ваш Інший Проєкт</a>
        </div>

      </div>
    </div>
  );
}