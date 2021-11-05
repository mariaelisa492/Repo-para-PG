import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrders } from '../../redux/actions';
import './AdminForm.css'

export const AdminForm = ({ id, handleClosePopup }) => {

    //-------------  PARA ACTUALIZAR EL STATUS DE LAS ORDENES

    const dispatch = useDispatch()

    const [newStatus, setNewStatus] = useState("")

    const handleSubmit = (e, id, newStatus) => {
        e.preventDefault()
        dispatch(updateOrders({ _id: id }, newStatus)).then(handleClosePopup())

    }

    const handleChange = (e) => {
        setNewStatus(e.target.value)
    };

    return (
        <div className="adminSalesGeneral">
            <div className='AdminSalesModal'>
                <form className='LeForm' onSubmit={(e) => handleSubmit(e, id, newStatus)}>
                    <select className='select-mysales' name="status" value={newStatus} onChange={handleChange}>
                        <option value="Not processed" >Not processed</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Dispatched">Dispatched</option>
                    </select>
                    <div className='cerrar-cont'>
                        <button className='cerrar' onClick={() => {
                            handleClosePopup()
                        }}>
                            Back
                        </button>
                        <input
                            className='cerrar'
                            type="submit"
                            value="Update"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
