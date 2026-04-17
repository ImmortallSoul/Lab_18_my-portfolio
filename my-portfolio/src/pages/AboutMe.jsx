import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <h1>Про мене</h1>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
        Привіт! Я Роман Коновал, розробник-початківець та студент спеціальності "Комп'ютерні науки" (група КН-2). 
        Маю стійкий інтерес до бекенд-розробки та алгоритмів: впевнено пишу логіку на C++ та проєктую бази даних 
        із використанням SQL (включно зі специфікою MS Access). Серед моїх поточних великих завдань — розробка курсового 
        проєкту «Автоматизоване робоче місце фахівця з нерухомості» та реалізація складних математичних моделей 
        (машини Тюрінга, алгоритми Маркова). Паралельно активно опановую сучасний фронтенд за допомогою React та Tailwind CSS, 
        щоб створювати повноцінні й зручні користувацькі інтерфейси.
      </p>

      <h2 style={{ marginTop: '25px', marginBottom: '15px' }}>Мої проєкти</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        
        {/* Категорія 1: HTML + CSS */}
        <div className="card">
          <h3 style={{ color: '#e34c26' }}>HTML + CSS</h3>
          <p>Базова верстка та стилізація інтерфейсів.</p>
          <a href="https://github.com/ImmortallSoul/Tra-ta-ta" target="_blank" rel="noreferrer">
            Проєкт 1: Сайт замовлння таксі
          </a><br/>
          <a href="https://github.com/ImmortallSoul/html-css-landing" target="_blank" rel="noreferrer">
            Проєкт 2: Адаптивний лендінг
          </a>
        </div>

        {/* Категорія 2: JavaScript (та основні мови) */}
        <div className="card">
          <h3 style={{ color: '#f7df1e' }}>JavaScript / C</h3>
          <p>Логіка, дискретна математика та скрипти.</p>
          <a href="https://github.com/ImmortallSoul/Practice_Tasks" target="_blank" rel="noreferrer">
            Проєкт 1: Базова С
          </a><br/>
          <a href="https://github.com/ImmortallSoul/js-DOM1" target="_blank" rel="noreferrer">
            Проєкт 2: Взаємодія з HTML через JS
          </a>
        </div>

        {/* Категорія 3: React */}
        <div className="card">
          <h3 style={{ color: '#61dafb' }}>React</h3>
          <p>SPA-застосунки та сучасний фронтенд.</p>
          <a href="https://github.com/ImmortallSoul/Lab_18_my-portfolio" target="_blank" rel="noreferrer">
            Проєкт 1: Це міні-портфоліо
          </a><br/>
          <a href="https://github.com/ImmortallSoul/Lab_17_gallery" target="_blank" rel="noreferrer">
            Проєкт 2: Галерея з API
          </a>
        </div>

      </div>
    </div>
  );
}