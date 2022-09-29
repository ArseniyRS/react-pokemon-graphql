import React from "react";
import "~/styles/global.scss";
import PockemonList from "./pokemon/PokemonList";

function App() {
  return (
    <div className="container">
      <PockemonList />
    </div>
  );
}

export default App;
