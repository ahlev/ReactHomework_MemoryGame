import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Modal from './components/Modal/Modal.js';
import ClickableCard from './components/ClickableCard/ClickableCard.js';
import Footer from './components/Footer/Footer.js';
import cards from './cards.json';


// Would be cool to add a timer with a scoring bonus component based on completion time!**
class App extends Component {
    state = {
        clickedCards: [],
        cards: cards,
        score: 0,
        topScore: 0,
        footerText: ""
      }
  
    // DEFINING THE clickPokemon FUNCTION to handle score-checking and round management.
    clickPokemon = (id) => {
        // debugging
        console.log(this.state.clickedCards);

            // IF the ID of the card clicked exists already in the clickedCards array...
            if (this.state.clickedCards.includes(id)) {
              // THEN change the score to 0 and clear the array, then tell the user their game is reset
              
              this.setState({score: 0, clickedCards: []})
              this.setState({footerText: 'Duplicate! Score reset!'})

                setTimeout(() => {
                  this.setState({footerText: ""})
                }, 1000)
              
            // OTHERWISE add the ID of this card to the end of the clickedCards array    
            } else {
              this.setState({clickedCards: [...this.state.clickedCards, id]})
              this.setState({score: this.state.score + 1})

              // If the user beats the high score, replace it to show their score
              if (this.state.score >= this.state.topScore) {
                this.setState({topScore: this.state.score + 1})
                
              // And IF they reach 11 total points, they win!
              } 
              if (this.state.score === 11) {
                this.setState({footerText: "Matched them all! YOU WIN!"})
                this.setState({score: 0, clickedCards: [], cards: cards})
                setTimeout(() => {
                  this.setState({footerText: ''})
                }, 10000)
              } 
            }
    }

    //DEFINING THE renderCards FUNCTION to create a grid of cards that display our Pokemon
    // Takes in the array of cards and renders specific attributes to them
    // using .map method within bootsrap columns
    renderCards = (array) => {
      return this.state.cards.map(card => ( // read up more on uses of .map**
        <section className='col s4 m4 l3' key={card.id} id={card.id}> 
          <ClickableCard
            name={card.name} 
            image={card.image} 

            // call our shuffleCards function to randomize the order
            shuffleCards={() => {this.shuffleCards(this.state.cards)}}
            // call our clickPokemon function
            clickPokemon={() => {this.clickPokemon(card.id)}}/>
        </section>
        )
      )
    }
  

    // DEFINING THE shuffleCards FUNCTION to randomize the order of cards every time one is clicked.
    // which takes the cards.json array and randomizes the order by swapping them around
    shuffleCards = (array) => {
            let numCards = array.length;
        
            while (0 !== numCards) {
              // based on the length of the array, randomly pick one
              // and swap some things around -- need to understand this better but it's workiong now**
              let randomOrder = Math.floor(Math.random() * numCards);
              numCards -= 1;
              // And swap it with the current element.
              let temporaryValue = array[numCards];
              array[numCards] = array[randomOrder];
              array[randomOrder] = temporaryValue; // had these lines reversed and was getting duplicate cards everywhere! fixed.
            }
        
            this.setState({cards:cards});
    }
    

    // DEFINING THE render FUNCTION
    // Renders the navbar with the right scores, the modal of instructions, the cards and the footer
    render() {
      return (
        <div className="container-fluid">
          <Navbar text = {this.state.footerText} score={this.state.score} topScore={this.state.topScore}/>
          <Modal />
          <br />
          <div className="container row cardWrapper">
            {this.renderCards(this.state.cards)}
          </div>
          <Footer />
        </div>
      );
    }
  }
  
  
  

  
  export default App;
  