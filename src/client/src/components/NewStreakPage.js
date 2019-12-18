import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Alert } from 'antd'

import Navigation from './Navigation'
import NewStreak from './NewStreak'
import Streaks from './Streaks'

export default class NewStreakPage extends Component {
  state = {
    streaks: [],
    alerted: {
      show: false,
      message: '',
      type: ''
    }
  }

  addStreaks = (newStreaks) => this.setState({ streaks: this.state.streaks.concat(newStreaks) })

  removeStreakById = (streakId) => this.setState({
    streaks: this.state.Streaks.filter(streak => streak.streakId !== streakId)
  })

  showAlert = (message, type) => {
    this.setState({
      alerted: {
        show: true,
        message: message,
        type: type
      }
    })

    setTimeout(() => {
      this.setState({
        alerted: {
          show: false,
          message: '',
          type: ''
        }
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        { !this.props.userId && <Redirect to="/login" /> }
        <Navigation />
        { this.state.alerted.show && <Alert style={alertStyles} message={this.state.alerted.message} type={this.state.alerted.type} showIcon/> }
        <NewStreak userId={this.props.userId} addStreaks={this.addStreaks} showAlert={this.showAlert} />
        <Streaks userId={this.props.userId} addStreaks={this.addStreaks} streaks={this.state.streaks} removeStreakById={this.removeStreakById} />
      </div>
    )
  }
}

const alertStyles = {
  position: 'absolute',
  width: '100%',
  marginTop: '0.9rem',
  marginRight: '1rem',
  marginLeft: '1rem',
}
