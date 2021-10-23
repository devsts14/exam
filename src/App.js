import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./Components/Main";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";

function App() {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={AboutUs} />
      </Switch>
    </Main>
  );
}

export default App;
