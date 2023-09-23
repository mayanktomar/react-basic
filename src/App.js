import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Dishes from "./components/Dishes";
import Users from "./components/Users";

let MainComponent= () => {
    return (
        <div>
            <Header/>
            <Introduction/>
            <Users/>
            <Dishes/>
        </div>
    )
}

let element = document.getElementById('root');
let root = ReactDOM.createRoot(element);

root.render(<MainComponent/>);









