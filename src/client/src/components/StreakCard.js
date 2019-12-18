import React, { Component } from 'react'
import { Card, Statistic, Typography, Button } from 'antd'
import moment from 'moment'

import DeleteStreakModal from './DeleteStreakModal'
import EditStreakModal from './EditStreakModal'

const { Text } = Typography;

export default class StreakCard extends Component {
  state = {
    showDeleteModal: false,
    showEditModal: false,
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

  toggleDeleteModal = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    })
  }

  toggleEditModal = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    })
  }

  deleteConfirmed = async () => {
    const rawResponse = await fetch(`http://localhost:3000/streaks/${this.props.userId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        streakId: this.props.streakId
      })
    })
    console.log(rawResponse)

    this.props.removeStreakById(this.props.streakId)

    // show alert here for success deleting streak
  }

  updateStreak = async (data) => {
    const rawResponse = await fetch(`http://localhost:3000/streaks/${this.props.userId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(rawResponse)

    // show alert here for success editing the streak
  }

  render() {
    return (
      <Card title={ this.props.title } style={{ width: 300, marginBottom: '50px' }}>
        <DeleteStreakModal showDeleteModal={this.state.showDeleteModal} deleteConfirmed={this.deleteConfirmed} toggleDeleteModal={this.toggleDeleteModal} />
        <EditStreakModal showEditModal={this.state.showEditModal} updateStreak={this.updateStreak} toggleEditModal={this.toggleEditModal} {...this.props} />
        <Statistic title={ this.statsTitle() } value={ this.streakTime() } />
        <Text>{ this.props.description }</Text>
        <br/>
        <br/>
        <Text>Streak started on { moment(this.props.startDate).format('DD-MM-YYYY') }</Text>
        <br/>
        <Button style={buttonStyles} onClick={this.toggleEditModal} type="primary" block>
          Edit Streak
        </Button>
        <Button style={buttonStyles} onClick={this.toggleDeleteModal} type="danger" block>
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
