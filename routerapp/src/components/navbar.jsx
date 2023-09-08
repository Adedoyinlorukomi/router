import React from "react";
import search from '.././assets/img/search.svg'
import p from '.././assets/img/p.svg'
import logo from '.././assets/img/synapse.svg'
// import '.././assets/style.css'

const Navbar = () => {
    return(
        <div>

        <div class="grid grid-cols-9 px-[22px] py-4 border-[#E6EEF0] border-b-[1px]">
            <div className="flex gap-[60px] col-span-7">
                <img src={logo} alt="logo" />
                <div className="flex gap-2 bg-[#FFFFFF] border-[1px] border-[#AAB1B2] pl-4 pr-[70px] my-[7px] rounded-[10px]">
                    <img src={search} alt="searchIcon"></img>
                    <input className="border-0" type="text" name="" id="inp1" placeholder="Search for Course title"/>
                </div>
            </div>
            <div className="flex gap-[80px]">
                <p className="pt-3">Courses</p>
                <img src={p} alt="logo" className="w-min"/>
            </div>
        </div>
        
        </div>
        );
    
  };
  
  export default Navbar;