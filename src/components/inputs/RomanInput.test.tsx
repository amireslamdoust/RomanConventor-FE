import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import RomanInput from './RomanInput'

describe('BaseNumberInput', () => {
  const setValueMock = jest.fn()

  const setup = () => {
    const utils = render(<RomanInput setValue={setValueMock} defaultValue={'MCX'} name="test" />)
    const inputText = utils.getByLabelText('roman-input-test')
    return {
      inputText,
      ...utils,
    }
  }

  test('render test on loading test ', () => {
    const { inputText } = setup()
    expect(inputText.value).toBe('MCX')
  })

  test('render test on changing test - normal test without comma ', () => {
    const { inputText } = setup()
    fireEvent.change(inputText, { target: { value: 'mcx' } })
    expect(inputText.value).toBe('MCX')
  })
})
