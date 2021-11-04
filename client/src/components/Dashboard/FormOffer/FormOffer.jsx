import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { LOCALHOST_URL } from '../../../redux/constants';
import { toggleUpdate } from '../../../redux/actions';




export function FormOffer({ id, price, oldPrice, handleClosePopup }) {
    const dispatch = useDispatch();
    const [newPrice, setNewPrice] = useState(price);
    const [newOldPrice, setNewOldPrice] = useState(oldPrice);



    const updateOffer = async (id, newOldPrice, newPrice) => {
        dispatch(toggleUpdate())
        try {
            await axios.put(`${LOCALHOST_URL}/products/${id}`, {
                oldPrice: newOldPrice,
                price: newPrice
            })
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(toggleUpdate())
            handleClosePopup()
        }
    }







    const handleSubmit = (e, newOldPrice, newPrice) => {
        e.preventDefault();
        if (newPrice < newOldPrice) {
            updateOffer(id, newOldPrice, newPrice);

        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'newPrice') {
            setNewPrice(value);
        } else if (name === 'newOldPrice') {
            setNewOldPrice(value);
        }
    }


    const handleClose = (e) => {
        e.preventDefault();
        handleClosePopup();
    }




    return (
        <div className="questionForm">
            <form className='form' onSubmit={(e) => handleSubmit(e, newOldPrice, newPrice)}>
                <div className="product-price">
                    <small>Old Price</small>
                    <input name="newOldPrice" type="number" className="select-mysales" placeholder={oldPrice} value={newOldPrice} onChange={handleChange} />
                </div>
                <div className="product-price2">
                    <span>Sale!</span>
                    <input name="newPrice" type="number" className="select-mysales" placeholder={price} value={newPrice} onChange={handleChange} />
                </div>


                <div className='butons-container' >
                    <button type="button" onClick={handleClose}>Back</button>
                    <button type="submit">Send</button>
                </div>

            </form>

        </div>
    )
}


