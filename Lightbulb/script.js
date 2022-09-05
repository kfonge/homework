// alert("I am connected")

//select button's container div using id and store it in variable lightSwitch,
const lightSwitch = document.querySelector("#switch")

//create button
const btn1 = document.createElement("button")
// console.log(btn1)
btn1.innerHTML = "Power On"
//add btn class for some styling
btn1.classList.add("btn")

//append btn to the div with switch id
lightSwitch.appendChild(btn1)

//visual change #1 on hover, button font size and background changes
btn1.addEventListener("mouseover", (evt) => {
  document.querySelector(".btn").classList.add("white")
})

btn1.addEventListener("mouseout", (evt) => {
  document.querySelector(".btn").classList.remove("white")
})

const img = document.getElementById("bulb on")

btn1.addEventListener("click", (evt) => {
  let paragraph = document.querySelector("#para")
  if (btn1.innerHTML == "Power On") {
    btn1.innerHTML = "Power Off"
    document.body.style.backgroundColor = "rgb(142, 234, 234)"
    paragraph.textContent = "Now, let there be light!"
    img.src =
      "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png"
  } else if (btn1.innerHTML == "Power Off") {
    btn1.innerHTML = "Power On"
    img.src =
      "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png"
    document.body.style.backgroundColor = "darkslategrey"
    paragraph.textContent = "The room is dark again :("
  }
})
