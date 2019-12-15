import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Navigation from './Navigation'
import NewStreak from './NewStreak'
import Streaks from './Streaks'

export default class NewStreakPage extends Component {
  state = {
    streaks: []
  }

  addStreaks = (newStreaks) => this.setState({ streaks: streaks.concat(newStreaks) })

  render() {
    return (
      <div>
        { !this.props.userId && <Redirect to="/login" /> }
        <Navigation />
        <NewStreak userId={this.props.userId} addStreaks={this.addStreaks} />
        <Streaks userId={this.props.userId} streaks={this.state.streaks} />
      </div>
    )
  }
}
