import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import "./DashStyles.css";
import { NavLink } from 'react-router-dom';

const DashStyles = () => {
    return (
        <div>
            <body className="dashboard-body">

                <div className="dashboard-header">
                    <div class="icon__menu">
                        <i class="fas fa-bars" id="btn_open"></i>
                    </div>
                </div>

                <div class="menu__side" id="menu_side">

                    <div class="name__page">
                        <NavLink to="/"><AiFillHome /></NavLink>
                    </div>

                    <div class="options__menu">


                        <div class="option">
                            <NavLink to="/admin/products" ><MdAssignment /></NavLink>
                        </div>


                        <a href="#">
                            <div class="option">
                                <NavLink to="/admin/sales"> <FiShoppingCart /> </NavLink>
                            </div>
                        </a>

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
