const dataArray = [
    "When we want to import a module into our Node.js project, we use the function “require(“name-of-module-here”)”",
    "When calling the require function, it will first look for built-in core node.js modules.",
    "Then it will search for NPM modules, in the node_modules folder and then it will look for local modules.",
    "Using “./” it will look for the directory/file in the given path.",
    "Examples of built-in modules are fs, http or url, NPM modules could be “express” and local modules are whatever we make ourselves."
]



document.getElementById('express-start').addEventListener("click", nextElement)


dataArray.map((string) => {
    const div = document.createElement('div');
    div.style.display = "none";
    div.innerText = string;
    div.addEventListener("click", nextElement)

    createIsland(div); 

    document.getElementById('step').append(div);
})


function nextElement() {
    console.log(this);
    if (this.nextElementSibling) {
        this.nextElementSibling.style.display = "";
    }
    this.removeEventListener("click", nextElement);
}


createIsland(document.getElementById('express-start'));