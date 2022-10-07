import React, { Component } from 'react'
import Input from '../components/Input'
import { login } from '../api/apiCalls'

class LoginPage extends Component {


  state = {
    username: null,
    password: null,
  }
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  onClickLogin = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const creds = {
      username,
      password
    }
    login(creds)
  }

  render() {
    return (
      <div className='container'>

        <form>
          <h1 className='text-center'>Login</h1>
          <Input name="username" label="Username" onChange={this.onChange} />
          <Input name="password" label="Password" type="password" onChange={this.onChange} />
          <div className="text-center">
            <button className="btn btn-primary  mt-2" onClick={this.onClickLogin}>Login</button>
          </div>
        </form>
      </div>
    )
  }
}
export default LoginPage;
