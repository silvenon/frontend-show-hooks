import React from 'react'
import Exercise from './index'
import delay from 'delay'
import { render, fireEvent, waitForElement } from '../../test/utils'

describe('Exercise', () => {
  test('function component (uses hooks)', () => {
    expect(Exercise).toBeInstanceOf(Function)
    expect(new Exercise()).not.toBeInstanceOf(React.Component)
  })

  test('typing in input fields', () => {
    const { getByTestId } = render(<Exercise />)
    const emailField = getByTestId('email')
    const passwordField = getByTestId('password')
    fireEvent.change(emailField, { target: { value: 'name@kiwi.com' } })
    fireEvent.change(passwordField, { target: { value: '123' } })
    expect(emailField).toHaveValue('name@kiwi.com')
    expect(passwordField).toHaveValue('123')
  })

  test('toggling terms of service', () => {
    const { getByTestId } = render(<Exercise />)
    const termsCheckbox = getByTestId('terms')
    const checked = termsCheckbox.checked
    fireEvent.click(termsCheckbox)

    expect(termsCheckbox.checked).not.toEqual(checked)
  })

  describe('submitting', () => {
    test('default', async () => {
      const { getByTestId, queryByTestId } = render(<Exercise />)
      const form = getByTestId('form')
      expect(queryByTestId('alert-success')).not.toBeInTheDocument()
      fireEvent.submit(form)
      const alert = await waitForElement(() => getByTestId('alert-success'))
      expect(alert).toBeInTheDocument()
      fireEvent.click(getByTestId('AlertCloseButton'))
      expect(alert).not.toBeInTheDocument()
    })

    test('after agreeing to the terms of service', async () => {
      const { getByTestId, queryByTestId } = render(<Exercise />)
      const termsCheckbox = getByTestId('terms')
      const form = getByTestId('form')
      expect(queryByTestId('alert-danger')).not.toBeInTheDocument()
      fireEvent.click(termsCheckbox)
      fireEvent.submit(form)
      const alert = await waitForElement(() => getByTestId('alert-danger'))
      expect(alert).toBeInTheDocument()
      fireEvent.click(getByTestId('AlertCloseButton'))
      expect(alert).not.toBeInTheDocument()
    })
  })

  test('add class to body upon agreeing to the terms of service', () => {
    const { getByTestId } = render(<Exercise />)
    const toggleSpy = jest.spyOn(document.body.classList, 'toggle')
    const termsCheckbox = getByTestId('terms')
    fireEvent.click(termsCheckbox)
    expect(toggleSpy).toHaveBeenCalledWith('danger', true)
    fireEvent.click(termsCheckbox)
    expect(toggleSpy).toHaveBeenCalledWith('danger', false)
    toggleSpy.mockRestore()
  })

  // this test will always pass because it has no assertions,
  // but failing to clear the timeout will print out a warning
  // eslint-disable-next-line jest/expect-expect
  test('clear submit timeout on unmounting', async () => {
    const { getByTestId, unmount } = render(<Exercise />)
    const form = getByTestId('form')
    fireEvent.submit(form)
    unmount()
    await delay(1000)
  })
})
