import React, { Component } from 'react'
import { DatePicker, Radio } from 'antd';

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
          <DatePicker placeholder="Select Month"/>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>Daily</Radio>
            <Radio value={2}>Weekly</Radio>
          </Radio.Group>
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
  maxWidth: '300px',
  height: '200px'
}

