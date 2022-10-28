import React from 'react'
import {useNavigate} from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className='error'>
        
            <h4>Error!</h4>
            <h1>404</h1>
        
        <p>The page you requested for was not found</p>
        <button onClick={()=> navigate('./')}>Go back Home</button>
    </div>
  )
}

export default ErrorPage