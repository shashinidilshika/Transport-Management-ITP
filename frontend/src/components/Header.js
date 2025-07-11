import React from "react";
import {Link} from 'react-router-dom';

function Header(){

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{color:"blue"}}>Company Name</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                <a class="nav-link" href="/all">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/add">Create Driver</a>
                </li>
                
            </ul>
            
            </div>
        </div>
    </nav>
    )
}

export default Header;