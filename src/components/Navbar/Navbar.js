import React from 'react';
import './Navbar.css';



function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav>
			<div className="nav-wrapper container">
				<a className='left'> - Pokemon Memory Game -</a>
				<a id = "statustext" className='brand-logo center'>{props.text}</a> 
				<ul className='right'>
					<li style={{paddingRight: "10px"}}>Score: {props.score}</li>
					<li style={{paddingLeft: "10px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	)
}



export default Navbar;

