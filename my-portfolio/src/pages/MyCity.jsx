import React, { useState, useEffect } from 'react';
import { getWeather } from '../api/weatherApi';

export default function MyCity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Координати: Яготин
    getWeather(50.28, 31.78)
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Помилка API:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Моє місто: Яготин, Україна</h1>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
        Яготин — затишне місто в Київській області на березі річки Супій. Воно відоме своєю історією, 
        прекрасними парками та картинною галереєю.
      </p>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Поточна погода (API)</h3>
        {loading ? (
          <p>Завантаження даних про погоду...</p>
        ) : weather ? (
          <ul style={{ listStyleType: 'none', marginTop: '10px', lineHeight: '1.8' }}>
            <li>🌡 <strong>Температура:</strong> {weather.temperature}°C</li>
            <li>💨 <strong>Швидкість вітру:</strong> {weather.windspeed} км/год</li>
            <li>🧭 <strong>Координати:</strong> 50.28° пн. ш., 31.78° сх. д.</li>
          </ul>
        ) : (
          <p style={{ color: 'red' }}>Не вдалося завантажити дані.</p>
        )}
      </div>
    </div>
  );
}