let player1Score = 0
let player2Score = 0
class CreateDeck {
    constructor(){
        let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        let deck = []
        
        for (let i = 0; i < suits.length; i++){
            for (let x = 0; x < ranks.length; x++){
                let card = {
                    suit: suits[i],
                    rank: ranks[x],
                    value: x + 1
                }
                deck.push(card)
            }
        }
        deck.sort(() => Math.random() - 0.5)
        return deck
    }

}

let deck = new CreateDeck()
console.table(deck)
let player1Cards = deck.splice(0, 26)
console.log(player1Cards)
let player2Cards = deck.splice(0, 26)
console.log(player2Cards)

const playGame = () => {
    for(let i = 0; i < player1Cards.length; i++){
        if (player1Cards[i].value > player2Cards[i].value){
            console.log(`Player 1: ${player1Cards[i].rank} of ${player1Cards[i].suit} was a higher card than Player 2: ${player2Cards[i].rank} of ${player2Cards[i].suit}. Player 1 recieves a point!`)
            player1Score += 1
        } else if (player2Cards[i].value > player1Cards[i].value){
            console.log(`Player 2: ${player2Cards[i].rank} of ${player2Cards[i].suit} was a higher card than Player 1: ${player1Cards[i].rank} of ${player1Cards[i].suit}. Player 2 recieves a point!`)
            player2Score += 1
        } else{
            console.log(`Player 1: ${player1Cards[i].rank} of ${player1Cards[i].suit} was tied with Player 2: ${player2Cards[i].rank} of ${player2Cards[i].suit}. Nobody gets a point!`)
        }
    }
}
const finalScore = () => {
    if (player1Score > player2Score){
        console.log(`Player 1 Wins. Final score ${player1Score} - ${player2Score}`)
    } else if (player2Score > player1Score){
        console.log(`Player 2 Wins. Final score ${player2Score} - ${player1Score}`)
    } else {
        console.log(`It was a tie. Final score ${player1Score} - ${player2Score}`)
    }
}

playGame()
finalScore()

