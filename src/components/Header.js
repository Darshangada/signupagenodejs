import React from 'react';

const Header = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <div className="d-flex justify-content-between w-100">
                        <a className="navbar-brand text-light" href=" ">ELANSOL TECHNOLOGIES</a>
                        <form className="d-flex" role="search">
                            <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" style={{ marginRight: '8px' }} /> 
                            <button className="btn btn-outline-success mr-2" type="submit" style={{ marginLeft: '8px' }}>Search</button> 
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
