import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

export default class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </form>
    );
  }
}
