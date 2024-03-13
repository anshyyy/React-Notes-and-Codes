/*
Parcel : 
- Hot Module Reloading
- File Watcher algorithm C++
- Bundling
- Cleaning our code
- dev and production build
- super fast build algorithm
- Image optimization
- Caching while development
- Compatible with older version of browsers
- it also test on https
- port Number
- Consistent Hashing Algorithms
- Zero Config Bundler 

*/


import React from "react";
import ReactDOM from "react-dom/client";


const h1 = React.createElement('h1',{
    id:"h1a"
},"Hello world");

const h2 = React.createElement('h2',{
    id:"h2a"
},"Hello world 2");

const div = React.createElement("div",{
    id : "container"
},[h1,h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);