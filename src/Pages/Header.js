import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <div>

          <nav className='flex flex-row justify-end p-5 mx-10 my-auto max-w-screen-xxl'>
              <ul className='flex  justify-center items-center gap-8'>
                  <li className='text-lg hover:underline hover:decoration-4  '>
                      <Link to="/">Home</Link>
                  </li>
                  <li className='text-lg hover:underline hover:decoration-4  '>
                      <Link to="/predict">Flood Predict</Link>
                  </li>
              </ul>
          </nav>
      </div>
  )
}

export default Header