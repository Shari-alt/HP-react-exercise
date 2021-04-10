import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Characterlist from "./components/Character";
import Footer from "./components/Footer";
import SingleCharacter from "./components/SingleCharacter";

function App() {
  return (
    <Router> 
    <div className="App">
      <header className="Header"> 
        <Header/>
      </header>
      <main className="Main">
      <Switch>
          <Route path="/character/:id">
          <SingleCharacter/>
          </Route>
          <Route path="/character">
          <Characterlist/>
          </Route>
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
