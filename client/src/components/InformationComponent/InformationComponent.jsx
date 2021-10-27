import React from "react";
import Map from "./Map/Map";
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsTelephoneFill } from 'react-icons/bs';
import './InformationComponent.css';

export default function InfoComponent() {


    return (
        <div>
            <div className='containerAbout'><h1 className='titleAboutUS'>About us!</h1></div>

            <div>
                <div className='divMap'>
                    <Map />
                </div>
            </div>

            <div className='containerAbout containerContainerAbout'>
                <div className='containerAbout informationDiv'>
                    <div className='iconAbout'><FaMapMarkedAlt /></div>

                    <div>
                        <h2>Ubication</h2>
                        <p className='textAbout'>742 Evergreen Terrace</p>
                    </div>
                </div>

                <div className='containerAbout informationDiv'>
                    <div className='iconAbout'><FiMail /></div>

                    <div>
                        <h2>Email</h2>
                        <p className='textAbout'>wavemusicnotify@gmail.com</p>
                    </div>
                </div>

                <div className='containerAbout informationDiv'>
                    <div className='iconAbout'><BsTelephoneFill /></div>

                    <div>
                        <h2>Telephone</h2>
                        <p className='textAbout'>764-84377</p>
                    </div>
                </div>
            </div>
        </div>

    )
}