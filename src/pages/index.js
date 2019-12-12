import React from 'react'
import {
  Stack,
  Heading,
  InputField,
  Checkbox,
  Button,
  Alert,
} from '@kiwicom/orbit-components'

class Exercise extends React.Component {
  state = {
    email: '',
    password: '',
    terms: false,
    isLoading: false,
    success: false,
    theFuck: false,
  }

  submittingId = null

  componentDidMount() {
    this.setBackgroundImage()
  }

  componentDidUpdate() {
    this.setBackgroundImage()
  }

  componentWillUnmount() {
    clearTimeout(this.submittingId)
  }

  setBackgroundImage = () => {
    document.body.classList.toggle('danger', this.state.terms)
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value,
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleTermsChange = () => {
    this.setState(state => ({
      ...state,
      terms: !state.terms,
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      success: false,
      theFuck: false,
      isLoading: true,
    })
    this.submittingId = setTimeout(() => {
      this.setState(state => ({
        ...state,
        isLoading: false,
        success: true,
        theFuck: state.terms,
      }))
    }, 1000)
  }

  handleAlertClose = () => {
    this.setState({
      success: false,
      theFuck: false,
    })
  }

  render() {
    const { email, password, terms, isLoading, success, theFuck } = this.state
    return (
      <form data-test="form" onSubmit={this.handleSubmit}>
        <Stack>
          <Heading type="title2">Sign Up</Heading>
          {success && !theFuck ? (
            <Alert
              dataTest="alert-success"
              type="success"
              closable
              onClose={this.handleAlertClose}
            >
              Success!
            </Alert>
          ) : null}
          {theFuck ? (
            <Alert
              dataTest="alert-danger"
              type="critical"
              closable
              onClose={this.handleAlertClose}
            >
              The fuck did you just agree to?! 😱
            </Alert>
          ) : null}
          <InputField
            dataTest="email"
            type="email"
            label="Email"
            value={email}
            onChange={this.handleEmailChange}
          />
          <InputField
            dataTest="password"
            type="password"
            label="Password"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <Checkbox
            dataTest="terms"
            label="I agree to sell my soul to the devil"
            checked={terms}
            onChange={this.handleTermsChange}
          />
          <Button submit loading={isLoading}>
            Sign Up
          </Button>
        </Stack>
      </form>
    )
  }
}

export default Exercise
