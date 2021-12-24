import * as React from 'react'
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer'
import '../theme/style.css'
import SEO from "./SEO";


const Home = ( { children } ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
                <SEO/>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                {children}
                <Footer/>
        </>
    );
}

export default Home;