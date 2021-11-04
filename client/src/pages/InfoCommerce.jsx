import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import InfoComponent from '../components/InformationComponent/InformationComponent';

export default function InfoCommerce() {
    return (
        <div className="page-shopping">

            <div className="nav_page_user">
                <NavBar />
            </div>

            <div className="user_page_container">
                <InfoComponent />
            </div>

            <div className="footer_page_user">
                <Footer />
            </div>

        </div>
    );
}