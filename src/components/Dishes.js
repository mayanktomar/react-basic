import Dish from "./Dish";
import dishesDataInArray from "../Utility/dishesDataInArray";
import { useState, useEffect } from "react";

let Dishes = () => {
    //Syntax to create a React state
    const [dishesData,setDishesData] = useState(dishesDataInArray);
    const [originalDishesData, setOriginalDishesData] = useState(dishesDataInArray);
    const [searchQuery,setSearchQuery] = useState('');

    useEffect(()=>{
        console.log("Inside useEffect");
        //API/Network calls
    },[dishesData])
    
    let onSearchQuery = (value) => {
        console.log("On change event triggered...",value);
        setSearchQuery(value);
    }

    let filterDishesBasedOnSearch = () => {
        let filteredDishesData = originalDishesData.filter((dish)=>{
            return dish.dishName.toLowerCase().includes(searchQuery.toLowerCase());
        })

        setDishesData(filteredDishesData);
    }
    return (
        <div>
             <h2 style={{textAlign:'center'}}>Dishes</h2>

             <span>Search: </span>
             {/* <input value={searchQuery} onChange={(event)=>{onSearchQuery(event.target.value)}}/>   */}
             <input value={searchQuery} onChange={(event)=>{onSearchQuery(event.target.value)}}/>
             <button onClick={()=>{filterDishesBasedOnSearch()}}>Search Dish</button>
             <br/>
             <br/>

             <span>Filter: </span>
             <button className="filter-btn" onClick={()=>{
                let filteredDishes = dishesData.filter((dish)=>{
                    return (dish.cost>300);
                })
                console.log("FIltered dishes...",filteredDishes);
                setDishesData(filteredDishes);
             }}>Greater than 300</button>
             <br/>
             <br/>
             <div className="dishes-container">
                {dishesData.map((dish)=>{
                    return (
                        <Dish dishName={dish.dishName} desc={dish.desc} dishImg={dish.dishImg} cost={dish.cost}/> 
                    )
                })}
             </div>
        </div>
       
    )
}

export default Dishes;