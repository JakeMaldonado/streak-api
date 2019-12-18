import React from 'react'
import { Modal } from 'antd'

import { DatePicker, Radio, Typography, Input, Button } from 'antd'

const { Title, Text } = Typography

export default class EditStreakModal extends React.Component {
  state = {

  }

  handleOk = () => {
    this.props.editConfirmed()
    this.props.toggleEditModal()
  };

  handleCancel = () => {
    this.props.toggleEditModal()
  };

  render() {
    return (
        <Modal
          title="Edit streak"
          visible={this.props.showEditModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <form onSubmit={ this.handleSubmit } style={editStreakStyles}>
            <Title level={4}>Edit streak</Title>
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
          </form>
        </Modal>
    );
  }
}

const editStreakStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}
