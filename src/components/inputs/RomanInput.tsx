import React, { useEffect, useState } from 'react'

const validationInput = (roman: string) => {
  return roman.toString().match(/(^[IiVvXxLlCcDdMm]*)+$/) != null
}

interface IRomanInput {
  defaultValue?: string
  name: string
  disable?: boolean
  setValue: any
  error?: boolean
}

const RomanInput: React.FC<IRomanInput> = ({ defaultValue, name, disable, setValue, error }) => {
  const [defaultRoman, setDefaultRoman] = useState<string>()

  useEffect(() => {
    setDefaultRoman(defaultValue?.toUpperCase() || '')
  }, [defaultValue])

  const onValueChange = (value: string) => {
    const formatValue = value.toUpperCase()

    if (validationInput(formatValue) || value === '') {
      setValue(formatValue)
      setDefaultRoman(formatValue)
    }
  }

  const handleClick = (event: any) => {
    event.preventDefault()
    if (defaultRoman === '') {
      setDefaultRoman('')
      setValue('')
    }
  }

  const handleBlur = (event: any) => {
    event.preventDefault()
    if (!defaultRoman) {
      setValue('')
      setDefaultRoman('')
    }
  }

  return (
    <div className="mt-1 text-2xl relative rounded-md shadow-sm">
      <input
        disabled={disable}
        type="text"
        id={`roman-input-${name}`}
        aria-label={`roman-input-${name}`}
        data-cy={`roman-input-${name}`}
        value={defaultRoman || ''}
        onBlur={handleBlur}
        onClick={handleClick}
        onChange={(event) => onValueChange(event.target.value)}
        className={`shadow appearance-none border rounded py-6 px-16 text-2xl text-gray-700 leading-tight focus:outline-none form-input block w-full sm:leading-5 ${
          disable ? 'text-green-600' : 'text-black-800'
        } ${error ? 'text-red-500 focus:border-red-500 border-red-300' : 'focus:border-blue-400'}`}
        placeholder="IVXLCDM"
        aria-describedby="roman-data"
      />
    </div>
  )
}

export default RomanInput
