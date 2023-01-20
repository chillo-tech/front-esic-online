import React from 'react'

function Header({training}: any) {
  return (
    <>
    {
      (training) ? (
        <header className='bg-app-blue py-2 md:py-4'>
      
        </header>
      ): null
    }
    </>
  )
}

export default Header
