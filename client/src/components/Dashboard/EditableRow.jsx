import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";
import { getSingleProduct, updateProduct } from "../../redux/actions";
import { categories } from '../Categories/categoriesExport'
import "./EditableRow.css";

let AllCategories = []

for (let key in categories) {
    AllCategories = [...AllCategories, ...categories[key]]
}

export default function EditableRow() {

    const products = useSelector((state) => state.products)

    const [productState, setProductState] = useState({
        name: '',
        description: '',
        image: '',
        price: '',
        stock: '',
        brand: '',
        model: '',
        category: ''
    })

    const { id } = useParams();
    const dispatch = useDispatch()
    const { name, description, image, price, stock, brand, model, category } = productState;

    useEffect(() => {
        dispatch(getSingleProduct(id))
        console.log("dispachado el single user")
    }, [])

    useEffect(() => {
        if (products) {
            setProductState({...products})
        }
        console.log(products, "ESTE ES MI 2DO USEEFFECT")
    }, [products]);

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setProductState({ ...productState, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateProduct(productState, id));
    }


    /*  const products = useSelector(state => state.products) */

    return (
        <div className="update-body">
            <div>
                <Link to="/admin">Back</Link>
            </div>
        
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <h4>
                    Name:
                    </h4>
                    <input value={name} onChange={handleInputChange} name={name} />
                </div>
                <div>
                <h4>
                    Description:
                    </h4>
                    <textarea value={description} rows="10" onChange={handleInputChange} name={brand} />
                </div>
                <div>
                <h4>
                    Price:
                    </h4>
                    <input value={price} onChange={handleInputChange} name={price} />
                </div>
                <div>
                <h4>
                    Stock:
                    </h4>
                    <input value={stock} onChange={handleInputChange} name={stock} />
                </div>
                <div>
                <h4>
                    Brand:
                    </h4>
                    <input value={brand} onChange={handleInputChange} name={brand} />
                </div>
                <div>
                <h4>
                    Model:
                    </h4>
                    <input value={model} onChange={handleInputChange} name={model} />
                </div>
                <div>
                <h4>
                    Category:
                    </h4>
                    <select
                        name='category'
                        onChange={handleInputChange}
                        value={category}
                    >
                        <option value=''>Select Category</option>
                        {AllCategories.map(category =>
                            <option value={category} key={category}>{category}</option>
                        )}
                    </select>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Update"
                    />
                </div>
            </form>
        </div>
    )
};
