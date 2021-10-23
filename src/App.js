import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Employees from "./Components/Employees";

function App() {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/employees" component={Employees} />
      </Switch>
    </Main>
  );
}

export default App;
