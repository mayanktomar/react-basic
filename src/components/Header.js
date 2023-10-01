import { useState } from "react";
import { Link } from "react-router-dom";

let Header = () => {

    const [buttonText,setButtonText] = useState("Login");
    return (
        <div className="heading">
            <div className="heading-logo">
                <h2><Link to="/">My Restaurant</Link></h2>
            </div>

            <div className="heading-links">
                <ul>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/Dishes">Dishes</Link></li>
                    <li><Link to="/founders">Founders</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><button onClick={()=>{
                        buttonText=="Login" ? setButtonText("Logout") : setButtonText("Login");
                        console.log("Button text value...",buttonText);
                    }}>{buttonText}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;