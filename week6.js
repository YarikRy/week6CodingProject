class Game {
    constructor(name){
        this.name = name
        this.deck = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10,'Jack', 'Queen', 'King',"Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10,'Jack', 'Queen', 'King',"Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10,'Jack', 'Queen', 'King',"Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10,'Jack', 'Queen', 'King']
        this.cards1 = []
        this.cards2 = []
    }

    // createDeck(){
    //     for(let i = 0; i < 4; i++){
    //         this.deck.push("Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10,'Jack', 'Queen', 'King')
    //     }
    // }

    dealCards(){
        for (let i = 0; i < 26; i++){
            const random = Math.floor(Math.random() * this.deck.length)
            this.cards1.push(this.deck[random])
            //this.deck.splice(this.deck[random], 1)
            this.deck.splice(this.cards1[i], 1)
            console.log(this.deck)
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
war.dealCards()
console.log(war.cards1)

