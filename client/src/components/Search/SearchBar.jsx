import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductsByName} from '../../redux/actions'
import { BsSearch } from "react-icons/bs";
import { FaSearch } from 'react-icons/fa';
import "./searchBar.css";

export const Search = ({ hideFunc }) => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)  
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(getProductsByName(inputValue))
        setInputValue("");
        if (typeof hideFunc === 'function') hideFunc();
}

    return (
        <div className="container-search">
            <div className="search-box">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input
                        className = "search-text"
                        placeholder="Search musical instruments"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className='search-button' type='submit'>   
                        <span><FaSearch /></span>
                    </button>             
                </form>
            </div>
        </div>
    );
};
