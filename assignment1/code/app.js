// const world = document.createElement('h3');
// world.innerHTML = "Hello world from the JS"

// const container = document.getElementById("container");
// container.appendChild(world);

const h1 = React.createElement("h1",{
    id:"id1"
},"Hello world from React");

const h2 = React.createElement("h2",{
    id:"id2"
},"Hello from React");

const div = React.createElement("div",{
    id:"container"
},[h1,h2])

//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(div)  