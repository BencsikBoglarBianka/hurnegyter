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
    const Aside = AsideInput.value
    const Bside = BsideInput.value
    const Cside = CsideInput.value
    const Dside = DsideInput.value
    const felkerulet = (Aside+ Bside +Cside+ Dside)/2
    const terulet =(Math.sqrt((felkerulet - Aside)*(felkerulet-Bside)*(felkerulet-Cside)*(felkerulet-Dside)))

    perimeterInput.value = terulet
}

