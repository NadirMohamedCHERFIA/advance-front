import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsBox2Fill } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";

const NavBar = () => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarTogglerDemo03" 
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><BsBox2Fill/></span>
            </button>
            <NavLink className="navbar-brand pl-5 fs-1 fw-bolder" to="/" >ADVance</NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center flex-grow-1 fs-4">
                    <li className="nav-item active mx-2">
                        <NavLink className="nav-link" to="/" exact activeClassName="active">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item dropdown mx-2">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cockpit
                        </NavLink>
                        <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item text-light" to="/getting-started">Getting Started</NavLink></li>
                            <li><NavLink className="dropdown-item text-light" to="/details">Shop Visits X Contracts</NavLink></li>
                            <li><hr class="dropdown-divider bg-light"/></li>
                            <li><NavLink className="dropdown-item text-light" to="/history">View Historic</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/dashboard" activeClassName="active">Dashboard <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/" activeClassName="active">Docs <span className="sr-only"></span></NavLink>
                    </li>
                </ul>
                <form className='d-flex my-3 gap-3 w-25' role="search">
                    <button className='btn btn-primary w-100' type="submit">
                        Sign in
                    </button>
                    <button className='btn btn-outline-primary text-white w-100' type="submit">
                        <FaWindows/> Windows auth
                    </button>
                </form>
            </div>
        </div>
    </nav>
);

export default NavBar;