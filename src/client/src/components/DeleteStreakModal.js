import React from 'react'
import { Modal } from 'antd'

export default class DeleteStreakModal extends React.Component {
  handleOk = () => {
    this.props.deleteConfirmed()
    this.props.toggleModal()
  };

  handleCancel = () => {
    this.props.toggleModal()
  };

  render() {
    return (
        <Modal
          title="Delete this streak?"
          visible={this.props.showModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Are you sure you want to delete this streak?</p>
          <p>This is not reversable!</p>
        </Modal>
    );
  }
}
