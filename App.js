import React from "react";
import ReactDOM from "react-dom";


let content = React.createElement('div',{id:'div1'},
React.createElement('div',{id:'div234'},
[   
    React.createElement('h1',{},"Heading"),
    React.createElement('p',{},"This is a test paragraph"),
]
));

console.log("Content...",content);

let element = document.getElementById('root');
let root = ReactDOM.createRoot(element);

root.render(content);

{/* <div id="div1">
    <div id="div2">
        <h1>Heading</h1>
        <p>This is a test paragraph</p>
    </div>
</div> */}






