import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LanginPage from "./components/views/LandingPage/LandingPage"
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LanginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
