import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/context";
import { useContext } from "react";

let Header = () => {
    const loginState = useContext(LoginContext); 
    // {
    //     isLoggedIn: false,
    //     setIsLoggedIn: function
    // }
    const [buttonText,setButtonText] = useState("Login");

    function changeLoginState() {
        buttonText=="Login" ? loginState.setIsLoggedIn(true) : loginState.setIsLoggedIn(false);
        buttonText=="Login" ? setButtonText("Logout") : setButtonText("Login");
        console.log("Button text value...",buttonText);
    }
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
                        changeLoginState()
                    }}>{buttonText}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;