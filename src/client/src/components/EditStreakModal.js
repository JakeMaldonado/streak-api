import React from 'react'
import { Modal } from 'antd'
import moment from 'moment'

import { DatePicker, Radio, Typography, Input } from 'antd'

const { Title, Text } = Typography

export default class EditStreakModal extends React.Component {
  state = {
    value: 1 + this.props.countBy === 'day'
  }

  modalForm = React.createRef();

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleOk = () => {
    const form = this.modalForm.current

    console.log(form)
    console.log(this.props)

    const data = {
      streakId: this.props.streakId,
      updates: {
        title: form.title.value,
        description: form.description.value,
        startDate: form.startDate.value,
        countBy: this.state.value === 1 ? 'day' : 'week'
      }
    }

    this.props.updateStreak(data)
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
        <form onSubmit={ this.handleOk } style={editStreakStyles} ref={this.modalForm}>
          <Title level={4}>Edit streak</Title>
          <Text>Streak title:</Text>
          <Input name='title' placeholder="Streak title" defaultValue={this.props.title}/>
          <br />
          <Text>Streak description:</Text>
          <Input name='description' placeholder="Streak description" defaultValue={this.props.description}/>
          <br />
          <Text>Start date:</Text>
          <DatePicker name='startDate' placeholder="Select start date" defaultValue={moment(this.props.startDate)}/>
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
