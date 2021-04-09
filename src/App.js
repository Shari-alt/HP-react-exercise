import "./App.css";
import { BrowserRouter  as Router } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router> 
    <div className="App">
      <header className="Header"> 
        <Header/>
      </header>
      <main className="Main">

      </main>
    Harry Potter
    </div>
    <footer className="Footer">

    </footer>
    </Router>
  )
}

export default App;
