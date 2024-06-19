let gridHolder = document.querySelector(".gridHolder")
let changer = document.querySelector("#changer")
let eraser = document.querySelector("#eraser")
let black = document.querySelector("#black")
let white = document.querySelector("#white")
let red = document.querySelector("#red")
let random = document.querySelector("#random")
let light = document.querySelector("#light")
let clear = document.querySelector("#clear")

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
gridFill.style.backgroundColor = "rgb(235, 235, 235)"
gridFill.style.borderStyle = ""
gridFill.style.opacity = 0

changer.addEventListener("click", () => {
    let grids = prompt("Grid size? (Up to 100) [Defaults to 16]")
    if (grids == ""){
        yapper(16)
        changer.textContent = "16x16"
    }
    else if (grids <= 0){
        yapper(16)
        changer.textContent = "16x16"
    }
    else if (grids <= 100){
        yapper(grids)
        changer.textContent = "" + grids + "x" + grids
    }
    else {
        yapper(16)
        changer.textContent = "16x16"
    }
})

//makes paintable
let gridders = 16
let golor = "black"
function paintable(color = golor, griterate = 16, opacc = "on"){
    let paintable = document.querySelectorAll(".Grid")
    for (let i = 0; i < (griterate ** 2); i++) {
        let opac = Number(paintable[i].style.opacity)
        paintable[i].addEventListener("dragleave", () => {
            if (opacc == "off"){
                opac = 0
            }
            else {
                if (opac < 0.9){
                    opac += 0.1
                }
            }
            paintable[i].style.opacity = opac
            paintable[i].style.backgroundColor = color
        })
        paintable[i].addEventListener("click", () => {
            if (opacc == "off"){
                opac = 0
            }
            else if (opacc == "erase"){
                opac = 0.1
            }
            else {
                if (opac < 0.9){
                    opac += 0.1
                }
            }
            paintable[i].style.opacity = opac
            paintable[i].style.backgroundColor = color
        })
    }
}

black.addEventListener("click", () => {
    console.log("BLACK")
    paintable("black", gridders)
})

white.addEventListener("click", () => {
    console.log("WHITE")
    paintable("white", gridders)
})

red.addEventListener("click", () => {
    console.log("RED")
    paintable("red", gridders)
})

eraser.addEventListener("click", () => {
    console.log("ERASER")
    paintable(gridFill.style.backgroundColor, gridders, "off")
})

//random paintable
function randNum(){
    let quickmafs = Math.round(Math.random()*1000)
    if (quickmafs > 256){
        quickmafs = quickmafs % 256
    }
    return quickmafs
}

function randRGB(){
    let RGB = "rgb(" + randNum() + ", " + randNum() + ", " + randNum() + ")"
    return RGB
}

function paintableRand(griterate = 16){
    let paintable = document.querySelectorAll(".Grid")
    for (let i = 0; i < (griterate ** 2); i++) {
        paintable[i].addEventListener("dragleave", () => {
            paintable[i].style.opacity = 1
            paintable[i].style.backgroundColor = randRGB()
        })
        paintable[i].addEventListener("click", () => {
            paintable[i].style.opacity = 1
            paintable[i].style.backgroundColor = randRGB()
        })
    }
}

random.addEventListener("click", () => {
    console.log("RANDOM")
    paintableRand(gridders)
})

//lightener
function lightener(griterate = 16){
    let paintable = document.querySelectorAll(".Grid")
    for (let i = 0; i < (griterate ** 2); i++) {
        let opac = Number(paintable[i].style.opacity)
        paintable[i].addEventListener("dragleave", () => {
            if (opac == 1){
                console.log(paintable[i].style.opacity)
                console.log("damn")
                paintable[i].style.opacity = 0
            }
            else if (opac > 1){
                console.log("damn")
            }
            else if (opac > 0){
                opac -= 0.1
                paintable[i].style.opacity = opac
                console.log(paintable[i].style.opacity)
            }
        })
        paintable[i].addEventListener("click", () => {
            if (opac == 0){
                console.log(paintable[i].style.opacity)
                paintable[i].style.opacity = 0
            }
            else if (opac > 0){
                opac -= 0.1
                paintable[i].style.opacity = opac
                console.log(paintable[i].style.opacity)
            }
        })
    }
}

light.addEventListener("click", () => {
    console.log("LIGTHENER")
    lightener(gridders)
})

//clears
clear.addEventListener("click", () => {
    let paintable = document.querySelectorAll(".Grid")
    let erazer = gridFill.style.backgroundColor
    for (let i = 0; i < (gridders ** 2); i++) {
        paintable[i].style.backgroundColor = erazer
        paintable[i].style.opacity = 0.1
    }
    console.log("CLEARED")
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
            gFill.classList = "Grid " + (i+1) + "-" + (j+1)
            rows.appendChild(gFill)
        }

    }
    gridders = grids
    //adds paintable code to each grid
    paintable("black", grids)
}

yapper()



