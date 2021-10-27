import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import "./AdminSales.css"

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
    }
]

const AdminSales = () => {

    const [ordenes, setOrdenes] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get("http://localhost:5000/orders")
            setOrdenes(request.data.map(el => el))
            console.log(request.data.map(el => el), "este es mi request")
            return request
        }
        fetchData();
    }, []);

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