var firstDiceNumber = Math.floor(Math.random() * 6) + 1
var secondDiceNumber = Math.floor(Math.random() * 6) + 1

var firstImage = document.querySelector(".img1")
firstImage.setAttribute("src", `images/dice${firstDiceNumber}.png`)
var secondImage = document.querySelector(".img2")
secondImage.setAttribute("src", `images/dice${secondDiceNumber}.png`)

if (firstDiceNumber > secondDiceNumber) {
    document.querySelector(".container h1").innerHTML = "<- Player 1 Wins"
} else if (secondDiceNumber > firstDiceNumber) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins -> "
} else {
    document.querySelector(".container h1").innerHTML =
        "Its a Tie, Refresh Again"
}
