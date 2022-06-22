/*
document.addEventListener("click", (event) => {
    console.log("clicked");
    const div = document.createElement('div');
    div.style.height = "40px";
    div.style.width = "40px";
    document.getElementById('water').append(div);
    createIsland(div);

})
*/

//change background color as well
function createIsland(element) {
    element.classList.add("island");

    element.style.borderRadius = randomInt(30, 70) + "%" + randomInt(30, 70) + "%" + randomInt(30, 70) + "%" + randomInt(30, 70) + "%" + "/"
        + randomInt(30, 70) + "%" + randomInt(30, 70) + "%" + randomInt(30, 70) + "%" + randomInt(30, 70) + "%";
    
    element.style.padding = "20px";
    element.style.margin = "40px";

    
    element.style.width = randomInt(100, 200) + "px";
    element.style.height = randomInt(100, 150) + "px";

    element.style.marginLeft = randomInt(0, 800) + "px";

    
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}