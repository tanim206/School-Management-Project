import React from 'react'

const DashbpardHeading = ({title, subtitle}) => {
  return (
    <div className='space-y-1 mb-10 '>
        <h1 className='text-3xl font-semibold'>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default DashbpardHeading