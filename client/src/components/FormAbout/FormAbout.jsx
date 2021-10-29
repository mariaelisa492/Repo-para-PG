import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from 'react-icons/fa'
import { saveImages } from '../FormCreateProducts/utils/saveImages';
import { validationFunction } from './utils/validationFunction';
import { updateAbout } from '../../redux/actions/index';
import AlertPopup from '../AlertPopups/AlertPopups'

export default function About({ handleClosePopup }) {
    const dispatch = useDispatch();
    const refFileInput = useRef();
    const refFileInputSmall = useRef();

    const about = useSelector(state => state.about)

    //estados de intput y errores
    const [inputAbout, setInputAbout] = useState(about)
    const [errorsAbout, setErrorsAbout] = useState({});

    useEffect(() => {
        setInputAbout({ about })
        console.log(about)
    }, [about])

    //Funcion para obtener los valores
    const handleInputChange = (name, value) => {
        setInputAbout((prev) => ({ ...prev, [name]: value }));

        setErrorsAbout(validationFunction({ ...inputAbout, [name]: value }));
    }

    //Funcion para crear producto
    const handleSubmit = async (e) => {
        e.preventDefault();

        handeOpenAlertUpdate();
    }

    const resetFileInput = () => {
        refFileInput.current.value = '';
        refFileInputSmall.current.value = '';
    };

    const [activeAlertUpdate, setactiveAlertUpdate] = useState(false);
    const handeOpenAlertUpdate = () => {
        setactiveAlertUpdate(!activeAlertUpdate)
    }

    const [successForm, setsuccessForm] = useState(false);
    const handleUpgradeSuccesForm = () => {
        setsuccessForm(!successForm)
    }

    useEffect(async () => {
        if (successForm) {
            let auxInput = inputAbout;

            const urlLogo = await saveImages(auxInput.logo);
            const urlLogoSmall = await saveImages(auxInput.logoSmall);

            auxInput.logo = urlLogo;
            auxInput.logoSmall = urlLogoSmall;

            dispatch(updateAbout(auxInput._id));
            setInputAbout({
                email: '',
                telephone: '',
                address: '',
                city: '',
                stateOrProvince: '',
                logo: '',
                logoSmall: ''
            });
            handleClosePopup();

            handleUpgradeSuccesForm();
        }
    }, [successForm])

    return (
        <div className='backgroundCreateProducts containerformProducts'>
            <form
                onSubmit={e => {
                    handleSubmit(e)
                    resetFileInput()
                }}
                className='formCreateProducts containerformProducts'
            >
                <button
                    onClick={() => {
                        handleClosePopup()
                        setInputAbout({
                            email: '',
                            telephone: '',
                            address: '',
                            city: '',
                            stateOrProvince: '',
                            logo: '',
                            logoSmall: ''
                        })
                    }}
                    className='btnCloseFormProducts containerformProducts'
                >
                    <FaTimes />
                </button>

                <div>
                    <div>
                        <div className='containerformProducts'>
                            <label className='labelCreateProducts'>Email:</label>
                            <input
                                type='email'
                                name='email'
                                onChange={e => handleInputChange(e.target.name, e.target.value)}
                                value={inputAbout.email}
                                className='inputCreateProducts'
                                required
                            />
                        </div>
                    </div>

                    {errorsAbout.email && (
                        <p className='errorText'>{errorsAbout.email}</p>
                    )}
                </div>

                <div>
                    <div>
                        <div className='containerformProducts'>
                            <label className='labelCreateProducts'>Telephone:</label>
                            <input
                                type='tel'
                                name='telephone'
                                onChange={e => handleInputChange(e.target.name, e.target.value)}
                                value={inputAbout.telephone}
                                className='inputCreateProducts'
                                required
                            />
                        </div>
                    </div>


                    {errorsAbout.telephone && (
                        <p className='errorText'>{errorsAbout.telephone}</p>
                    )}
                </div>

                <div>
                    <div>
                        <div className='containerformProducts'>
                            <label className='labelCreateProducts'>Address:</label>
                            <input
                                type='text'
                                name='address'
                                onChange={e => handleInputChange(e.target.name, e.target.value)}
                                value={inputAbout.address}
                                className='inputCreateProducts'
                                required
                            />
                        </div>
                    </div>


                    {errorsAbout.address && (
                        <p className='errorText'>{errorsAbout.address}</p>
                    )}
                </div>

                <div>
                    <div>
                        <div className='containerformProducts'>
                            <label className='labelCreateProducts'>City:</label>
                            <input
                                type='text'
                                name='city'
                                onChange={e => handleInputChange(e.target.name, e.target.value)}
                                value={inputAbout.city}
                                className='inputCreateProducts'
                                required
                            />
                        </div>
                    </div>


                    {errorsAbout.city && (
                        <p className='errorText'>{errorsAbout.city}</p>
                    )}
                </div>

                <div>
                    <div>
                        <div className='containerformProducts'>
                            <label className='labelCreateProducts'>State or Province:</label>
                            <input
                                type='text'
                                name='stateOrProvince'
                                onChange={e => handleInputChange(e.target.name, e.target.value)}
                                value={inputAbout.stateOrProvince}
                                className='inputCreateProducts'
                                required
                            />
                        </div>
                    </div>


                    {errorsAbout.stateOrProvince && (
                        <p className='errorText'>{errorsAbout.stateOrProvince}</p>
                    )}
                </div>

                <div>
                    <div>
                        <div className='containerformProducts'>
                            <label className='labelCreateProducts'>Logo:</label>
                            <input
                                type='file'
                                name='logo'
                                onChange={e => handleInputChange(e.target.name, e.target.files[0])}
                                className='inputCreateProducts'
                                ref={refFileInput}
                                required
                            />
                        </div>
                    </div>

                    {errorsAbout.logo && (
                        <p className='errorText'>{errorsAbout.logo}</p>
                    )}
                </div>

                <div>
                    <div>
                        <div className='containerformProducts'>
                            <label className='labelCreateProducts'>Logo small:</label>
                            <input
                                type='file'
                                name='logoSmall'
                                onChange={e => handleInputChange(e.target.name, e.target.files[0])}
                                className='inputCreateProducts'
                                ref={refFileInputSmall}
                                required
                            />
                        </div>
                    </div>

                    {errorsAbout.logoSmall && (
                        <p className='errorText'>{errorsAbout.logoSmall}</p>
                    )}
                </div>

                <div>
                    <input
                        type='submit'
                        value='Update'
                        className={Object.keys(errorsAbout).length === 0 ? 'btnCreate' : 'greyBtnCreate'}
                        diabled={Object.keys(errorsAbout).length === 0}
                    />
                </div>
            </form>

            <AlertPopup
                activeAlert={activeAlertUpdate}
                actionAlert='update'
                handleOpenAlert={handeOpenAlertUpdate}
                handleSuccess={handleUpgradeSuccesForm}
            />
        </div>
    )
}