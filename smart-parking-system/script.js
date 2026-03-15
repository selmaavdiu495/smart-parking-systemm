let cars = []

function checkIn(){

let plate = document.getElementById("plate").value

let time = new Date().toLocaleTimeString()

cars.push({
plate:plate,
entry:time
})

showCars()

}

function showCars(){

let list = document.getElementById("cars")

list.innerHTML=""

cars.forEach(car =>{

let li=document.createElement("li")

li.textContent = car.plate + " - " + car.entry

list.appendChild(li)

})

}