import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Navigation from './Navigation'
import NewStreak from './NewStreak'
import Streaks from './Streaks'

export default class NewStreakPage extends Component {
  render() {
    return (
      <div>
        { !this.props.userId && <Redirect to="/login" /> }
        <Navigation />
        <NewStreak userId={this.props.userId} />
        <Streaks userId={this.props.userId} />
      </div>
    )
  }
}
