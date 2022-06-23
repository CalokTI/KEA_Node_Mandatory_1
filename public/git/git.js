const dataArray = [
    "Click",
    "git add 'file' or -A for all",
    "git commit -m \"message\"",
    "git push | uploads your committed data to previously set repository or --set-upstream <remote> <name-of-your-branch>",
    "git pull | combination of git fetch and merge, pulls from repository and merges with current data",
    "git clone | clones repository"
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