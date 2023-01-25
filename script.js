"use strict";

const simpleColors = ["blue","red","green"]
const btnEl = document.querySelector("#btn")
const bodyEl = document.querySelector("body")
const bacgroundItemEl = document.querySelector(".bacgroundItem div")
const nonRandomEl = document.querySelector(".nonRandom")
const RandomEl = document.querySelector(".Random")
let simpleColorsArrayIndex = 0;
let globalstate = 1



function mutateGlobalVariable(number) {
    globalstate = number
}

nonRandomEl.addEventListener("click",function(){
    mutateGlobalVariable(1)
    console.log(globalstate); 
    nonRandomEl.style.color = "White"
    nonRandomEl.style.backgroundColor = "#51a02e"
    nonRandomEl.style.padding = "5% 5%"
    nonRandomEl.style.borderRadius = "10px"
    RandomEl.style.color = "black"
    RandomEl.style.backgroundColor = "white"
})
RandomEl.addEventListener("click",function(){
    mutateGlobalVariable(2)
    console.log(globalstate); 
    RandomEl.style.color = "White"
    RandomEl.style.backgroundColor = "#C51c1d"
    RandomEl.style.padding = "5% 0"
    RandomEl.style.borderRadius = "10px"
    nonRandomEl.style.color = "black"
    nonRandomEl.style.backgroundColor = "white"
})


btnEl.addEventListener("click",function(){
    if(globalstate == 1){
        simpleColorsArrayIndex = simpleColorsArrayIndex + 1
        if(simpleColorsArrayIndex > 2){
            simpleColorsArrayIndex = 0
        }
        bodyEl.style.backgroundColor = simpleColors[simpleColorsArrayIndex]
        bacgroundItemEl.textContent = `Background Color: ${simpleColors[simpleColorsArrayIndex]}`
    }else if(globalstate == 2){
        bodyEl.style.backgroundColor = `rgb(${indexRandomizer()},
                                            ${indexRandomizer()},
                                            ${indexRandomizer()})`
        bacgroundItemEl.textContent =  `Background Color: rgb(${indexRandomizer()},
                                                              ${indexRandomizer()},
                                                              ${indexRandomizer()})`
    }
})

function indexRandomizer(){
    return Math.trunc(Math.random()*255)+1
}