import React, { Component } from 'react'

import Navigation from './Navigation'
import NewStreak from './NewStreak'
import Streaks from './Streaks'

export default class NewStreakPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <NewStreak userId="1" />
        <Streaks userId="1" />
      </div>
    )
  }
}
