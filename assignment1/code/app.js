// const world = document.createElement('h3');
// world.innerHTML = "Hello world from the JS"

// const container = document.getElementById("container");
// container.appendChild(world);

const heading = React.createElement("h3",{},"Hello world from React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(heading)