import React from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactChild[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white antialiased lg:min-h-screen font-sans overflow-auto">
      <Header />
      <div className="relative container mx-auto bg-white sm:px-6">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
