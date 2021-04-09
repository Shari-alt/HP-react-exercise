import "./App.css";
import { BrowserRouter  as Router } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router> 
    <div className="App">
      <header> 
        <Header/>
      </header>
    Harry Potter
    </div>;
    </Router>
  )
}

export default App;
