
import './App.css';
import Home from './component/Home/home'
import nav from './component/Nav/nav';
import Single from './component/Free_software/single_tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/single" exact component={Single}/>
        </Switch>
    </div>
  );
}

export default App;
