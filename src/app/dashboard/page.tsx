import { signout } from '@/lib/actions'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='h-screen bg-neutral-900 grid place-content-center text-5xl text-white font-bold'>
      Login successful
      <form action={signout} className='text-base text-center'><button>Sign out</button></form>
    </div>
  )
}
