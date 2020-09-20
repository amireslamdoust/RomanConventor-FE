import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import NumericInput from './NumericInput'

describe('BaseNumberInput', () => {
  const setValueMock = jest.fn()

  const setup = () => {
    const utils = render(
      <NumericInput setValue={setValueMock} defaultValue={'5,023'} name="test" />,
    )
    const inputText = utils.getByLabelText('numeric-input-test')
    return {
      inputText,
      ...utils,
    }
  }

  test('render test on loading test ', () => {
    const { inputText } = setup()
    expect(inputText.value).toBe('5,023')
  })

  test('render test on changing test - normal test without comma ', () => {
    const { inputText } = setup()
    fireEvent.change(inputText, { target: { value: '23' } })
    expect(inputText.value).toBe('23')
  })

  test('render numeric on changing , normal test with comma ', () => {
    const { inputText } = setup()
    fireEvent.change(inputText, { target: { value: '2,300' } })
    expect(inputText.value).toBe('2,300')

    fireEvent.change(inputText, { target: { value: '60,080' } })
    expect(inputText.value).toBe('60,080')

    fireEvent.change(inputText, { target: { value: '123456' } })
    expect(inputText.value).toBe('123,456')

    fireEvent.change(inputText, { target: { value: '123456789' } })
    expect(inputText.value).toBe('123,456,789')
  })
})
