import React from "react";
import { Link} from "react-router-dom";
import ButtonFav from "../wishBtn/ButtonFav";
import "./wishesProfile.css";

export default function WishesProfile({ wishes, user }) {
  console.log("!!!!!!!!!!!! PRODUCT WISH", wishes);
  console.log("!!!!!!!!!!!! USER   WISH", user);

  const { name, price, image, _id, brand} = wishes;
  return (
    <div className="itemWishContainer">
      <div className="imgWish">
        <img src={image} alt={"yourWishItem"} />
      </div>

        <div className="infoOfProducts">

          <div className="principalData">
            <div className="tittle">
            <Link  to={'detail/' + _id}>
              <h2>{name}</h2>
            </Link>
              <p>${price}</p>
            </div>
          </div>

          <div className="secondData">
            <div className="brandWish">
              <h3>Brand: {brand}</h3>
              <div className="btnWish">
                <ButtonFav id={_id} user={user} />
              </div>
            </div>
          </div>

        </div>

    </div>
  );
}
