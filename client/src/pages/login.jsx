import React from 'react'
import Header from '../header'
import {Link} from 'react-router-dom'


function Login() {
    return (
      <div>
       
        <Header />
  
        
        <div className="pt-24 text-center space-x-4">
          <Link
            to="/EmployerLogin"
            className="bg-green-600 hover:bg-green-700 text-white no-underline font-semibold py-2 px-6 rounded inline-block"
          >
            Employer
          </Link>
  
          <Link
            to="/jobseeker"
            className="bg-blue-500 hover:bg-blue-700 text-white no-underline font-semibold py-2 px-6 rounded inline-block"
          >
            JobSeeker
          </Link>
        </div>
      </div>
    );
  }
  
  export default Login;