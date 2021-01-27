import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"


const HatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
