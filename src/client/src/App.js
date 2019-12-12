import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import NewStreakPage from './components/NewStreakPage'
import Login from './components/Login'

import 'antd/dist/antd.css'

class App extends React.Component {
  state = {
    userId: null,
    username: null
  }

  updateUserState = (username, userId) => {
    this.setState({
      userId,
      username
    })
  }

  render() {
    return (
      <div className="App">
        <Switch >
          <Route path='/'exact render={(routeProps) => <NewStreakPage {...routeProps}  userId={this.state.userId} />} />
          <Route path='/login' exact render={(routeProps) => <Login {...routeProps} updateUserState={this.updateUserState} />} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
