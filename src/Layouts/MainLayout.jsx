import React from 'react';
import { Link } from 'react-router-dom';
import "./MainLayout.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout({children}) {
  return (
    <div className='main_div'>
            
            <header className='Header'>
                <nav className='H_nav'>
                    <div>
                        <Link  to='/pos' className='navbar_brand'>POS SYSTEM FOR CODINOVA</Link>
                    </div>
                </nav>
            </header>
            <main>
                <div className='container'>
                    {children}
                </div>
                <ToastContainer/>
            </main>
        </div>
    
  )
}

export default MainLayout
