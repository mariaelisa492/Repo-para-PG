import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdDeleteForever } from 'react-icons/md';
import { deleteOrder, getAllOrders } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import ReactModal from 'react-modal';
import { AdminForm } from './AdminForm';
import { FaRegEdit } from 'react-icons/fa';
import "./AdminSales.css"


const AdminSales = () => {

    //-------------  PARA TRAER TODAS LAS ORDENES


    const orders = useSelector(state => state.orders)
    const update = useSelector(state => state.update)


    const [openModal, setOpenModal] = useState(false);

    const [idToChange, setIdToChange] = useState(null);

    function handleModal() {
        setOpenModal(!openModal)
    };

    function idChange(e) {
        setIdToChange(e)
    };

    function laOnClick(e) {
        idChange(e)
        handleModal()
    };



    //-------------  PARA ELIMINAR ORDENES

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrders())
    }, [update])


    const handleDeleteOrder = (id) => {
        dispatch(deleteOrder(id));
    }

    const columns = [
        {
            name: "User",
            selector: "user",
            sortable: true
        },
        {
            name: "Name",
            cell: row => (
                row.items.map(el => el.name + " + ")
            ),
            sortable: true
        },
        {
            name: "Price by unit",
            cell: row => (
                row.items.map(el => el.price + " + ")
            ),
            sortable: true
        },
        {
            name: "Quantity",
            selector: "quantity",
            sortable: true
        },
        {
            name: "Total price",
            selector: "totalPrice",
            sortable: true
        },
        {
            name: "Status",
            selector: "status",
            sortable: true
        },
        {
            name: "Actions",
            cell: row => (

                <div className="actions">
                    <button
                        title="Edit"
                        onClick={() => laOnClick(row._id)}>
                        <FaRegEdit />
                    </button>
                    <button
                        title="Delete"
                        type="button"
                        onClick={() => {
                            handleDeleteOrder(row._id);
                        }}

                    >
                        <MdDeleteForever />
                    </button>
                </div>

            )
        }
    ]

    return (
        <div >
            <div className="admin-sales-body">
                <DataTable
                    columns={columns}
                    data={orders}
                    title="My sales"
                    striped
                    highlightOnHover
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 8]}
                    pagination
                    responsive
                />
            </div>      
                <ReactModal isOpen={openModal} className="modal-admin-sales" /* overlayClassName='reactModalOverlay' */>
                    <AdminForm handleClosePopup={handleModal} showPopup={openModal} id={idToChange} />
                </ReactModal>
        </div>
    )
}

export default AdminSales