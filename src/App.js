import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Character from "./components/Character";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> 
    <div className="App">
      <header className="Header"> 
        <Header/>
      </header>
      <main className="Main">
        <Switch>
          <Route path="/character">
          <Character/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
      </main>
    <footer className="Footer">
      <Footer/>
    </footer>
    </div>
    </Router>
  )
}

export default App;
