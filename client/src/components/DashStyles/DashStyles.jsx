import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {HiOutlineUsers} from "react-icons/hi"
import "./DashStyles.css";
import { NavLink } from 'react-router-dom';



const DashStyles = () => {
    
    return (
        <div>
            <body className="dashboard-body">

                <div className="dashboard-header">
                    <div class="icon__menu">
                        <GiHamburgerMenu id="btn_open" size={22}/>
                    </div>
                </div>

                <div class="menu__side" id="menu_side">

                    <div class="name__page">
                        <NavLink className="dash-home-icon" to="/"><AiOutlineHome size={30} /></NavLink>
                    </div>

                    <div class="options__menu">

                        <div class="option">
                            <NavLink activeClassName="selected" to="/admin/products" ><MdAssignment /></NavLink>
                        </div>

                        <div class="option">
                            <NavLink activeClassName="selected" to="/admin/sales"> <FiShoppingBag /> </NavLink>
                        </div>

                        <div class="option">
                            <NavLink activeClassName="selected" to="/admin/questions"> <RiQuestionAnswerLine /> </NavLink>
                        </div>

                        <div class="option">
                            <NavLink activeClassName="selected" to="/admin/users"> <HiOutlineUsers /> </NavLink>
                        </div>

                        <div class="option">
                            <NavLink activeClassName="selected" to="/admin/about"> <FiInfo /> </NavLink>
                        </div>

                    </div>

                </div>

                <div className="dashboard-main">

                </div>

                <script src="js/script.js"></script>
            </body>
        </div>
    )
}

export default DashStyles
