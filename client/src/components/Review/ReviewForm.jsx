import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { LOCALHOST_URL } from "../../redux/constants";
import { getReviews } from "../../redux/actions/index";

const colors = {
    orange: "#FFBA5A",
    grey: "a9a9a9"
};




export function Review() {
    const { user, isAuthenticated } = useAuth0();
    const {id} = useParams();
    const dispatch = useDispatch()

    const stars = Array(5).fill(0)
    const reviews = useSelector(state => state.reviews)
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

    useEffect(() => {
        if (user?.email) {
            dispatch(getReviews(id))
        }
    }, [user])


    function sendReview(e, review, rating, user, id) {
        e.preventDefault();
       let data = {
            review: review,
            rating: rating,
            user: user,
            id: id
        }
        axios.post(`${LOCALHOST_URL}/review`, data)
        .then(console.log(data))
    }

     



if(isAuthenticated) {
        return (
            <div className="review">
                <h2>Rating</h2>
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
                <h2 className="reviewUser">{user.email}</h2>
                <textarea
                    value={review}
                    onChange={e => setReview(e.target.value)}
                    placeholder="what's your feedback" />
                <button onSubmit={sendReview} >Submit</button>
            </div>

        )
    }
} 