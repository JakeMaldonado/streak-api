import { Modal, Button } from 'antd'

class App extends React.Component {
  handleOk = () => {
    this.props.deleteConfirmed()
  };

  handleCancel = () => {
    this.props.toggleModal()
  };

  render() {
    return (
        <Modal
          title="Basic Modal"
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

ReactDOM.render(<App />, mountNode);