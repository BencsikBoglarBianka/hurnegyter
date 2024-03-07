/*
* File: app.js
* Author:  Bencsik Boglár Bianka
* Copyright: 2024, Bencsik Boglár Bianka 
* Group: Szoft I-1-N
* Date: 2024-03-07
* Github: https://github.com/BencsikBoglarBianka/hurnegyter.git
*/


const AsideInput = document.querySelector("#Aside")
const BsideInput = document.querySelector("#Bside")
const CsideInput = document.querySelector("#Cside")
const DsideInput = document.querySelector("#Dside")

const perimeterInput = document.querySelector("#perimeter")

const calcButton = document.querySelector("#calcbutton")

calcButton.addEventListener('click', () => { 
    startCalc();
});

function startCalc(){
    const Aside = Number(AsideInput.value)
    const Bside = Number(BsideInput.value)
    const Cside = Number(CsideInput.value)
    const Dside = Number(DsideInput.value)
    const felkerulet = (Aside+ Bside +Cside+ Dside)/2
    const terulet =Math.sqrt((felkerulet - Aside)*(felkerulet-Bside)*(felkerulet-Cside)*(felkerulet-Dside))
    console.log("Területe: ", terulet)

    // perimeterInput = calcPerimeter()
    perimeterInput.value = terulet
}

// function calcPerimeter(){
//     const felkerulet = (Aside+ Bside +Cside+ Dside)/2
//     const terulet =(Math.sqrt((felkerulet - Aside)*(felkerulet-Bside)*(felkerulet-Cside)*(felkerulet-Dside)))


// }

