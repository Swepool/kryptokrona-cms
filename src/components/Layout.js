import * as React from 'react'
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer'
import '../theme/style.css'


function Home( { children } ) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                {children}
                <Footer/>
        </>
    );
}

export default Home;