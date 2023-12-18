import {useState , useEffect} from "react"
import { useParams } from "react-router-dom"


const RestaurantMenu = () => {
 let {restrauntId}  = useParams() 
 const [menudata , setMenuData] = useState([]);

  useEffect(() => {
    fetchMenuData();
  } ,[])


  const fetchMenuData = async() => {
    try{
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${restrauntId}&catalog_qa=undefined&submitAction=ENTER`)
      const data = await response.json()
      setMenuData(data?.data?.cards)
    }catch(err){
      console.log(err)
    }
  }


    return(
        <div className="restraunt_menu">
          {menudata.map(item => (
            <div className="menudata_items">
             <h2>{item?.card?.card?.info?.name}</h2>
             <p>{item?.card?.card?.info?.locality} {item?.card?.card?.info?.city}</p>
             <p>{item?.card?.card?.info?.feeDetails?.message}</p>
             <p>{item?.card?.card?.info?.costForTwoMessage}</p>
            </div>
           
          ))}
        </div>
    )
}

export default RestaurantMenu