import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/productSlice';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { TypeAnimation } from 'react-type-animation';



function NavBar() {
  const products = useSelector(state => state.cart.products)
  const [search , setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isModelOpen ,setIsModuleOpen] = useState(false)
  const [isLogin , setIsLogin] = useState(true)

  const handleSearch =(e)=>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  return (
    <nav className='bg-white shadow-md py-3'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 flex items-center justify-between'>

        {/* Logo */}
        <div className='text-xl font-bold'>
          <Link to="/" className='text-yellow-500 hover:text-yellow-600 transition-all'>
            Grab<span className='text-green-500'>Sy</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className='relative flex-1 mx-4 hidden md:block'>
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder='' // Removed static text to allow animation
              className='w-full border rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300'
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              <TypeAnimation
                sequence={[
                  'Search products...',
                  2000,
                  'Find your favorite items...',
                  2000,
                  'Discover amazing deals...',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                cursor={false} // Hide cursor effect inside the placeholder
              />
            </div>
            <IoSearch className='absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500 cursor-pointer' />
          </form>
        </div>


        {/* Icons & User Actions */}
        <div className='flex items-center space-x-6'>

          {/* Cart */}
          <Link to='/cart' className='relative text-gray-700 hover:text-red-500 transition-all'>
            <FaShoppingCart className='text-xl' />
            {products.length  > 0 && (
              <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                  {products.length }
              </span> 
            )}
            

          </Link>

          {/* Login/Register */}
          <Link onClick={()=>setIsModuleOpen(true)} className='hidden md:block text-gray-700 hover:text-red-500 transition-all'>
            Create Account
          </Link>

          {/* User Icon (For Mobile) */}
          <Link to='/profile' className='block md:hidden text-gray-700 hover:text-red-500 transition-all'>
            <FaUser  className='text-xl' />
          </Link>

        </div>
      </div>

      {/* Navigation Links */}
      <div className='flex items-center justify-center space-x-10 py-6 text-sm font-bold'>
        <Link to="/" className='hover:underline transition-all duration-300 transform hover:scale-105'>
          Home
        </Link>
        <Link to="/shop" className='hover:underline transition-all duration-300 transform hover:scale-105'>
          Shop
        </Link>
        <Link to="/contact" className='hover:underline transition-all duration-300 transform hover:scale-105'>
          Contact Us
        </Link>
        <Link to="/about" className='hover:underline transition-all duration-300 transform hover:scale-105'>
          About Us
        </Link>
      </div>
      <Modal isModalOpen={isModelOpen} setIsModalOpen={setIsModuleOpen}>
        {isLogin  ? <Login/> : <Register /> }
      </Modal>
    </nav>
  )
}

export default NavBar



