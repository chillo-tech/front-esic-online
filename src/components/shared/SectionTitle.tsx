import React from 'react'

function SectionTitle( {text, underline = true}: {underline?: boolean, text: string}) {
  return (
    <h2 className="flex flex-col items-center justify-center md:mb-10">
      <span className='px-10 py-3 text-center font-bold text-3xl md:text-6xl'>
        {text}
      </span>
      { underline ? (<span className='border-b-2 border-app-blue px-10 w-64 mt-2'/>) : null }
    </h2>
  )
}

export default SectionTitle