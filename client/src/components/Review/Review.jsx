import React from 'react';
import "./Review.css"
import { FaStar } from 'react-icons/fa';

const color = {
    orange: "#FFBA5A"
}

function Review({ review, rating, user }) {


    return (
        
        <div className="reviewContainer">
            <div className="info-review">
                <div className="review-user">
                    <h3 className="reviewUser"> User: {user} </h3>
                </div>
                <div className="ratingReview">
                    <h3 className="ratingProduct">Rating: <FaStar
                        size={18}
                        color={color.orange} />
                        {rating}
                    </h3>
                </div>
                <div className="ratingReview">
                    <h3 className="reviewText"> "{review}" </h3>
                </div>
            </div>

        </div>
    );
}

export default Review