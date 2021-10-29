import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./ReviewCard.css"





function ReviewCard({ reviews }) {
    console.log(reviews)





    return (

        <div className="containerReviews">
           
            <div className="infoReviewsContainer">

                <div className="cardsReviewsContainer">
                    {reviews.map(e => {
                        return < Review review={e.review} user={e.user} rating={e.rating} />
                    })}
                </div>
            </div>


        </div>


    );
}

export default ReviewCard