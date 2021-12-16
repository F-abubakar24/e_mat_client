import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <Router>
          <Switch>

            
            <Route exact path="/">
              <Home></Home>
            </Route>


          </Switch>
        </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
