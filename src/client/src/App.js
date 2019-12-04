import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewStreakPage from './components/NewStreakPage'
import Login from './components/Login'

import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route path='/streaks' exact render={() => <NewStreakPage />} />
          <Route path='/login' exact render={() => <Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
