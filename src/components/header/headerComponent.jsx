import React from 'react';
import "./headerStyle.scss";

class Header extends React.Component{
    render(){
        return(
                <navbar>
                    <div className='navBarContainer' id="navBarContainer">
                        <div className="ecommHome" id="ecommHome">
                            React Node Ecomm
                        </div>
                        <div className="searchBoxContainer" id="searchBoxContainer">
                            Search box here
                        </div>
                        <ul className="headerOptions" id="headerOptions" >
                            <li className="option" id="option1">
                                Sign In
                            </li>

                        </ul>
                    </div>
                </navbar>
        )
    }
}

export default Header;