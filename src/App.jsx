import React from 'react';
import './styles/live_charts.css';
import AnimeCard from './components/AnimeCard';
import animeList from './data/animeList';

function App() {
  return (
    <section className="card-layout">
      {animeList.map((anime, index) => (
        <AnimeCard key={index} anime={anime} />
      ))}
    </section>
  );
}

export default App;
