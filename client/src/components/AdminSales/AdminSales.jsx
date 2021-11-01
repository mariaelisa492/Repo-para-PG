import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdDeleteForever } from 'react-icons/md';
import { deleteOrder, getAllOrders, updateOrders } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { LOCALHOST_URL } from "../../redux/constants/index"
import ReactModal from 'react-modal';
import AdminForm from './AdminForm';
import "./AdminSales.css"


const AdminSales = () => {

    //-------------  PARA TRAER TODAS LAS ORDENES


    const orders = useSelector(state => state.orders)

    const [openModal, setOpenModal] = useState(false);

    const [idToChange, setIdToChange] = useState(null);

    function handleOpen() {
        setOpenModal(!openModal)
    };

    function idChange(e) {
        setIdToChange(e)
    };

    function laOnClick(e) {
        idChange(e)
        handleOpen()
    };

   
   

    console.log(orders, "ESTA ES LA ORDERESSS")



    //-------------  PARA ELIMINAR ORDENES

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
   

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
            selector: "items[0].name",
            sortable: true
        },
        {
            name: "Price by unit",
            selector: "items[0].price",
            sortable: true
        },
        {
            name: "Quantity",
            selector: "items[0].qty",
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
            cell: row => (<div className="actions">
                <button onClick={laOnClick(row._id)}>
                    P
                </button>
                <button type="button" onClick={() => {
                    handleDeleteOrder(row._id);
                }}
                >
                    <MdDeleteForever />
                </button>
            </div>)
        }
    ]

    return (
        <>
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
            <ReactModal isOpen={openModal} className='reactModalContent' overlayClassName='reactModalOverlay'>
                <AdminForm handle={handleOpen} showPopup={openModal} id={idToChange} />
            </ReactModal>
        </>
    )
}

export default AdminSales