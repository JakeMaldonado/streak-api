import React, { Component } from 'react'
import { Card, Statistic, Typography, Button } from 'antd'
import moment from 'moment'

const { Text } = Typography;

export default class StreakCard extends Component {
  streakTime = () => {
    const now = moment(new Date())
    const duration = moment.duration(now.diff(this.props.startDate))
    const divideBy = this.props.countBy === 'day' ? 24 : 168

    return Math.floor(duration.asHours() / divideBy)
  }

  statsTitle = () => {
    return this.props.countBy === 'day' ? 'Days in a row' : 'Weeks in a row'
  }

  render() {
    return (
      <Card title={ this.props.title } style={{ width: 300, marginBottom: '50px' }}>
        <Statistic title={ this.statsTitle() } value={ this.streakTime() } />
        <Text>{ this.props.description }</Text>
        <br/>
        <br/>
        <Text>Streak started on { moment(this.props.startDate).format('DD-MM-YYYY') }</Text>
        <br/>
        <Button style={buttonStyles} type="primary" block>
          Edit Streak
        </Button>
        <Button style={buttonStyles} type="danger" block>
          Delete Streak
        </Button>
      </Card>
    )
  }
}

const buttonStyles = {
  marginBottom: '0.5rem',
  marginTop: '0.5rem'
}
