import React, { Component } from 'react'
import { Card, Statistic, Typography } from 'antd'

const { Text } = Typography;

export default class StreakCard extends Component {
  state = {
    title: "Sample Title",
    description: "Sample description of the streak being tracked",
    track: "day",
    startTime: new Date()
  }

  streakTime = () => {
    
  }

  statsTitle = () => {
    return this.state.track === 'day' ? 'Days in a row' : 'Weeks in a row'
  }

  render() {
    return (
      <Card title={ this.state.title } style={{ width: 300 }}>
        <Statistic title={this.statsTitle()} value={ this.streakTime() } />
        <Text>{ this.state.description }</Text>
      </Card>
    )
  }
}
