import React, { Component } from 'react'
import StreakCard from './StreakCard'

export default class Streaks extends Component {
  state = {
    streaks: []
  }

  async componentDidMount() {
    let streaks = await this.getStreaks()

    return this.setState({
      streaks: streaks
    })
  }

  getStreaks = async () => {
    const rawResponse = await fetch(`http://localhost:3000/streaks/${this.props.userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    console.log(rawResponse)

    return await rawResponse.json()
  }

  renderSreaks = () => {
    return this.state.streaks.map(streak => {
      return <StreakCard { ...streak } />
    })
  }

  render() {
    return (
      <div style={streaksContainerStyles}>
        { this.renderSreaks() }
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
