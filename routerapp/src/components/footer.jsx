import React from "react";
import {Link } from "react-router-dom";
import logo from '.././assets/img/synapse.svg'
import instagram from '.././assets/img/instagram.svg'
import twitter from '.././assets/img/twitter.svg'
import facebook from '.././assets/img/facebook.svg'
import youtube from '.././assets/img/youtube.svg'
import '.././assets/style.css'

const Footer = () => {
    return(
            <div class='px-11 flex justify-around bg-black h-[120px]' id="footer">
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="flex gap-5 text-white text-sm font-[Nunito]">
                <Link to="/about">About</Link>
                <Link to="/explore">Explore Courses</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/join">Join Now</Link>
                    {/* <span>About</span>
                    <span>Explore Courses</span>
                    <span>Contact Us</span>
                    <span>Join Now</span> */}
                </div>
                <div className="flex gap-4">
                    <img src={facebook} alt="" className="w-max"/>
                    <img src={twitter} alt="" className="w-max" />
                    <img src={instagram} alt="" className="w-max" />
                    <img src={youtube} alt="" className="w-max" />
                </div>
            </div>
        );
    
  };
  
  export default Footer;