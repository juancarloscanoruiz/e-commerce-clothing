import './App.css';
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Header from "./components/header/header.component"
import { auth, createUserProfileDocument  } from "./firebase/firebase.utils";

class App extends React.Component{

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if(userRef){
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
  
          });
        }
      }

        this.setState({ currentUser: userAuth });
      

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Router>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignUp} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
