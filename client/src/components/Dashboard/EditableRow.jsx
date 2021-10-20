import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getSingleProduct, updateProduct } from "../../redux/actions";
import { categories } from '../Categories/categoriesExport'
import "./EditableRow.css";

let AllCategories = []

for (let key in categories) {
    AllCategories = [...AllCategories, ...categories[key]]
}

export default function EditableRow() {

    const product = useSelector((state) => state.product)

    const [items, setItems] = useState({
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
    const { name, description, image, price, stock, brand, model, category } = items;

    useEffect(() => {
        dispatch(getSingleProduct(id))
        console.log("dispachado el single user")
    }, [])

    useEffect(() => {
        setItems(product)
    }, [product])

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setItems({ ...items, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateProduct(items, id));
        alert("Product updated successfully")
    }

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
                    <input value={name} onChange={handleInputChange} name="name" />
                </div>
                <div>
                    <h4>
                        Description:
                    </h4>
                    <textarea value={description} rows="10" onChange={handleInputChange} name="description" />
                </div>
                <div>
                    <h4>
                        Price:
                    </h4>
                    <input value={price} onChange={handleInputChange} name="price" />
                </div>
                <div>
                    <h4>
                        Stock:
                    </h4>
                    <input value={stock} onChange={handleInputChange} name="stock" />
                </div>
                <div>
                    <h4>
                        Brand:
                    </h4>
                    <input value={brand} onChange={handleInputChange} name="brand" />
                </div>
                <div>
                    <h4>
                        Model:
                    </h4>
                    <input value={model} onChange={handleInputChange} name="model" />
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
