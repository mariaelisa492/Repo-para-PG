import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import DataTable from "react-data-table-component";
import "./Dashboard.css";

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

const datita = [
    { name: "flauta", price: 10 }
    
]

export default function Dashboard() {

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="add-button-div">
                <div>
                <DataTable
                    columns={columns}
                    data={datita}
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