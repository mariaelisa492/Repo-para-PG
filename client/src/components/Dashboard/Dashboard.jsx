import React, { useEffect, useState } from "react";
import ReactModal from 'react-modal';
import NavBar from "../NavBar/NavBar";
import DataTable from "react-data-table-component";
import FormCreateProducts from '../FormCreateProducts/FormCreateProducts'
import "./Dashboard.css";
import { useDispatch, useSelector, } from "react-redux";
import { deleteProduct } from "../../redux/actions";
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

export default function Dashboard() {
    const [pending, setPending] = useState(true);

    useEffect(() => {
		const timeout = setTimeout(() => {
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

    const dispatch = useDispatch()

    const products = useSelector(state => state.products);
    const [items, setItems] = useState(products);

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
            name: "Actions",
            cell: row => (<div className="actions"> <button type="button"><FaRegEdit /></button><button type="button" onClick={() => handleDeleteProduct(row)}><MdDeleteForever /></button></div>)
        },
        
        /*  {
             name: "",
             selector: "image",
             sortable: true
         } */
    ]

    useEffect(()=>{
        setItems(products)
    }, [products])

    const handleDeleteProduct = (row) => {
        dispatch(deleteProduct(row._id));
      }

    // estado para mostrar popup Crear
    const [showPopupCreate, setShowPopupCreate] = useState(false);

    const handleOpenPopupCreate = () => {
        setShowPopupCreate(true)
    }
    const handleClosePopupCreate = () => {
        setShowPopupCreate(false)
    }

    // estado para mostrar popup Update
    const [showPopupUpdate, setShowPopupUpdate] = useState(false);

    const handleOpenPopupUpdate = () => {
        setShowPopupUpdate(true)
    }
    const handleClosePopupUpdate = () => {
        setShowPopupUpdate(false)
    }
 
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="add-button-div">
                <div className="table">
                    <DataTable
                        columns={columns}
                        data={items}
                        progressPending={pending}
                        title="My products"
                        striped
                        highlightOnHover
                        // pointerOnHover
                        paginationPerPage = {5}
                        paginationRowsPerPageOptions = {[5,8]}
                        pagination
                    />
                </div>
                {/* <div className="create"> */}
                    <button className='create add-button' onClick={handleOpenPopupCreate}>Create</button>
                {/* </div> */}
            </div>

            <ReactModal isOpen={showPopupCreate} className='reactModalContent' overlayClassName='reactModalOverlay'>
                <FormCreateProducts handleClosePopup={handleClosePopupCreate}/>
            </ReactModal>

            <ReactModal isOpen={showPopupUpdate} className='reactModalContent' overlayClassName='reactModalOverlay'>
                {/* <FormUpdateProducts handleClosePopup={handleClosePopupUpdate}/> */}
            </ReactModal>
        </>
    )
};