import React from "react";
import "./App.css";
import ItemCountContainer from "./Components/ItemCountContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <div className="bg-w-custom">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
