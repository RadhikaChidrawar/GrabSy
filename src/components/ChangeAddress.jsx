import React from 'react'

function ChangeAddress() {
  return (
    <div>
      <input type="text" placeholder='enter address' />
      <div className='flex justify-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'>Cancle</button>
        <button className='bg-blue-500 text-white py-2 px-4 rounded'>Save Adress</button>
      </div>
    </div>
  )
}

export default ChangeAddress
