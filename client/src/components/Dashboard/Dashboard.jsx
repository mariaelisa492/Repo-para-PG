import React, { useEffect, useState } from "react";
import ReactModal from 'react-modal';
import NavBar from "../NavBar/NavBar";
import DataTable from "react-data-table-component";
import FormCreateProducts from '../FormCreateProducts/FormCreateProducts';
import FormUpdateProducts from '../FormUpdateProduct/EditableRow';
import { useDispatch, useSelector, } from "react-redux";
import { deleteProduct } from "../../redux/actions";
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import "./Dashboard.css";
import AlertPopup from '../AlertPopups/AlertPopups';
import Modal from "../Modal/Modal";

export default function Dashboard() {

    const [idToUpdate, setidToUpdate] = useState('')

    const [pending, setPending] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPending(false);
        }, 1000);
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
            cell: row => (<div className="actions">
                <button type="button" onClick={() => {
                    handleOpenPopupUpdate()
                    setidToUpdate(row._id)
                    console.log(row._id)
                }}><FaRegEdit /></button>

                <button type="button" onClick={() => {
                    handleDeleteProduct(row._id);
                    handeOpenAlertDelete();
                }}
                >
                    <MdDeleteForever />
                </button>
            </div>)
        },

        /*  {
             name: "",
             selector: "image",
             sortable: true
         } */
    ]

    useEffect(() => {
        setItems(products)
    }, [products])

    const handleDeleteProduct = (id) => {
        setidDelete(id);
    }

    // estado para mostrar popup Crear
    const [showPopupCreate, setShowPopupCreate] = useState(false);

    const handleOpenPopupCreate = () => {
        setShowPopupCreate(true)
    }
    const handleClosePopupCreate = () => {
        setShowPopupCreate(false)
        showPopup(true);
        setTimeout(() => showPopup(false), 1000);
    }

    // estado para mostrar popup Update
    const [showPopupUpdate, setShowPopupUpdate] = useState(false);

    const handleOpenPopupUpdate = () => {
        setShowPopupUpdate(true)
    }
    const handleClosePopupUpdate = () => {
        setShowPopupUpdate(false)
    }

    // todo para borrar
    const [idDelete, setidDelete] = useState(null)

    const [activeAlertDelete, setactiveAlertDelete] = useState(false);
    const handeOpenAlertDelete = () => {
        setactiveAlertDelete(!activeAlertDelete)
    }

    const [successDelete, setsuccessDelete] = useState(false);
    const handleDeleteSuccess = () => {
        setsuccessDelete(!successDelete)
    }

    useEffect(() => {
        if (successDelete) {
            dispatch(deleteProduct(idDelete));

            handleDeleteSuccess();
        }
    }, [successDelete])

    //Popup de creado
    const [successCreated, setsuccessCreated] = useState(false)
    const showPopup = (boolean) => setsuccessCreated(boolean)

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
                        paginationPerPage={5}
                        paginationRowsPerPageOptions={[5, 8]}
                        pagination
                    />
                </div>
                {/* <div className="create"> */}
                <button className='create add-button' onClick={handleOpenPopupCreate}>Create</button>
                {/* </div> */}
            </div>

            <ReactModal isOpen={showPopupCreate} className='reactModalContent' overlayClassName='reactModalOverlay'>
                <FormCreateProducts handleClosePopup={handleClosePopupCreate} />
            </ReactModal>

            <ReactModal isOpen={showPopupUpdate} className='reactModalContent' overlayClassName='reactModalOverlay'>
                <FormUpdateProducts handleClosePopup={handleClosePopupUpdate} id={idToUpdate} />
            </ReactModal>

            <AlertPopup
                activeAlert={activeAlertDelete}
                actionAlert='delete'
                handleOpenAlert={handeOpenAlertDelete}
                handleSuccess={handleDeleteSuccess}
            />

            <Modal
                show={successCreated}
                hideFunc={() => showPopup(false)}
                message='Product created with success!'
            />
        </>
    )
};