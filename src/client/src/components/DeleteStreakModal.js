import React from 'react'
import { Modal } from 'antd'

export default class DeleteStreakModal extends React.Component {
  handleOk = () => {
    this.props.deleteConfirmed()
    this.props.toggleDeleteModal()
  };

  handleCancel = () => {
    this.props.toggleDeleteModal()
  };

  render() {
    return (
        <Modal
          title="Delete this streak?"
          visible={this.props.showDeleteModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Are you sure you want to delete this streak?</p>
          <p>This is not reversable!</p>
        </Modal>
    );
  }
}
