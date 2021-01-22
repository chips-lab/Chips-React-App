import  Login from  "./Views/Login";
import Register from "./Views/Register";
import './App.css';
import {Route, BrowserRouter as Router, Switch} from  "react-router-dom"

function App() {
  return (
        <div className="App">
              <Router>
                        <Route path="/"  exact  component={Login} />
                        <Route path="/register"   exact  component={Register} />
              </Router>
        </div>
  );
}

export default App;
