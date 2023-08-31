import React from "react";

import { Link } from 'react-scroll';
import "./Nav2.css"
import Home from "./Home";
const Nav2 = () => {
    
    return (
        <div className="navv0">
            <div className="navv1">
                <p>ShopKart</p>
                <div className="navv2">
                    <h6>Whislist (0)</h6>
                    <h6>BAG (0)</h6>
                </div>
            </div>

            <div className="navv3">

                <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>

                <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="navbar-link">About</Link>

                <Link to="product" spy={true} smooth={true} offset={50} duration={500} className="navbar-link ">Our Products</Link>

                <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="navbar-link">Contact Us</Link>
            </div>

        </div>

    )
}
export default Nav2;