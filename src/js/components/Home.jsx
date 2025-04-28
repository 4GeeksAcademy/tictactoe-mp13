import React from "react";
import TicTacToe from "./TicTacToe"

//create your first component
const Home = () => {
	return (
		<div className="home-container">
			<h1>TIC TAC TOE</h1>
			<TicTacToe />
		</div>
	);
};		

export default Home;