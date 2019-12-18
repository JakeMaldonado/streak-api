import React from 'react';
import { Menu, Icon } from 'antd';

export default class Navigation extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    })
  }

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="streaks">
          <Icon type="fire" theme="twoTone"/>
          Streaks
        </Menu.Item>
        <Menu.Item key="help">
          <Icon type="customer-service" theme="twoTone" />
          Help
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="tool" theme="twoTone"/>
          Settings
        </Menu.Item>
      </Menu>
    );
  }
}
