import React, { useState } from "react";
import { Redirect } from "react-router";
import { FaStar } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { LOCALHOST_URL } from "../../redux/constants";
import "./ReviewForm.css";


const colors = {
    orange: "#FFBA5A",
    grey: "a9a9a9"
};




export function ReviewForm({ handleClosePopUp }) {
    const { user } = useAuth0();
    const { id } = useParams();


    const stars = Array(10).fill(0)
    const [rating, setRating] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [review, setReview] = useState("");

    const handleCllick = value => {
        setRating(value);
    };

    const handleMouseOver = value => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const handleChange = e => {
        setReview(e.target.value);
    };



    function handleSubmit(e, review, rating, user, id) {
        e.preventDefault();
        let data = {
            review,
            rating,
            user,
            productrv: id
        }
        axios.post(`${LOCALHOST_URL}/products/review?id=${id}`, data)
            .then(console.log(data, "LA DATAAAAA"))
            .then(window.location.reload())
    }





    
        return (

            <div className="review">
                <div className="title-rating">
                    <h2>Rating</h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e, review, rating, user.nickname, id)} className="form">
                    <div className="stars">
                        {stars.map((star, i) => {
                            return <FaStar
                                key={i}
                                size={24}
                                style={{ marginRight: 10, cursor: "pointer" }}
                                color={(hoverValue || rating) > i ? colors.orange : colors.grey}
                                onClick={() => handleCllick(i + 1)}
                                onMouseOver={() => handleMouseOver(i + 1)}
                                onMouseLeave={handleMouseLeave}
                            />
                        })}
                    </div>
                    <h2 className="reviewUser">{user.nickname}</h2>
                    <textarea
                        resize="none"
                        className="reviewText"
                        value={review}
                        onChange={e => handleChange(e)}
                        placeholder="what's your feedback" />
                    <div className="butons-container">
                        <span type="submit" className="reviewSendBtn" maxlength="200" >Send</span>
                        <span className="reviewBackBtn" onClick={handleClosePopUp}>Back</span>
                    </div>
                </form>

            </div>


        )
  
}