let gridHolder = document.querySelector(".gridHolder")
let changer = document.querySelector("#changer")

let gridRow = document.createElement("div")
gridRow.style.display = "flex"
gridRow.style.flex = "1"
gridRow.classList = ""

let gridFill = document.createElement("div")
gridFill.style.display = "flex"
gridFill.style.flex = "1"
gridFill.style.alignItems = "center"
gridFill.style.justifyContent = "center"
gridFill.style.fontSize = "8px"
gridFill.classList = ""
gridFill.style.backgroundColor = "azure"

changer.addEventListener("click", () => {
    let grids = prompt("How many? (Up to 100)")
    yapper(grids)
    
})

function yapper(grids = 16){
    gridHolder.innerHTML = ""
    //creates the Rows
    for (let i = 0; i < grids; i++) {
        let gRow = gridRow.cloneNode()
        gRow.classList = "row" + (i + 1)
        gRow.textContent = ""
        gridHolder.appendChild(gRow)
    }

    //fills in the Rows
    for (let i = 0; i < grids; i++) {
        let querySelector = ".row" + (i + 1)
        let rows = document.querySelector(querySelector)
        for (let j = 0; j < grids; j++) {
            let gFill = gridFill.cloneNode()
            gFill.classList = "Grid-" + (i+1) + "-" + (j+1)

            // gFill.textContent = j + 1
            // gFill.textContent = i * grids + j + 1

            rows.appendChild(gFill)
        }

    }
}

yapper()

