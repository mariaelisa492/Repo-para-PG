import React, { useState } from 'react';
import { FaTimes, FaCheck, FaExclamation } from 'react-icons/fa';
import './AlertPopups.css'

export default function AlertPopup({ activeAlert, actionAlert, handleOpenAlert, handleSuccess }) {
    /* const [successOrCanceled, setSuccessOrCanceled] = useState(null);
    const [activeAnotherAlert, setActiveAnotherAlert] = useState(false); */

    return (
        <div>
            {activeAlert &&
                <div className='wrapperDiv'>
                    <div className='windowAlert'>
                        <div>
                            <p className='interrogationImage'><FaExclamation /></p>
                        </div>

                        <div>
                            <div>
                                <h2 className='titleAlert'>Are you sure?</h2>
                                <p className='pAlert'>You won't be able to revert this!</p>
                            </div>

                            <div className='divBtnAlert'>
                                <span
                                    onClick={() => {
                                        // setSuccessOrCanceled('caceled');
                                        // setActiveAnotherAlert(true);
                                        // handleOpenAlert();
                                        handleOpenAlert();
                                    }}
                                    className='btnAlert canceledButton'
                                >
                                    No, cancel!
                                </span>

                                <span
                                    onClick={() => {
                                        // setSuccessOrCanceled('success');
                                        // setActiveAnotherAlert(true);
                                        // handleOpenAlert();
                                        handleOpenAlert();
                                        handleSuccess();
                                    }}
                                    className='btnAlert successButton'
                                >
                                    Yes, {actionAlert} it!
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='backgroundAlert' onClick={handleOpenAlert}></div>
                </div>
            }

            {/* {activeAnotherAlert &&
                <div className='wrapperDiv'>
                    <div className='windowAlert'>
                        <div>
                            {successOrCanceled === 'success'
                                ? <FaCheck className='successImage'/>
                                : <FaTimes className='canceledImage'/>
                            }
                        </div>

                        <div>
                            <h2>{successOrCanceled === 'success' ? `${actionAlert}!.` : 'Cancelled.'}</h2>
                            <p>{successOrCanceled === 'success'
                                ? `Your file has been ${actionAlert}.`
                                : 'Your inventory is safe'
                            }</p>

                            <div>
                                <button
                                    onClick={() => {
                                        setSuccessOrCanceled(null)
                                        if (successOrCanceled === 'success') handleSuccess()
                                        setActiveAnotherAlert(false)
                                    }}
                                    className='btnAlert successButton'
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='backgroundAlert' onClick={() => setActiveAnotherAlert(false)}></div>
                </div>
            } */}
        </div>
    )
}