import React  from 'react'
import { useAuth } from '../context/authContext'
import AdminSidebar from '../components/Dashboard/AdminSidebar'
import Navbar from '../components/Dashboard/Navbar'
import AdminSummary from '../components/Dashboard/AdminSummary'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
    const {user } = useAuth()
    
    return ( 
    <div className='flex'>
        {/* <div className='min-h-screen w-full flex bg-cover bg-center bg-no-repeat' 
      style={{backgroundImage : `url('/Blur.jpg')` }}></div> */}
        <AdminSidebar />
        
        <div className='flex-1 ml-64 bg-gray-100 pt-16 bg-transparent'>
             
                <Navbar className="fixed top-0 left-64 w-[calc(100%-16rem)] z-50" />
             <Outlet />
        </div>
    </div>
    )
      }

export default AdminDashboard