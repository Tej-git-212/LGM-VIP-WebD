import React from 'react'
import './navbar.css' 

const Navbar = ({onButtonSubmit}) => {
    return (
        <div className="navb">
            <div className="navbar" id="navbar">
                <a href="https://github.com/Tej-git-212" className="zippy" target="_blank" rel="noreferrer"> Zippy </a>
                <button href="#" className="getusers" onClick={onButtonSubmit}>Get Users</button>  
            </div>
        </div>
    );
};

export default Navbar