import {useState , useEffect} from "react"
import RestaurantCard from "./RestaurantCard"
import { Link } from "react-router-dom"
import Shimmer from "./Shimmer"

const Body = () => {
    const[listCardData , setListCardData] = useState([])
    const[filterSearchResult , setFilterSearchResult] = useState([])
    const [searchResult , setSearchResult] = useState("")
    const[isLoading , setIsLoading] = useState(true)
    
    useEffect(()=> {
        fetchData()
    }, [])

    const fetchData = async() => {
        try{
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const data = await response.json();
            setListCardData(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setIsLoading(false)
        }catch(err){
            console.log(err.message)
        }
    } 

    const handleSearch = () => {
     const filterResult = listCardData.filter(restraunt => restraunt?.info?.name === searchResult)
     setFilterSearchResult(filterResult)
    }

    return(
        <div className="main">
            <div className="search">
                <input type = "search" value = {searchResult} onChange={(e) => setSearchResult(e.target.value)}/>
                <button onClick={() => handleSearch()}>Search</button>
            </div>
            <div className="Body">
            {isLoading ? <Shimmer/> :  listCardData?.map((restaurant) => (
               <Link to = {`/${restaurant?.info?.id}`}> <RestaurantCard  key={restaurant?.info?.id} {...restaurant?.info} /> </Link> 
            ))}
            </div>
           
        </div>
    )
}

export default Body