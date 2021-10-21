import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from 'react-icons/fa'
import { useParams } from "react-router";
import { useEffect } from "react";
import { getSingleProduct, updateProduct } from "../../redux/actions";
import { categories } from '../Categories/categoriesExport'

let AllCategories = []

for (let key in categories) {
    AllCategories = [...AllCategories, ...categories[key]]
}

export default function EditableRow({ handleClosePopup, id }) {

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

    // const { id } = useParams();
    const dispatch = useDispatch()
    const { name, description, image, price, stock, brand, model, category } = items;

    useEffect(() => {
        console.log(id)
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
        dispatch(updateProduct({...items, _id: id}));
        alert("Product updated successfully")

        setItems({
            name: '',
            description: '',
            image: '',
            price: '',
            stock: '',
            brand: '',
            model: '',
            category: ''
        });
        handleClosePopup();
    }

    return (
        <div className='backgroundCreateProducts containerformProducts'>
            <form
                onSubmit={e => {
                    handleSubmit(e)
                    /* resetFileInput() */
                }}
                className='formCreateProducts containerformProducts'
            >
                <div>
                    <button
                        onClick={() => {
                            handleClosePopup()
                            setItems({
                                name: '',
                                description: '',
                                image: '',
                                price: '',
                                stock: '',
                                brand: '',
                                model: '',
                                category: ''
                            })
                        }}
                        className='btnCloseFormProducts'
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className='containerformProducts'>
                    <label className='labelCreateProducts'>
                        Name:
                    </label>
                    <input value={name} onChange={handleInputChange} name="name" className='inputCreateProducts'/>
                </div>
                <div className='containerformProducts'>
                    <label className='labelCreateProducts'>
                        Description:
                    </label>
                    <textarea value={description} rows="10" onChange={handleInputChange} name="description" className='inputCreateProducts'/>
                </div>
                <div className='containerformProducts'>
                    <label className='labelCreateProducts'>
                        Price:
                    </label>
                    <input value={price} onChange={handleInputChange} name="price" className='inputCreateProducts'/>
                </div>
                <div className='containerformProducts'>
                    <label className='labelCreateProducts'>
                        Stock:
                    </label>
                    <input value={stock} onChange={handleInputChange} name="stock" className='inputCreateProducts'/>
                </div>
                <div className='containerformProducts'>
                    <label className='labelCreateProducts'>
                        Brand:
                    </label>
                    <input value={brand} onChange={handleInputChange} name="brand" className='inputCreateProducts'/>
                </div>
                <div className='containerformProducts'>
                    <label className='labelCreateProducts'>
                        Model:
                    </label>
                    <input value={model} onChange={handleInputChange} name="model" className='inputCreateProducts'/>
                </div>
                <div className='containerformProducts'>
                    <label className='labelCreateProducts'>
                        Category:
                    </label>
                    <select
                        name='category'
                        onChange={handleInputChange}
                        value={category}
                        className='inputCreateProducts'
                    >
                        <option value=''>Select Category</option>
                        {AllCategories.map(categoryOfArray =>
                            <option value={categoryOfArray} key={categoryOfArray} selected={category === categoryOfArray}>{categoryOfArray}</option>
                        )}
                    </select>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Update"
                        className='btnCreate'
                    />
                </div>
            </form>
        </div>
    )
};
