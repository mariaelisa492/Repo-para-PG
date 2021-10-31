import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import DataTable from 'react-data-table-component'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { MdDeleteForever } from 'react-icons/md';
import { deleteOrder, updateOrders } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineSave } from "react-icons/ai";
import { LOCALHOST_URL } from "../../redux/constants/index"
import "./AdminSales.css"


const AdminSales = () => {

    //-------------  PARA TRAER TODAS LAS ORDENES

    const [ordenes, setOrdenes] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${LOCALHOST_URL}/orders`)
            setOrdenes(request.data.map(el => el))
            return request
        }
        fetchData();
    }, []);


    //-------------  PARA ELIMINAR ORDENES

    const dispatch = useDispatch();

    const handleDeleteOrder = (id) => {
        dispatch(deleteOrder(id));
    }


    //-------------  PARA ACTUALIZAR EL STATUS DE LAS ORDENES

   


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
            name: "Brand",
            selector: "items[0].brand",
            sortable: true
        },
        {
            name: "Quantity",
            selector: "items[0].qty",
            sortable: true
        },
        {
            name: "Price by unit",
            selector: "items[0].price",
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
                <form>
                    <select type="button">
                        <option value="">Not processed</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Dispatched</option>
                    </select>
                    <input
                        type="submit"
                        value="Update"
                    />
                </form>
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
            <div>
                <NavBar />
            </div>
            <NavLink to="/admin">My products</NavLink>
            <DataTable
                columns={columns}
                data={ordenes}
                title="My sales"
                striped
                highlightOnHover
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 8]}
                pagination
            />
            <div>
                <Footer />
            </div>

        </>
    )
}

export default AdminSales