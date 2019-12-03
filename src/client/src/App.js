import React from 'react';

import Navigation from './components/Navigation'
import NewStreak from './components/NewStreak'
import Streaks from './components/Streaks'

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <NewStreak />
      <Streaks />
    </div>
  );
}

export default App;
