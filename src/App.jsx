import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  const [loading, setLoading] = useState(true) // 1. Add loading state

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
    setLoading(false) // 2. Set loading to false after check
  },[])

  

  const handleLogin = (email,password)=>{
    if(email == 'abcd@gmail.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee=userData.find((e)=>email==e.email && password==e.password)

      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
      }
    }
    else{
      alert("Invalid cradentials")
    }
  }
// 3. Show nothing or a spinner while loading
  if (loading) return null // or return <div>Loading...</div>

  return (
    <>
      {!user ?<Login handleLogin={handleLogin}/>:''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App