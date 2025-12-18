import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [error, setError] = useState(null)
    const {login} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const response = await axios.post("https://worksphere-backend.vercel.app/api/auth/login", {email, password});
         if(response.data.success){
          login(response.data.user)
          localStorage.setItem("token", response.data.token)
          if(response.data.user.role === "admin"){
            navigate('/admin-dashboard')
          } else {
            navigate("/employee-dashboard")
          }

        //alert("Successfull")
         }
        
      } catch(error) {
        if(error.response && !error.response.data.success){
          setError(error.response.data.error)
        } else {
          setError("Server Error")
        }
      }
    };

    return(
      <div className="min-h-screen w-full bg-center bg-cover bg-no-repeat flex items-center justify-center font-sans" 
      style={{backgroundImage : `url(${' ../waiting.jpg'})` }}>
        <div className=""></div>
        <div className="flex flex-col items-center h-screen justify-center space-y-6" >

        <h2 className=" font-pacific text-3xl text-cyan-950">WORKSPHERE</h2>

        <div className="bg-teal-950 border border-slate-600rounded-md p-8 shadow-lg backdrop-filter 
        backdrop-blur-lg bg-opacity-30 relative">
            
                <h2 className="text-2xl font-bold text-center text-white mb-4" >Login</h2>
                {error && <p className="text-red-500" >{error}</p>}
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="text-white mb-4 " >Email</label>
                    <input type="email" className="block w-72 py-2.5 px-0 text-5m text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 mb-4" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password" className="text-white mb-4" >Password</label>
                    <input type="password" className="block w-72 py-2.5 px-0 text-5m text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600"   placeholder='*********' onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div>
                    <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300m text-white font-semibold" >Login</button>
                </div>
            </form>
        </div>
        </div>
       
       </div>
        
    )
}

export default Login