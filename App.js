import React from "react";
import ReactDOM from "react-dom";

// Header
// Introduction
// Dishes
//  ->Dish
// Footer

let dishesData = [
    {
        dishName: 'Dish1',
        desc: 'This a dish1',
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7xmcaZkFinVERf4vyvEnffRcJOMKMroeWqA&usqp=CAU'
    },
    {
        dishName: 'Dish2',
        desc: 'This a dish2',
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd02RKQ46LL2S71YCYBwIhqXzr08Inj0bzQ&usqp=CAU'
    },
    {
        dishName: 'Dish3',
        desc: 'This a dish3',
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQh3XXJyrVRTVIAAOxBQTMqryS0TiglLhGdQ&usqp=CAU'
    },
    {
        dishName: 'Dish4',
        desc: 'This a dish4',
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYJrfNAoxnwRM64NxGVvjN8irIf7xCA1BYg&usqp=CAU'
    },
    {
        dishName: 'Dish5',
        desc: 'This a dish5',
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdeErG724gjA432mulLmfqRvyMGRbaflFZw&usqp=CAU'
    },
    {
        dishName: 'Dish6',
        desc: 'This a dish6',
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOrndnL96rkFBgjXerUpItr7H29dwQqCk1A&usqp=CAU'
    },
    {
        dishName: 'Dish7',
        desc: 'This a dish7',
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy93eFEUAIdNSpyBOukGNXJvFplul0F6k0yg&usqp=CAU'
    },
    {
        dishName: 'Dish8',
        desc: 'This a dish8',
        dishImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpvPNtqe9jsEdKNEd0ZuFUdBA_2IIV60_Rw&usqp=CAU'
    },
]

let Header = () => {
    return (
        <div className="heading">
            <div className="heading-logo">
                <h2>My Restaurant</h2>
            </div>

            <div className="heading-links">
                <ul>
                    <li>About Us</li>
                    <li>Dishes</li>
                    <li>Founders</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

let Introduction = () => {
   return (
        <div className="introduction">
            <div className="introduction-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel finibus metus. Integer lacinia pretium diam, id egestas elit interdum bibendum. Cras posuere mollis velit, quis posuere turpis commodo vel. Maecenas at lacinia lacus. Donec eros nisi, volutpat imperdiet libero quis, blandit bibendum arcu. Quisque quis lacus sapien. Suspendisse semper finibus dictum. Sed venenatis blandit malesuada. In rutrum, ligula sed porttitor consectetur, sapien ex semper libero, nec gravida tellus turpis eu lacus. Sed tempor fringilla elit, aliquet cursus mi viverra at. Proin et sollicitudin tellus. Praesent eu mollis ex. Cras varius lacinia tristique. Morbi pharetra ex mi, eget ornare nisl mollis sit amet.

            Sed placerat, felis in pretium porttitor, neque diam posuere ipsum, ac molestie est tellus ac tortor. Proin molestie sed ligula at mattis. Aliquam eros metus, euismod vel sodales nec, posuere venenatis mi. Fusce pulvinar, massa at sodales maximus, lorem metus mollis nibh, nec faucibus sem nisl a enim. Duis ac congue lacus. Etiam et odio sit amet massa efficitur dapibus id id massa. Suspendisse aliquet sem quis erat scelerisque, ut maximus tortor tincidunt. Mauris id sodales velit, sed condimentum diam. Donec congue magna ligula, porttitor sagittis felis eleifend ut. Etiam et scelerisque ipsum.
            </div>
            <div >
                <img className="introduction-image" src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg"/>
            </div>
        </div>
   )
}

let Dish = (props) => {
    console.log("Props....",props);
    return (
        <div className="dish-card">
            <img className="dish-card-image" src={props.dishImg}/>
            <h4>{props.dishName}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

let Dishes = () => {
    return (
        <div>
             <h2 style={{textAlign:'center'}}>Dishes</h2>
             <div className="dishes-container">
                {dishesData.map((dish)=>{
                    return (
                        <Dish dishName={dish.dishName} desc={dish.desc} dishImg={dish.dishImg}/> 
                    )
                })}
             </div>
           

        </div>
       
    )
}

let MainComponent= () => {
    return (
        <div>
            <Header/>
            <Introduction/>
            <Dishes/>
        </div>
    )
}

let element = document.getElementById('root');
let root = ReactDOM.createRoot(element);

root.render(<MainComponent/>);









