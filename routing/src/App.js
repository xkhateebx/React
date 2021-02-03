import './App.css';
import Home from './components/Home'
import NumberOrWord from './components/NumberOrWord'
import Customs from './components/Customs'
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
  
  <Router>
          <Home path="/home"/>
          <NumberOrWord path="/:value"/>
          <Customs path="/:value/:color/:backgroundColor"/>
      </Router>

    </div>
  );
}

export default App;
