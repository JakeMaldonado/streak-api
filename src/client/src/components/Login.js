import React from 'react'
import { Icon, Input, Button, Typography } from 'antd'

const { Title } = Typography;

export default class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div style={loginFormContainer}>
        <form style={loginFormStyles}>
          <Title level={4}>Login</Title>
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
      </div>
    );
  }
}

const loginFormStyles = {
  maxWidth: '450px',
  width: '75%',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}

const loginFormContainer = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
