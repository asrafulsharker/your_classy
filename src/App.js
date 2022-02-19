
import './App.css';
import Home from './component/Home/home'
import nav from './component/Nav/nav';
import { Container,Col, Row } from 'react-bootstrap';
import Single from './component/Free_software/single_tab';
import Data from './component/Free_software/data';
import ClassRecord from './component/Class_Record/class_record';
import DBMSRecord from './component/Class_Record/DBMS/dbms_recording';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/class_record" exact component={ClassRecord}/>
          <Route path="/dbms_recording" exact component={DBMSRecord}/>
        </Switch>

       
    </div>
  );
}

export default App;
