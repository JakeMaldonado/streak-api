import React from 'react';

import Navigation from './components/Navigation'
import NewStreak from './components/NewStreak'

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <NewStreak />
    </div>
  );
}

export default App;
