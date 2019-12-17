import React, { Component } from 'react'
import { Card, Statistic, Typography, Button } from 'antd'
import moment from 'moment'

import DeleteStreakModal from './DeleteStreakModal'

const { Text } = Typography;

export default class StreakCard extends Component {
  state = {
    showModal: false
  }

  streakTime = () => {
    const now = moment(new Date())
    const duration = moment.duration(now.diff(this.props.startDate))
    const divideBy = this.props.countBy === 'day' ? 24 : 168

    return Math.floor(duration.asHours() / divideBy)
  }

  statsTitle = () => {
    return this.props.countBy === 'day' ? 'Days in a row' : 'Weeks in a row'
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  deleteConfirmed = async () => {
    // make this the on click for the confirm delete modal
    const rawResponse = await fetch(`http://localhost:3000/streaks/${this.props.userId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        streakId: this.props.streakId
      })
    });

    // show alert here for success deleting streak
  }

  editStreak = () => {
    // show modal then send form data with updateStreak
  }

  updateStreak = async () => {
    const data = {}

    const rawResponse = await fetch(`http://localhost:3000/streaks/${this.props.userId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(rawResponse)

    // show alert here for success editing the streak
  }

  render() {
    return (
      <Card title={ this.props.title } style={{ width: 300, marginBottom: '50px' }}>
        <DeleteStreakModal showModal={this.state.showModal} deleteConfirmed={this.deleteConfirmed} toggleModal={this.toggleModal} />
        <Statistic title={ this.statsTitle() } value={ this.streakTime() } />
        <Text>{ this.props.description }</Text>
        <br/>
        <br/>
        <Text>Streak started on { moment(this.props.startDate).format('DD-MM-YYYY') }</Text>
        <br/>
        <Button style={buttonStyles} onClick={ this.editStreak } type="primary" block>
          Edit Streak
        </Button>
        <Button style={buttonStyles} onClick={ this.toggleModal } type="danger" block>
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
