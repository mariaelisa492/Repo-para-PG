import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import DataTable from "react-data-table-component";
import "./Dashboard.css";
import { useSelector } from "react-redux";

const columns = [
    {
        name: "Name",
        selector: "name",
        sortable: false
    },
    {
        name: "Price",
        selector: "price",
        sortable: false
    }
]


export default function Dashboard() {

    const products = useSelector(state => state.products);

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
                />
                </div>
                <div >
                    <Link to="/create" className="add-button">Publicar</Link>
                </div>
            </div>
        </>
    )
};