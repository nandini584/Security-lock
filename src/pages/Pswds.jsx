import React from 'react'
import PswdCard from '../components/PswdCard'
const Pswds = ({ location }) => {
    const state= location.state;
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
    <div className='flex flex-row items-center bg-purple-800 justify-between border-4 border-purple-400 rounded-full w-1/2 px-16 py-4'>
    <h1 className='text-xl text-white font-bold'>{state.website}</h1> 
    <h1 className='text-xl text-white font-bold'>{state.password}</h1>
    </div>
    <PswdCard />
    </div>
  )
}

export default Pswds