import React from 'react'

const Result = ({ age }) => {
  return (
    <h4 className='text-white text-xl font-bold underline underline-offset-4 mt-5'>Saat ini kamu berumur {age.years} tahun dan sudah hidup selama {age.days} hari. </h4>
  )
}

export default Result