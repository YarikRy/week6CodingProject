let player1Score = 0 //Declared a variable to keep track of player 1 score
let player2Score = 0 //Declared a variable to keep track of player 2 score
class CreateDeck { //Made a create deck class to programmatically create the deck and shuffle it using the Fisher Yates shuffling method
    constructor(){
        let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        let deck = []
        
        for (let i = 0; i < suits.length; i++){ //For loop that runs while i is less than the suits array length
            for (let x = 0; x < ranks.length; x++){ //I have another for loop inside that runs while x is less than the ranks array length 
                let card = { // for each iteration of the for loop it creates an object with the keys: suit, rank, and value
                    suit: suits[i], // Assigns the value of suits to the suit key based on the i index
                    rank: ranks[x], // Assigns the value of ranks to the rank key based on the x index
                    value: x + 1 // Assigns the value to the value key based on how many iterations x has gone through + 1
                }
                deck.push(card) //Pushes each card object to the deck after each x iteration 
            }
        }
        deck.sort(() => Math.random() - 0.5) //shuffles the deck randomly
        return deck 
    }

}

let deck = new CreateDeck() //Created a new object called deck
console.table(deck) //displays deck in a table format
let player1Cards = deck.splice(0, 26) //Gives player 1 cards 0-26 into its own separate array, and removes those cards from the original deck using splice
console.log(player1Cards)
let player2Cards = deck.splice(0, 26) //Gives player 2 cards 0-26 into its own separate array, and removes those cards from the original deck using splice
console.log(player2Cards)

const playGame = () => { //Made a play game function
    for(let i = 0; i < player1Cards.length; i++){ //Made a for loop to keep iterating while i is less than player1Cards array length
        if (player1Cards[i].value > player2Cards[i].value){ //If the value of the player 1 card at i index is greater than player 2 than it console logs out the rank and suit of the card of both players and says who got the point
            console.log(`Player 1: ${player1Cards[i].rank} of ${player1Cards[i].suit} was a higher card than Player 2: ${player2Cards[i].rank} of ${player2Cards[i].suit}. Player 1 recieves a point!`)
            player1Score += 1 //Updates the player1Score + 1
        } else if (player2Cards[i].value > player1Cards[i].value){ //If the value of the player 2 card at i index is greater than player 1 than it console logs out the rank and suit of the card of both players and says who got the point
            console.log(`Player 2: ${player2Cards[i].rank} of ${player2Cards[i].suit} was a higher card than Player 1: ${player1Cards[i].rank} of ${player1Cards[i].suit}. Player 2 recieves a point!`)
            player2Score += 1 //Updates the player2Score + 1
        } else{ //If both cards values are the same it logs out a tie and no one gets a point
            console.log(`Player 1: ${player1Cards[i].rank} of ${player1Cards[i].suit} was tied with Player 2: ${player2Cards[i].rank} of ${player2Cards[i].suit}. Nobody gets a point!`)
        }
    }
}
const finalScore = () => { //Made a function finalScore to log out a final score and to tell who won the game
    if (player1Score > player2Score){ // If player 1 score is greater than player 2 score it logs out that player 1 won the game and says the final score of the game
        console.log(`Player 1 Wins. Final score ${player1Score} - ${player2Score}`)
    } else if (player2Score > player1Score){ // If player 2 score is greater than player 1 score it logs out that player 2 won the game and says the final score of the game
        console.log(`Player 2 Wins. Final score ${player2Score} - ${player1Score}`)
    } else { //If the both players scores are the same then it logs out that it was a tie and says the final score of the game
        console.log(`It was a tie. Final score ${player1Score} - ${player2Score}`)
    }
}

playGame() //Called on the playGame function
finalScore() //Called on the finalScore function

