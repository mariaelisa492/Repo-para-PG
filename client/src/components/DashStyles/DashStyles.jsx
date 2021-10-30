import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../NavBar/NavBar';
import { AiFillHome } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import "./DashStyles.css";
import { Link } from 'react-router-dom';

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
                        <Link to="/"><AiFillHome /></Link>
                    </div>

                    <div class="options__menu">


                        <div class="option">
                            <Link to="/admin/products" ><MdAssignment /></Link>
                        </div>


                        <a href="#">
                            <div class="option">
                                <Link to="/admin/sales"> <FiShoppingCart /> </Link>
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
