import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
<<<<<<< HEAD
      path: '/',
=======
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
<<<<<<< HEAD
=======

>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
<<<<<<< HEAD
=======

>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
<<<<<<< HEAD
=======
          placeholder="Sample Password:rahul@2021"
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
<<<<<<< HEAD
=======

>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
<<<<<<< HEAD
=======
          placeholder="Sample Username:rahul"
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
<<<<<<< HEAD
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
=======

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
<<<<<<< HEAD
          className="login-website-logo-mobile-image"
=======
          className="login-website-logo-mobile-img"
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
<<<<<<< HEAD
          className="login-image"
=======
          className="login-img"
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
<<<<<<< HEAD
            className="login-website-logo-desktop-image"
=======
            className="login-website-logo-desktop-img"
>>>>>>> b5a4bc66ffbd8da40f285ab30462e31c5a57cc55
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
