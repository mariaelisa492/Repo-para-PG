import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import DataTable from "react-data-table-component";
import "./Dashboard.css";
import { useDispatch, useSelector, } from "react-redux";
import { deleteProduct } from "../../redux/actions";

export default function Dashboard() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products);

    const columns = [
        {
            name: "Name",
            selector: "name",
            sortable: true
        },
        {
            name: "Price",
            selector: "price",
            sortable: true
        },
        {
            name: "Stock",
            selector: "stock",
            sortable: true
        },
        {
            name: "Brand",
            selector: "brand",
            sortable: true
        },
        {
            name: "Delete",
            cell: row => (<button
                    type="button"
                    onClick={() => dispatch(deleteProduct(row._id))} 
                    className='dashboard-button'
                >X</button>)
        },
        {
            name: "Update",
            cell: () => <button className='dashboard-button'>Update</button>
        }
        /*  {
             name: "",
             selector: "image",
             sortable: true
         } */
    ]

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="add-button-div">
                <div>
                    <DataTable
                        columns={columns}
                        data={products}
                        title="My products"
                        striped
                        highlightOnHover
                        pointerOnHover
                        pagination
                    />
                </div>
                <div >
                    <Link to="/create" className="add-button">Publicar</Link>
                </div>
            </div>
        </>
    )
};