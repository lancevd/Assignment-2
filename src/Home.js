import React from 'react'
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className='home'>
        <h1>Welcome to AltSchool</h1>
        <h3>Here you can find a list of all AltSchool students</h3>
        <button onClick={() => navigate('./users')} className='home-btn'> See Students</button>
    </div>
  )
}

export default Home