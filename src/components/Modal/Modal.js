import React from 'react';
import './Modal.css';



function Modal() {
	return (
		<div className="instructions">
			<div className="modal-content">
				<h4 className="center">Instructions!</h4>
				<ul>
					<ul>Click on a Pokemon to start the game. Tiles will shuffle.</ul>
					<ul>Select a new Pokemon each time. Don't click any Pokemon more than once! </ul>
					<ul>Click all 12 Pokemon without repeating to WIN THE GAME!</ul>
				</ul>
			</div>
			
			<br />
			<div className="modal-footer white-text center">
				<a className="btn" onClick={() => {
					document.getElementsByClassName('instructions')[0].classList.add('hide');
				}}>Get started!</a>
			</div>	
		</div>
	)
}



export default Modal;