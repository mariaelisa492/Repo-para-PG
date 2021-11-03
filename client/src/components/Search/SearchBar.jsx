import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete } from "../Autocomplete/Autocomplete";
import {getProductsByName} from '../../redux/actions'
import { FaSearch } from 'react-icons/fa';
import "./searchBar.css";

export const Search = ({ hideFunc }) => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products);

    const [input, setInput] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(getProductsByName(input))
        setInput("");
        if (typeof hideFunc === 'function') hideFunc();
    }

    const productsName = () => {
        const names = products.map(product => product.name)
        return names
    }

    return (
        <div className="container-search">
            <div className="search-box">
                <form className="search-form" onSubmit={handleSubmit}>
                    <AutoComplete
                        suggestions={
                            productsName()
                        }
                        input={input}
                        setInput={setInput}
                    />
                    <button className='search-button' type='submit'>   
                        <span><FaSearch /></span>
                    </button>             
                </form>
            </div>
        </div>
    );
};
