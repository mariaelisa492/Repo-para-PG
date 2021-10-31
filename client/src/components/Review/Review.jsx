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
              
                <div className="ratingReview">
                    <h3 className="ratingProduct">Rating: <FaStar
                        size={18}
                        color={color.orange} />
                        {rating}
                    </h3>
                </div>
                <div className="ratingReview">
                    <p className="reviewTextUser"> {user} said...   </p>
                    <p className="reviewText2">  "{review}" </p>
                </div>
            </div>

        </div>
    );
}

export default Review