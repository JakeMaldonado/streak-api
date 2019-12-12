import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewStreakPage from './components/NewStreakPage'
import Login from './components/Login'

import 'antd/dist/antd.css'

class App extends React.Component {
  state = {
    userId: null,
    username: null
  }

  updateUserState(username, userId) {
    this.setState({
      userId,
      username
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch >
            <Route path='/'exact render={() => <NewStreakPage  userId={this.state.userId} />} />
            <Route path='/login' exact render={() => <Login updateUserState={this.updateUserState} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
