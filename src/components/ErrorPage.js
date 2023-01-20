import React from 'react'
import Footer from './Footer'

const ErrorPage = () => {
  return (
    <div>
        <div className='errorpage'>
        <h1 style={{textAlign:"center", color:"gray"}}>404 Error</h1>
        <h2 style={{textAlign:"center", color:"red"}}>Page not found</h2>
        <p style={{textAlign:"center", color:"red"}}>Sorry, the page you are looking for does not exist.</p>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default ErrorPage