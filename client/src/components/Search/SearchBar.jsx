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

    const handleClick = () =>{
        dispatch(getProductsByName(inputValue))
        setInputValue("");
}

    return (
        <div className="search">
            <div>
                <input
                    placeholder="Search products"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleClick}>
                     <BsSearch/> 
                </button>
            </div>
        </div>
    );
};
