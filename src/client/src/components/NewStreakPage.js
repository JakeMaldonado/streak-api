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

  showAlert = (message, type) => {
    this.setState({
      alerted: {
        show: true,
        message,
        type
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
    }, 5000)
  }

  render() {
    return (
      <div>
        { !this.props.userId && <Redirect to="/login" /> }
        <Navigation />
        { this.state.alerted &&  <Alert message={this.state.message} type={this.state.type} /> }
        <NewStreak userId={this.props.userId} addStreaks={this.addStreaks} />
        <Streaks userId={this.props.userId} addStreaks={this.addStreaks} streaks={this.state.streaks} />
      </div>
    )
  }
}
