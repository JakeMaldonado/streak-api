import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

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
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
      </Menu>
    );
  }
}
