import React, { useEffect, useState } from 'react'

const validationInput = (numeric: string) => {
  return numeric.toString().match(/(^[0-9]{1,3}(?:[,][0-9]{1,3})*[,]?)+$/) != null
}

const formatter = (numeric: string) => {
  const regex = /(^[0-9][0-9,]*(([0-9]{1,2})?))+$/
  const checkNumericValidate = numeric.toString().match(regex) != null
  if (!checkNumericValidate) {
    return numeric
  }
  numeric = numeric.replace(/,/g, '')
  numeric = numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return numeric
}

interface INumericInput {
  defaultValue?: string
  name: string
  disable?: boolean
  setValue: any
  error?: boolean
}

const NumericInput: React.FC<INumericInput> = ({
  defaultValue,
  name,
  disable,
  setValue,
  error,
}) => {
  const [defaultNumeric, setDefaultNumeric] = useState<string>()

  useEffect(() => {
    setDefaultNumeric(formatter(defaultValue || ''))
  }, [defaultValue])

  const onValueChange = (value: string) => {
    const formatValue = formatter(value)

    if (validationInput(formatValue) || value === '') {
      setValue(formatValue)
      setDefaultNumeric(formatValue)
    }
  }

  const handleClick = (event: any) => {
    event.preventDefault()
    if (defaultNumeric === formatter('')) {
      setDefaultNumeric('')
      setValue('')
    }
  }

  const handleBlur = (event: any) => {
    event.preventDefault()
    if (!defaultNumeric) {
      const def = formatter('')
      setValue(def)
      setDefaultNumeric(def)
    }
  }

  return (
    <div className="mt-1 text-2xl relative rounded-md shadow-sm">
      <input
        disabled={disable}
        type="text"
        id={`numeric-input-${name}`}
        aria-label={`numeric-input-${name}`}
        data-cy={`numeric-input-${name}`}
        value={defaultNumeric || ''}
        onBlur={handleBlur}
        onClick={handleClick}
        onChange={(event) => onValueChange(event.target.value)}
        className={`shadow appearance-none border rounded py-6 px-16 text-2xl text-gray-700 leading-tight focus:outline-none form-input block w-full sm:leading-5 ${
          disable ? 'text-green-600' : 'text-black-800'
        } ${error ? 'text-red-500 focus:border-red-500 border-red-300' : 'focus:border-blue-400'}`}
        placeholder="0"
        aria-describedby="numeric-data"
      />
    </div>
  )
}

export default NumericInput
