import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./ReviewCard.css"
import { FaStar } from 'react-icons/fa';




function ReviewCard({ reviews }) {
    console.log(reviews)





    return (

        <div className="containerReviews">
           
            <div className="infoReviewsContainer">
                <h2>Reviews</h2>
                {reviews.length > 0 
                    ? <div className="cardsReviewsContainer">
                        {reviews.map(e => {
                            return < Review review={e.review} user={e.user} rating={e.rating} />
                        })}
                    </div>

                    : <div  className='reviewContainer'>
                        <div className='noReviewsStar'>
                            <FaStar />
                        </div>

                        <div className='noReviewsH4'>
                            <h4>
                                No reviews yet
                            </h4>
                        </div>
                    </div>
                }
            </div>


        </div>


    );
}

export default ReviewCard