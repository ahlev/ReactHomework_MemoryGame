This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## ** Pokemon Memory Game **
### (React Homework / Week 15 / GT Coding Bootcamp)

**Demonstrating use of React and JSX, this application renders a tile-based game that challenges the player's memory.**

**Materialize with custom CSS was used to create the layout, navigation bar, and footer**


1. The application renders 12 different tiles, each depicting a different Pokemon, to the screen. Each image is listening for click events.
1. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
1. The application keeps track of the user's score, which is incremented by 1 when clicking any Pokemon for the first time. 
1. The user's score is reset to 0 if they click on the same Pokemon image more than once.
1. Once the user's score is reset after a win or an incorrect guess, the game resets automatically.
1. The navbar also tracks a user's Top Score during their attempts to successfully complete the game.


![Game Instructions](/public/PokemonMemoryGame-Instructions.PNG)

![Pokemon Memory Game (preview))](/public/PokemonMemoryGame.PNG)
