'use client'
import React from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { User } from 'next-auth'
import { Button } from './ui/button'

const Navbar = () => {
  const { data: session } = useSession()
  const user: User = session?.user as User

  return (
    <nav className='p-4 md:p-6 shadow-md'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <a className="text-xl font-bold mb-4 md:mb-0" href="#">Ninox</a>

        {
          session ? (
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <span className='text-sm md:text-base'>
                Welcome, {user?.username || user?.email}
              </span>
              <Button className="w-full md:w-auto" onClick={() => signOut()}>
                Logout
              </Button>
            </div>
          ) : (
            <Link href='/sign-in'>
              <Button className='w-full md:w-auto'>Login</Button>
            </Link>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
