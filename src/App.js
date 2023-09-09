import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Dishes from "./components/Dishes";

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









