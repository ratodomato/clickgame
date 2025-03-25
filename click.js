let pointsforce = 1
let autoclick = false
let autoclickforce = 0
let points = 0

const morepoints = document.getElementById("morepoints")
const pointstext = document.getElementById("points")
const up1 = document.getElementById("up1")
const up1price = document.getElementById("up1price")
const up2 = document.getElementById("up2")
const up2price = document.getElementById("up2price")

pointstext.textContent = points
morepoints.textContent = "+" + pointsforce
up1.textContent = "upgrade1 +1 per click"
up1price.textContent = "points: " + pointsforce**3
up2.textContent = "upgrade2 +1 auto click"
up2price. textContent = "points: " + pointsforce**5

//adiciona os pontos
function addpoints(){
    points += pointsforce
    pointstext.textContent = points
}
//ups
//up1
function upg1() {
    if (points >= pointsforce**3) {        
        points -= pointsforce**3
        pointstext.textContent = points
        pointsforce += 1
        up1price.textContent = "points: " + pointsforce**3
    } else {
        alert("do you not have points")
    }
}
//up2
function upg2() {
    if (points >= autoclickforce**5) {        
        points -= autoclickforce**5
        pointstext.textContent = points
        if (autoclick == true) {
            autoclickforce += 1
            up2price.textContent = "points: " + autoclickforce**5
        } else {
            autoclick = true
            autoclickforce += 1
            loop()        
            up2price.textContent = "points: " + (autoclickforce + 1)**5
        }
        up2price.textContent = "points: " + autoclickforce**5
    } else {
        alert("do you not have points")
    }
}
//verifica se o botão foi clicado
morepoints.addEventListener("click", () =>{
    addpoints()
})
up1.addEventListener("click", () =>{
    upg1()
})
up2.addEventListener("click", () =>{
    upg2()
})
function loop() {
    setTimeout(() => {
        points += autoclickforce
        pointstext.textContent = points
        loop();
    }, 1000);
}
