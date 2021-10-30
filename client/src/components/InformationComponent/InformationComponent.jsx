import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map/Map";
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsTelephoneFill } from 'react-icons/bs';
import { getAbout } from '../../redux/actions/index';
import './InformationComponent.css';

export default function InfoComponent() {
    const dispatch = useDispatch()

    const about = useSelector(state => state.about);

    const [inputAbout, setInputAbout] = useState(about);

    useEffect(() => {
        dispatch(getAbout());
    }, [])

    useEffect(() => {
        setInputAbout(about)
    }, [about])

    return (
        <div>
            <div className='containerAbout'><h1 className='titleAboutUS'>About us!</h1></div>

            <div>
                <div className='divMap'>
                    <Map address={`${inputAbout?.address}, ${inputAbout?.city}, ${inputAbout?.stateOrProvince}`}/>
                </div>
            </div>

            <div className='containerAbout containerContainerAbout'>
                <div className='containerAbout informationDiv'>
                    <div className='iconAbout'><FaMapMarkedAlt /></div>

                    <div>
                        <h2>Adress</h2>
                        <p className='textAbout'>{inputAbout?.address}</p>
                    </div>
                </div>

                <div className='containerAbout informationDiv'>
                    <div className='iconAbout'><FiMail /></div>

                    <div>
                        <h2>Email</h2>
                        <p className='textAbout'>{inputAbout?.email}</p>
                    </div>
                </div>

                <div className='containerAbout informationDiv'>
                    <div className='iconAbout'><BsTelephoneFill /></div>

                    <div>
                        <h2>Telephone</h2>
                        <p className='textAbout'>{inputAbout?.telephone}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}