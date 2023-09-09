import Dish from "./Dish";
// import dishesData from "../Utility/dishesData";
import { useState } from "react";

let Dishes = () => {
    //Syntax to create a React state
    const [count,setCount] = useState(1);
    const [dishesData,setDishesData] = useState([
        {
            dishName: 'Dish1',
            desc: 'This a dish1',
            cost: 200,
            dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xmcaZkFinVERf4vyvEnffRcJOMKMroeWqA&usqp=CAU'
        },
        {
            dishName: 'Dish2',
            desc: 'This a dish2',
            cost: 100,
            dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd02RKQ46LL2S71YCYBwIhqXzr08Inj0bzQ&usqp=CAU'
        },
        {
            dishName: 'Dish31',
            desc: 'This a dish3',
            cost: 300,
            dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQh3XXJyrVRTVIAAOxBQTMqryS0TiglLhGdQ&usqp=CAU'
        },
        {
            dishName: 'Dish4',
            desc: 'This a dish4',
            cost: 250,
            dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYJrfNAoxnwRM64NxGVvjN8irIf7xCA1BYg&usqp=CAU'
        },
        {
            dishName: 'Dish5',
            desc: 'This a dish5',
            cost: 290,
            dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdeErG724gjA432mulLmfqRvyMGRbaflFZw&usqp=CAU'
        },
        {
            dishName: 'Dish6',
            desc: 'This a dish6',
            cost: 500,
            dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOrndnL96rkFBgjXerUpItr7H29dwQqCk1A&usqp=CAU'
        },
        {
            dishName: 'Dish7',
            desc: 'This a dish7',
            cost: 450,
            dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy93eFEUAIdNSpyBOukGNXJvFplul0F6k0yg&usqp=CAU'
        },
        {
            dishName: 'Dish8',
            desc: 'This a dish8',
            cost: 800,
            dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpvPNtqe9jsEdKNEd0ZuFUdBA_2IIV60_Rw&usqp=CAU'
        },
    ]);

    //Whenever a React state changes, the component is re-rendered.

    // let dishesData = [
    //     {
    //         dishName: 'Dish1',
    //         desc: 'This a dish1',
    //         cost: 200,
    //         dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xmcaZkFinVERf4vyvEnffRcJOMKMroeWqA&usqp=CAU'
    //     },
    //     {
    //         dishName: 'Dish2',
    //         desc: 'This a dish2',
    //         cost: 100,
    //         dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd02RKQ46LL2S71YCYBwIhqXzr08Inj0bzQ&usqp=CAU'
    //     },
    //     {
    //         dishName: 'Dish31',
    //         desc: 'This a dish3',
    //         cost: 300,
    //         dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQh3XXJyrVRTVIAAOxBQTMqryS0TiglLhGdQ&usqp=CAU'
    //     },
    //     {
    //         dishName: 'Dish4',
    //         desc: 'This a dish4',
    //         cost: 250,
    //         dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYJrfNAoxnwRM64NxGVvjN8irIf7xCA1BYg&usqp=CAU'
    //     },
    //     {
    //         dishName: 'Dish5',
    //         desc: 'This a dish5',
    //         cost: 290,
    //         dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdeErG724gjA432mulLmfqRvyMGRbaflFZw&usqp=CAU'
    //     },
    //     {
    //         dishName: 'Dish6',
    //         desc: 'This a dish6',
    //         cost: 500,
    //         dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOrndnL96rkFBgjXerUpItr7H29dwQqCk1A&usqp=CAU'
    //     },
    //     {
    //         dishName: 'Dish7',
    //         desc: 'This a dish7',
    //         cost: 450,
    //         dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy93eFEUAIdNSpyBOukGNXJvFplul0F6k0yg&usqp=CAU'
    //     },
    //     {
    //         dishName: 'Dish8',
    //         desc: 'This a dish8',
    //         cost: 800,
    //         dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpvPNtqe9jsEdKNEd0ZuFUdBA_2IIV60_Rw&usqp=CAU'
    //     },
    // ]
    return (
        <div>
             <h2 style={{textAlign:'center'}}>Dishes</h2>
             <span>Filter: </span>
             <button onClick={()=>{
                setCount(count+1); 
             }}>Change count</button>
             {count}
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