import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductsByName} from '../../redux/actions'
import { BsSearch } from "react-icons/bs";
import "./searchBar.css";

export const Search = () => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)  
    };

    const handleClick = (e) =>{
        e.preventDefault()
        dispatch(getProductsByName(inputValue))
        setInputValue("");
}

    return (
        <div className="container-search">
            <div className="search-box">
                <form className="search-form" onClick={handleClick}>
                    <input
                        className = "search-text"
                        placeholder="Search musical instruments"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className='search-button' type='submit'>   
                        <span><BsSearch/></span>
                    </button>             
                </form>
            </div>
        </div>
    );
};
