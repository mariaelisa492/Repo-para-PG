import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import InfoComponent from '../components/InformationComponent/InformationComponent';

export default function InfoCommerce() {
    return (
        <div>

            <div>
                <NavBar />
            </div>

            <div>
                <InfoComponent />
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
}