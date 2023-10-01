import React from 'react'
import "./HomePage.css";
import { Link } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
function HomePage(){
    return(
        <MainLayout>
                    <div className='container'>
                        <h1>Welcome to the simple POS for small buiness</h1>
                        <p>Labore tempor ipusum duis ea exercitation laberis laborum mollit qui expercitation.</p>
                        <p>if you have an issue, call 443-321-4XXX anytimes</p>
                        <Link to='/pos' className='btn_pos'>Click here to sell Products.</Link>
                    </div>
        </MainLayout>
    )
}

export default HomePage;