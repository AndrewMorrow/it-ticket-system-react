import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
    useEffect(() => {
        // Initializes materialize js
        M.AutoInit();
    });
    return (
        <div className="App">
            <header className="App-header">App</header>
        </div>
    );
};

export default App;
