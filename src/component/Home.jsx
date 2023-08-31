
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo3 from './../images/Gr15.png';


const Home = () => {
    return (

        <section className="home-container" id='home'>

            <div className="overlay">

                <div className="logo-container">
                    <h1 className="slogan">FRESH</h1>
                    <h1 className="slon">2022</h1>
                    <h1 className="slogan">LOOK</h1>

                </div>

                <div className="slogan-container">
                    <img src={logo3} alt="Logo" className="logo" />
                </div>

            </div>


            
        </section>


    );
};




export default Home;