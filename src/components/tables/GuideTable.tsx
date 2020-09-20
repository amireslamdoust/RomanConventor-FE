import React from 'react'
import useConverter from '../../hooks/useConverter'
const GuideTable = () => {
  const { data } = useConverter()
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Number Value
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Roman Numeral
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((d) => d.breakpoint)
                  .map((row, rowIdx) => {
                    return (
                      <tr key={rowIdx} className={rowIdx % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                          {row.number}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                          {row.roman}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GuideTable
