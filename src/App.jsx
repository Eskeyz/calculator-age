import React, { useState } from 'react'
import Form from './components/Form'
import Result from './components/Result'
import { differenceInYears, differenceInDays } from 'date-fns'
import { Footer } from './components/Footer'

const App = () => {

  const [age, setAge] = useState(null)

  const calculate = (date) => {
    const today = new Date()
    const birthDate = new Date(date)
    const currentYear = differenceInYears(today, birthDate)
    const currentDay = differenceInDays(today, birthDate)

    setAge({
      years : currentYear,
      days : currentDay
    })
  }

  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-xl text-center mt-[150px] lg:px-12'>
      <h1 className='text-4xl mb-10 font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl'>Berapa umur kamu sekarang ?</h1>
      <p className='text-lg mb-3 font-normal text-gray-300 lg:text-xl'>Masukin tanggal lahir kamu di bawah ini.</p>
      <Form calculate={calculate} />
      {age && <Result age={age} />}
      </div>
      <Footer />
    </section>
  )
}

export default App