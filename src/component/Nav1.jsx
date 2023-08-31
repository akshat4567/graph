import React from "react";
import Layer1 from './../images/Layer1.png';
import fb from './../images/fb.png';
import insta from './../images/insta.png';
import linkd from './../images/linkd.png';
import twit from './../images/twit.png';
import Nav2 from "./Nav2";
import Home from "./Home";
import Products from "./Products";

import "./Nav1.css";
const Nav1 = () => {
    return (
        <>
            <div className="nn1">
                <div className="nn2">
                    <img src={Layer1} alt="my imgs" />
                    <p>Free Delivery </p>
                    <h6>|</h6>
                    <p>Return Policy</p>
                </div>

                <div className="nn3">
                    <p>Login</p>

                </div>

                <div className="nn4">
                    <p>Follow Us</p>
                </div>

                <div className="nn5">
                    <img src={fb} alt="my imgs" style={{ width: 4.5, height: 7.6 }} />
                    <img src={linkd} alt="my imgs" style={{ width: 8, height: 7.64 }} />
                    <img src={twit} alt="my imgs" style={{ width: 7.6, height: 5.6 }} />
                    <img src={insta} alt="my imgs" style={{ width: 8, height: 8 }} />
                </div>

            </div>
            
        </>




    )
}
export default Nav1;