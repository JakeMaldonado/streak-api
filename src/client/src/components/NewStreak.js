import React, { Component } from 'react'
import { DatePicker, Radio, Typography, Input, Button } from 'antd';

const { Title, Text } = Typography;

export default class App extends Component {
  state = {
    value: 1,
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div style={newStreakStylesContainer}>
        <div style={newStreakStyles}>
          <Title level={4}>Add new streak</Title>
          <Text>Streak title:</Text>
          <Input placeholder="Streak title"/>
          <br />
          <Text>Start date:</Text>
          <DatePicker placeholder="Select start date"/>
          <br />
          <Text>Count streak by:</Text>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>Day</Radio>
            <Radio value={2}>Week</Radio>
          </Radio.Group>
          <br />
          <Button type="primary" block>
            Add streak
          </Button>
        </div>
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
  maxWidth: '300px',
  height: '200px'
}

