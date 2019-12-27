import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Input, Button, Typography } from 'antd'

const { Title } = Typography

export default class NormalLoginForm extends React.Component {
  handleSubmit = async e => {
    e.preventDefault()

    await this.postSubmit({
      username: e.target.username.value,
      password: e.target.password.value,
    })

    e.target.username.value = ''
    e.target.password.value = ''
  }

  postSubmit = async data => {
    const rawResponse = await fetch('http://localhost:3000/new_user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    const responseObj = await rawResponse.json()

    this.props.updateUserState(responseObj.username, responseObj.userId)

    localStorage.setItem('username', responseObj.username)
    localStorage.setItem('userId', responseObj.userId)

    this.props.history.push('/')
  }

  render() {
    return (
      <div style={loginFormContainer}>
        <form style={loginFormStyles} onSubmit={this.handleSubmit}>
          <Title level={4}>Create Account</Title>
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
          <Link to="/login">
            Have an account? Login here.
          </Link>
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
