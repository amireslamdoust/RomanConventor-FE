import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <p className="mt-8 text-gray-500 text-base leading-6">CSS Powered by @tailwind</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h4>
                <ul className="mt-4">
                  <li className="mt-4">
                    <Link to="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h4>
                <ul className="mt-4">
                  <li>
                    <Link to="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Company
                </h4>
                <ul className="mt-4">
                  <li className="mt-4">
                    <Link to="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4">
                  <li className="mt-4">
                    <Link to="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base leading-6 text-gray-400 xl:text-center">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
