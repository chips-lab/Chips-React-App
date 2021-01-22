import  Login from  "./Views/Login";
import Register from "./Views/Register";
import Forgot from "./Views/Forgot";
import './App.css';
import {Route, BrowserRouter as Router, Switch} from  "react-router-dom"

function App() {
  return (
        <div className="App">
              <Router>
                        <Route path="/"  exact  component={Login} />
                        <Route path="/register"   exact  component={Register} />
                        <Route path="/forgot" exact component={Forgot} />
              </Router>
        </div>
  );
}

export default App;
