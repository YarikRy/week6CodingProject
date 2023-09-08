const expect = chai.expect
const assert = chai.assert
describe('#Play game function', () => {
    it('#Should play the game and console log which card Player 1 and Player 2 played and says who recieves a point, and updates the players score', () => {
        //Arrange
        let player1Score = 0
        let player2Score = 0
        let player1Cards = [{suit: 'Diamonds', rank: '5', value: 4}]
        let player2Cards = [{suit: 'Spades', rank: '6', value: 5}]

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
        //Act
        playGame()
        //Assert
        expect(player2Score).to.equal(1)
        expect(player1Score).to.equal(0)
    })
})