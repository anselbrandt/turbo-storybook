import React from 'react';
import { Link } from "ui";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>/packages/ui/src/Link.tsx</code> and save to reload.
        </p>
        <Link className="App-link" href="https://turbo.build">
          Learn Turbo
        </Link>
      </header>
    </div>
  );
}

export default App;
