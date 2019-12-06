import React from 'react'
import { Icon, Input, Button, Typography } from 'antd'

const { Title } = Typography;

export default class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    this.postSubmit({
      username: e.target.username.value,
      password: e.target.password.value,
    })
  }

  postSubmit = async data => {
    const rawResponse = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(rawResponse)
  }

  render() {
    return (
      <div style={loginFormContainer}>
        <form style={loginFormStyles}>
          <Title level={4}>Login</Title>
          <Input
            name="username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
          <Input
            name="password"
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
