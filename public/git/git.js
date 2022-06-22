const dataArray = [
    "Click",
    "Click",
    "Click",
    "Click",
    "Click",
    "Click"
]



document.getElementById('git-start').addEventListener("click", nextElement)


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


createIsland(document.getElementById('git-start'));