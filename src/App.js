import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Header from "./components/header/header.component"


function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
