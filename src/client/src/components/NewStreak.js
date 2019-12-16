import React, { Component } from 'react'
import { DatePicker, Radio, Typography, Input, Button } from 'antd';

const { Title, Text } = Typography;

export default class NewStreak extends Component {
  state = {
    value: 1,
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log('form submitted')

    this.props.addStreaks([{
      userId: this.props.userId,
      title: e.target.title.value,
      description: e.target.description.value,
      startDate: e.target.startDate.value,
      countBy: this.state.value === 1 ? 'day' : 'week',
    }])

    e.target.reset()

    return await this.postSubmit({
      userId: this.props.userId,
      title: e.target.title.value,
      description: e.target.description.value,
      startDate: e.target.startDate.value,
      countBy: this.state.value === 1 ? 'day' : 'week',
    })
  };

  postSubmit = async data => {
    const rawResponse = await fetch(`http://localhost:3000/streaks/${this.props.userId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(rawResponse)
  }

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div style={newStreakStylesContainer}>
        <form onSubmit={ this.handleSubmit } style={newStreakStyles}>
          <Title level={4}>Add new streak</Title>
          <Text>Streak title:</Text>
          <Input name='title' placeholder="Streak title"/>
          <br />
          <Text>Streak description:</Text>
          <Input name='description' placeholder="Streak description"/>
          <br />
          <Text>Start date:</Text>
          <DatePicker name='startDate' placeholder="Select start date"/>
          <br />
          <Text>Count streak by:</Text>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>Day</Radio>
            <Radio value={2}>Week</Radio>
          </Radio.Group>
          <br />
          <Button htmlType="submit" type="primary" block>
            Add streak
          </Button>
        </form>
      </div>
    );
  }
}

const newStreakStylesContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '3rem',
}

const newStreakStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  width: '75%',
  height: '450px'
}
