import './App.css'; 

import Header from './components/Header';
import Swapi from './services/sw-api';



function App() {
  return (
    <div className="App">
     <Header />
      <Swapi />
    </div>
  );
}

export default App;

