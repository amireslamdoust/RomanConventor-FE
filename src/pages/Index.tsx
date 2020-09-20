import React, { useEffect, useState } from 'react'
import NumericInput from '../components/inputs/NumericInput'
import GuideTable from '../components/tables/GuideTable'
import RomanInput from '../components/inputs/RomanInput'
import useConverter from '../hooks/useConverter'

const Index = () => {
  const [error, setError] = useState(false)
  const [number, setNumber] = useState('')
  const [roman, setRoman] = useState('')
  const { decimalToRoman, romanToDecimal } = useConverter()

  useEffect(() => {
    if (parseInt(number.replace(/,/g, '')) > 3999) {
      setError(true)
    } else {
      setError(false)
    }
  }, [number])

  useEffect(() => {
    setRoman(decimalToRoman(parseInt(number.replace(/,/g, ''))))
  }, [number, error, decimalToRoman])

  useEffect(() => {
    setNumber(romanToDecimal(roman).toString())
  }, [roman, error, romanToDecimal])

  return (
    <>
      <div>
        <div className="my-10">
          <GuideTable />
        </div>
        <div className="flex flex-wrap">
          <div className="sm:w-1/2 sm:pr-5 w-full">
            <p>Numeric Input</p>
            <NumericInput name="number" setValue={setNumber} defaultValue={number} error={error} />
          </div>
          <div className="sm:w-1/2 sm:pl-5 w-full">
            <p>Roman Input</p>
            <RomanInput name="roman" setValue={setRoman} defaultValue={roman} error={error} />
          </div>
        </div>
        {error && <div className="text-sx text-red-500">Max number input is 3999</div>}
      </div>
    </>
  )
}
export default Index
