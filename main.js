// Up here would be a could place to debug

let playerOne = "Zach"
let playerTwo = "Rivka"
let playerThree = "Grant"
let playerFour = "Ally"
let playerFive = "Brendan"


// For some reason I am getting a strange error concerning Rivka. Keep an eye out for that issue.
// Solved!

// Oops, I spelled Allie's name wrong and I can't change it. Help!
playerFour = "Allie" // Why doesnt this work?
// console.log(playerFour)

// While you are at it, could you add 'Brendan' as well?
// Solved

// How many players are actually coming? I need to know how many chips to get.. Just store the value somewhere.
let totalPlayers = prompt("How many players?")
let parsedPlayers = parseInt(totalPlayers)

// Okay, so the number of bags of chips needed is the number of players divided by 2. Could you calculate that with your code skills?
let unrealisticBagsOfChips = parsedPlayers / 2
let realisticBagsOfChips = Math.floor(unrealisticBagsOfChips)
console.log("Number of Chips:")
console.log(realisticBagsOfChips)

// Oooooh so we need drinks. Just grab some random number. You know, Math stuff!
let randomFloatingNumber = (Math.random() * 10) + 1
let randomInteger = Math.floor(randomFloatingNumber)
console.log("Number of Drinks:")
console.log(randomInteger)

// Alright it's nearly time for the event, would you mind displaying a welcome message for the gang?
// console.log("Welcome to the random Chip and Drinks Party....I guess?")


// In the welcome message, could you also advertise how many bigs of chips we are bringing? I feel like that would really sell the event.
console.log("Welcome to the random Chip and Drinks Party...")
console.log(`We have ${realisticBagsOfChips} realistic bags of chips and a randomly selected amount of ${randomInteger} buckets of drink`)


// How many hours will we all play together if we play together for four hours per game? I know we scheduled some games. Use that to help.
let numberOfGames = prompt("How many games?")
let totallyGameHours = numberOfGames * 4
console.log("Total Game Hours:")
console.log(totallyGameHours)


// I am trying to make a message that bees are not allowed at my event. Yes, bees. But my message won't work!
console.log("NO BEES ALLOWED")


// Can you collect the names of everyone's favorite color? This will help us determine who gets what game pieces/
// Use a loop to prompt the screen four times, and store all of the favorite colors in a string.

// Oh man, but I don't know which color matches with which human. Could you program it so it has the name and the color?


// Can you also check t make sure that there really are no bees at the party? This is...truly important to me.
// if "beeStatus" is true, log to Grant that the event is bee free


// Oh and make sure to shout a warning message that there are bees otherwise
// use and else statement to make a loud warning that there are bees


// please share said warning....10 times.


// 5 more times if Brendan is there. He needs to know especially. He is allergic.
// have a nested conditional that checks if any of the players are Brendan.
// Increase the number of warning messages to 15 if Brendan is included.
