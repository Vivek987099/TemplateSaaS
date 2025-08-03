import React from 'react'

function NoBgButton({title}) {
  return (
    <>
      <button className='noBgBtn hover:text-[#4a6cf7]'>{title}</button>
    </>   
  )
}

export default NoBgButton
