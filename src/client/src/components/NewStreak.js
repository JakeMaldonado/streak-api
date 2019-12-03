import React, { Component } from 'react'
import { DatePicker, Radio, Typography, Input, Button, Form } from 'antd';

const { Title, Text } = Typography;

export default class NewStreak extends Component {
  state = {
    value: 1,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        debugger
        console.log('Received values of form: ', values);
      }
    });
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
          <Form onSubmit={this.handleSubmit}>
            <Title level={4}>Add new streak</Title>
            <Text>Streak title:</Text>
            <Form.Item>
              <Input placeholder="Streak title"/>
            </Form.Item>
            <br/>
            <Text>Start date:</Text>
            <Form.Item>
            </Form.Item>
            <DatePicker placeholder="Select start date"/>
            <br/>
            <Text>Count streak by:</Text>
            <Form.Item>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>Day</Radio>
                <Radio value={2}>Week</Radio>
              </Radio.Group>
            </Form.Item>
            <br/>
            <Button type="primary" block>
              Add streak
            </Button>
          </Form>
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

