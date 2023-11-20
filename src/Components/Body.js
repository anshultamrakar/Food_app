import {useState , useEffect} from "react"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    const[listCardData , setListCardData] = useState([])
    
    useEffect(()=> {
        fetchData()
    }, [])


    const fetchData = async() => {
        try{
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const data = await response.json();
            setListCardData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }catch(err){
            console.log(err.message)
        }
    } 

    return(
        <div className="Body">
            <button >Top Rated Restraunt</button>
            {listCardData?.map((restaurant) => (
                <RestaurantCard {...restaurant?.info} />
            ))}
        </div>
    )
}

export default Body