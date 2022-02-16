
import './App.css';
import Home from './component/Home/home'
import nav from './component/Nav/nav';
import { Container,Col, Row } from 'react-bootstrap';
import Single from './component/Free_software/single_tab';
import Data from './component/Free_software/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/single" exact component={Single}/>
          <Route path="/software/:slug" exact component={Single}/>
        </Switch>

       
    </div>
  );
}

export default App;
