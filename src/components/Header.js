import { useState } from "react";

let Header = () => {

    const [buttonText,setButtonText] = useState("Login");
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