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
        <div className='AdminSalesModal'>
            <div className='cerrar'>
                <button onClick={() => {
                    handleClosePopup()
                }}>
                    X
                </button>
            </div>
            <form className='LeForm' onSubmit={(e) => handleSubmit(e, id, newStatus)}>
                <select name="status" value={newStatus} onChange={handleChange}>
                    <option value="Not processed" >Not processed</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Dispatched">Dispatched</option>
                </select>
                <input
                    type="submit"
                    value="Update"
                />
            </form>
        </div>
    )
}