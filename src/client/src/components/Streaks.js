import React, { Component } from 'react'
import StreakCard from './StreakCard'

export default class Streaks extends Component {
  render() {
    return (
      <div style={streaksContainerStyles}>
        <StreakCard />
        <StreakCard />
        <StreakCard />
        <StreakCard />
        <StreakCard />
        <StreakCard />
        <StreakCard />
      </div>
    )
  }
}

const streaksContainerStyles = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center'
}
