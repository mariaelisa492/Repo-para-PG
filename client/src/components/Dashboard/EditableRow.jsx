import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getSingleProduct, updateProduct } from "../../redux/actions";


export default function EditableRow() {

    const products = useSelector((state) => state.products)

    const [state, setState] = useState({
        name: "",
        price: "",
        stock: "",
        brand: "",
    })

    const { id } = useParams();
    const dispatch = useDispatch()
    const { name, brand, stock, price } = state;

    useEffect(() => {
        dispatch(getSingleProduct(id))
        console.log("dispachado pa")
    }, [])

    useEffect(() => {
        if (products) {
            setState({ ...products })
        }
    }, [products]);

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ 
            ...state, [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(state, id));
    }


    /*  const products = useSelector(state => state.products) */

    return (
        <div>
            <div>
                <Link to="/admin">Back</Link>
            </div>
            <div>
                <form 
                noValidate
                autoComplete="off" 
                onSubmit={handleSubmit}
              >
                    <div>
                        Name:
                        <input value={name} label="Name" onChange={handleInputChange} name={name} />
                    </div>
                    <div>
                        Stock:
                        <input value={stock} onChange={handleInputChange} name={stock} />
                    </div>
                    <div>
                        Price:
                        <input value={price} onChange={handleInputChange} name={price} />
                    </div>
                    <div>
                        Brand:
                        <input value={brand} onChange={handleInputChange} name={brand} />
                    </div>
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </form>     
            </div>
        </div>
    )
};
