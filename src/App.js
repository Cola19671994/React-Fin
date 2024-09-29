import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Получаем текущий год (императивный стиль: здесь мы явно указываем, как получить текущее значение)
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        {/* Декларативный стиль: мы описываем, ЧТО должно отображаться на странице */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Декларативный стиль: просто указываем, что должно быть отображено — текущий год */}
        <p>Current year: {currentYear}</p>
      </header>
    </div>
  );
}

export default App;
