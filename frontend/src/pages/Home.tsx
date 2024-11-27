import React from 'react'
import { Link } from 'react-router-dom'

const Home:React.FC = () => {
  return (
    <div className="">
    <div className="">
      <h1 className="">W</h1>
      <p className="">Explore the world and create travel logs.</p>

      <div className="space-y-4">
        <Link
          to="/login"
          className=""
        >
          Sign In
        </Link>
        <Link
          to="/createAccount"
          className=""
        >
          Sign Up
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Home