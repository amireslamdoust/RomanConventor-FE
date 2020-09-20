const data = [
  { roman: 'I', number: 1, breakpoint: true },
  { roman: 'IV', number: 4, breakpoint: false },
  { roman: 'V', number: 5, breakpoint: true },
  { roman: 'IX', number: 9, breakpoint: false },
  { roman: 'X', number: 10, breakpoint: true },
  { roman: 'XL', number: 40, breakpoint: false },
  { roman: 'L', number: 50, breakpoint: true },
  { roman: 'XC', number: 90, breakpoint: false },
  { roman: 'C', number: 100, breakpoint: true },
  { roman: 'CD', number: 400, breakpoint: false },
  { roman: 'D', number: 500, breakpoint: true },
  { roman: 'CM', number: 900, breakpoint: false },
  { roman: 'M', number: 1000, breakpoint: true },
]

interface IData {
  roman: string
  number: number
  breakpoint: boolean
}

const decimalToRoman = (decimal: number) => {
  let input = decimal
  const romanNumbers: string[] = []
  const numbers: number[] = []
  Object.values(data).forEach((d: IData) => {
    romanNumbers.push(d.roman)
    numbers.push(d.number)
  })
  const output: string[] = []
  let counter = data.length - 1
  while (input > 0) {
    let dividedBy = parseInt((input / numbers[counter]).toString())
    input %= numbers[counter]
    while (dividedBy--) {
      output.push(romanNumbers[counter])
    }
    counter--
  }
  return output.join('')
}

const findValueOfRoman = (r: string) => {
  const res = Object.values(data).find((d) => d.roman === r)
  if (res) {
    return res.number
  }
  return -1
}

const romanToDecimal = (roman: string) => {
  let output = 0
  for (let counter = 0; counter < roman.length; counter++) {
    let firstSymbolValue = findValueOfRoman(roman[counter])

    if (counter + 1 < roman.length) {
      let secondSymbolValue = findValueOfRoman(roman[counter + 1])

      if (firstSymbolValue >= secondSymbolValue) {
        output = output + firstSymbolValue
      } else {
        output = output + secondSymbolValue - firstSymbolValue
        counter++
      }
    } else {
      output = output + firstSymbolValue
      counter++
    }
  }
  return output
}

const useConverter = () => {
  return {
    decimalToRoman,
    romanToDecimal,
    data,
  }
}

export default useConverter
