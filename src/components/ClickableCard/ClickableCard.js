import React from 'react';
import './ClickableCard.css';


function ClickableCard(props) {
	return (
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}

function handleClick(props) {
	props.shuffleCards();
	props.clickPokemon(props.id);
}






export default ClickableCard