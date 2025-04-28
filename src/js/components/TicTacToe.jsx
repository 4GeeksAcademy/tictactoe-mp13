import React, { useState } from "react";

const TicTacToe = () => {
  const [jugador1, setJugador1] = useState("");
  const [jugador2, setJugador2] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [jugadorActual, setJugadorActual] = useState("X");

  const handleWeaponSelect = (weapon) => {
    setSelectedWeapon(weapon);
    setJugadorActual(weapon);
    setGameStarted(true);
  };

  const handleClick = (index) => {
    if (tablero[index] || checkWinner(tablero)) {
      return;
    }
    const newTablero = [...tablero];
    newTablero[index] = jugadorActual;
    setTablero(newTablero);
    setJugadorActual(jugadorActual === "X" ? "O" : "X");
  };

  const checkWinner = (tablero) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        return tablero[a];
      }
    }
    return null;
  };

  const winner = checkWinner(tablero);

  return (
    <div className="tictactoe-container">
      {!gameStarted ? (
        <div className="weapon-selection">
          <h2>Elige tu Arma!</h2>
          <div className="choose-weapon">
            <h3>Selecciona tu Arma!</h3>
            <div className="inputs">
              <input
                type="text"
                placeholder="Nombre Jugador 1"
                value={jugador1}
                onChange={(e) => setJugador1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nombre Jugador 2"
                value={jugador2}
                onChange={(e) => setJugador2(e.target.value)}
              />
            </div>
            <div className="armas">
              <div className="arma" onClick={() => handleWeaponSelect("X")}>
                X
              </div>
              <div className="arma" onClick={() => handleWeaponSelect("O")}>
                O
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="game-board">
          <h2>{winner ? `${winner} gana!` : `Turno de ${jugadorActual}`}</h2>
          <div className="board">
            {tablero.map((cell, index) => (
              <div
                key={index}
                className="cell"
                onClick={() => handleClick(index)}
              >
                {cell}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
