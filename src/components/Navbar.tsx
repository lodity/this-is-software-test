import { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
  return (
    <nav className='p-4 bg-gray-800 text-white'>
      <Link to='/' className='mr-4'>
        Home
      </Link>
      <Link to='/saved-users'>Saved Users</Link>
    </nav>
  )
}

export default Navbar
