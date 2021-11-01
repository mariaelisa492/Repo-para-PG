import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrders } from '../../redux/actions';

const AdminForm = ({ id }) => {

    //-------------  PARA ACTUALIZAR EL STATUS DE LAS ORDENES

    const dispatch = useDispatch()

    const [newStatus, setNewStatus] = useState("")

    const handleSubmit = (e, id, newStatus) => {
        e.preventDefault()
        dispatch(updateOrders({ _id: id }, newStatus));
        console.log(id, "ESTE ES EL ID")
        console.log(newStatus, "ESTE ES EL STATUUUS")
    }

    const handleChange = (e) => {
        setNewStatus(e.target.value)
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, id, newStatus)}>
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

export default AdminForm;
