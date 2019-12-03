import React from 'react';
import { Menu, Icon } from 'antd';

export default class Navigation extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
        <Menu.Item key="app2">
          <Icon type="appstore" />
          Navigation Three
        </Menu.Item>
      </Menu>
    );
  }
}
