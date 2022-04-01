import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (
  <div className="page">
    <MoviesList serverData={moviesFromServer} />

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);