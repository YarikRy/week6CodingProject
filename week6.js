class Game {
    constructor(name){
        this.name = name
        this.deck = []
    }

    createDeck(){
        for(let i = 0; i < 4; i++){
            this.deck.push("Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10,'Jack', 'Queen', 'King')
        }
    }

    dealCards(){
        const randomCards = []
        for(let i = 0; i < 26; i++){
            let random = Math.floor(Math.random() * this.deck.length)
            let randomCard = this.deck[random]
            randomCards.push(randomCard)
            this.deck -= randomCard
        }
    }
}
class Player {
    constructor(name){
        this.name = name
        this.cards = []
    }

    useCard(card){

    }
}

// class Deck {
//     constructor(){
//         this.deck = []
//     }

//     createDeck(){
//         for(let i = 0; i < 4; i++){
//             this.deck.push("Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10,'Jack', 'Queen', 'King')
//         }
//     }
// }

// class Card {
//     constructor(){

//     }

// }

// let deck1 = new Deck()
// deck1.createDeck()
// console.log(deck1)
let player1 = new Player('p1')
let war = new Game('War')
war.createDeck()
console.log(war.deck)
war.dealCards()
console.log(war.deck)

