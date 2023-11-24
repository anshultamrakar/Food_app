import { IMG_CDN_URL } from "../utils/Constants";

const RestaurantCard = ({name , cloudinaryImageId , cuisines , areaName}) => {
    return(
        <div className="restraunt_card">
            <img src = {IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines}</h5>
            <h5>{areaName}</h5>
        </div>
    )
}

export default RestaurantCard;