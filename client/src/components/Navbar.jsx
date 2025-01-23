import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const {user, setShowLogin} = useContext(AppContext)

    const navigate = useNavigate();

  return (
    <div className='flex item-center justify-between py-4'>
        <div className='flex flex-row items-center space-x-2'>
          <Link to='/' className='flex items-center space-x-2'>
          <img src={assets.cameralogo} alt="" className='w-10 sm:32 lg-40'/>
          <p className='text-3xl font-semibold'>aiMagine</p>
          </Link>
        </div>
        <div>
            {user ? 
            <div className='flex items-center gap-2 sm:gap-3'>
              <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 
              transition-all duration-100'>
                <img className='w-5' src={assets.credit_star} alt="" />
                <p className='text-xs sm:text-sm font-medium text-gray-700'>Credits Left : 50</p>
              </button>
              <p className='text-gray-700 max-sm:hidden pl-4'>Hi, Divyanshu</p>
              <div className='relative group'>
                <img className='w-10 drop-shadow' src={assets.profile_icon} alt="" />
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                  <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                    <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                  </ul>
              
                </div>
              </div>
            </div>
            :
            <div className='flex items-center gap-2 sm:gap-5'>
                <p onClick={()=>navigate('/buy')}
                 className='cursor-pointer'>Pricing</p>
                <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-10 py-2 sm:py-2 text-sm rounded-full'>Login</button>
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar
