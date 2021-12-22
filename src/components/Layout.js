import * as React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer'
import '../theme/style.css'


const Layout = ({ children }) => {
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout