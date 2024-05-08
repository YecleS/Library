  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Navbar from './Components/Pages/Navbar';
  import Books from './Components/Pages/Books';
  import ItemPage from './Components/Pages/ItemPage';

  function App() {
    return (  
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={ <Books /> } />
              <Route path='/item/' element={ <ItemPage /> } />
            </Routes>
          </Router>
          
        </div>
    );
  }

  export default App;
