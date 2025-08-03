import React from 'react'
import Header from '../General/Header'
import CreteTask from '../General/CreateTask'
import AllTask from '../General/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header changeUser={props.changeUser}/>
        <CreteTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard