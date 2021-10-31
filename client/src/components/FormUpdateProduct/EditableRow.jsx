import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from 'react-icons/fa';
//import { useParams } from "react-router";
import { useEffect } from "react";
import { getSingleProduct, updateProduct } from "../../redux/actions";
import { categories } from '../Categories/categoriesExport';
import { saveImages } from '../FormCreateProducts/utils/saveImages';
import { validationFunction } from '../FormCreateProducts/utils/validationFunction';
import AlertPopup from '../AlertPopups/AlertPopups'

let AllCategories = []

for (let key in categories) {
    AllCategories = [...AllCategories, ...categories[key]]
}

export default function EditableRow({ handleClosePopup, id }) {
    const refFileInput = useRef();

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
    const [errorsProducts, setErrorsProducts] = useState({});

    // const { id } = useParams();
    const dispatch = useDispatch()
    const { name, description, image, price, stock, brand, model, category } = items;

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [])

    useEffect(() => {
        setItems(product)
    }, [product])

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setItems({ ...items, [name]: value });

        setErrorsProducts(validationFunction({ ...items, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handeOpenAlertUpgrade();

        // handleClosePopup()
    }

    const resetFileInput = () => {
        refFileInput.current.value = "";
    };

    const [activeAlertUpgrade, setactiveAlertUpgrade] = useState(false);
    const handeOpenAlertUpgrade = () => {
        setactiveAlertUpgrade(!activeAlertUpgrade)
    }

    const [successForm, setsuccessForm] = useState(false);
    const handleUpgradeSuccesForm = () => {
        setsuccessForm(!successForm)
    }

    useEffect(async () => {
        if (successForm) {
            let auxInput = items;
            const urlImage = await saveImages(auxInput.image);
            auxInput.image = urlImage;

            dispatch(updateProduct({ ...auxInput, _id: id }));

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

            handleUpgradeSuccesForm()
        }
    }, [successForm])

    return (
        <div className='backgroundCreateProducts containerformProducts'>
            <form
                onSubmit={e => {
                    handleSubmit(e)
                    resetFileInput()
                }}
                className='formCreateProducts containerformProducts'
            >
                <div>
                    <span
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
                    </span>
                </div>

                <div>
                    <div className='containerformProducts'>
                        <label className='labelCreateProducts'>
                            Name:
                        </label>
                        <input value={name} onChange={handleInputChange} name="name" className='inputCreateProducts' required />
                    </div>

                    {errorsProducts.name && (
                        <p className='errorText'>{errorsProducts.name}</p>
                    )}
                </div>

                <div>
                    <div className='containerformProducts'>
                        <label className='labelCreateProducts'>
                            Description:
                        </label>
                        <textarea value={description} rows="10" onChange={handleInputChange} name="description" className='inputCreateProducts' required />
                    </div>

                    {errorsProducts.description && (
                        <p className='errorText'>{errorsProducts.description}</p>
                    )}
                </div>


                <div className='containerformProducts'>
                    <label className='labelCreateProducts'>Image:</label>
                    <input
                        type='file'
                        name='image'
                        onChange={e => handleInputChange({ target: { name: e.target.name, value: e.target.files[0] } })}
                        placeholder='Image of Product'
                        className='inputCreateProducts'
                        ref={refFileInput}
                    //required
                    />
                </div>

                <div>
                    <div className='containerformProducts'>
                        <label className='labelCreateProducts'>
                            Price:
                        </label>
                        <input value={price} onChange={handleInputChange} name="price" className='inputCreateProducts' required />
                    </div>

                    {errorsProducts.price && (
                        <p className='errorText'>{errorsProducts.price}</p>
                    )}
                </div>
                <div>
                    <div className='containerformProducts'>
                        <label className='labelCreateProducts'>
                            Stock:
                        </label>
                        <input value={stock} onChange={handleInputChange} name="stock" className='inputCreateProducts' required />
                    </div>

                    {errorsProducts.stock && (
                        <p className='errorText'>{errorsProducts.stock}</p>
                    )}
                </div>

                <div>
                    <div className='containerformProducts'>
                        <label className='labelCreateProducts'>
                            Brand:
                        </label>
                        <input value={brand} onChange={handleInputChange} name="brand" className='inputCreateProducts' required />
                    </div>

                    {errorsProducts.brand && (
                        <p className='errorText'>{errorsProducts.brand}</p>
                    )}
                </div>

                <div>
                    <div className='containerformProducts'>
                        <label className='labelCreateProducts'>
                            Model:
                        </label>
                        <input value={model} onChange={handleInputChange} name="model" className='inputCreateProducts' required />
                    </div>

                    {errorsProducts.model && (
                        <p className='errorText'>{errorsProducts.model}</p>
                    )}
                </div>

                <div>
                    <div className='containerformProducts'>
                        <label className='labelCreateProducts'>
                            Category:
                        </label>
                        <select
                            name='category'
                            onChange={handleInputChange}
                            value={category}
                            className='inputCreateProducts'
                            required
                        >
                            <option value=''>Select Category</option>
                            {AllCategories.map(categoryOfArray =>
                                <option value={categoryOfArray} key={categoryOfArray} selected={category === categoryOfArray}>{categoryOfArray}</option>
                            )}
                        </select>
                    </div>

                    {errorsProducts.category && (
                        <p className='errorText'>{errorsProducts.category}</p>
                    )}
                </div>
                <div>
                    <input
                        type='submit'
                        value='Update'
                        className={Object.keys(errorsProducts).length === 0 ? 'btnCreate' : 'greyBtnCreate'}
                        diabled={Object.keys(errorsProducts).length === 0}
                    />
                </div>
            </form>

            <AlertPopup
                activeAlert={activeAlertUpgrade}
                actionAlert='update'
                handleOpenAlert={handeOpenAlertUpgrade}
                handleSuccess={handleUpgradeSuccesForm}
            />
        </div>
    )
};
