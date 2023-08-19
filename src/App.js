
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './Header.css'
import Home from './Camponent/Home';
import Software from './Camponent/Software';
import About from './Camponent/About';


function App() {
  return (
    <div >
        <header>
            <h1 className='logo'>Open World</h1>
            <nav className='Link'>
                <Link to="/">Home</Link>
                <Link to="Software">All Software</Link>
                <Link to="About">About Us</Link>
                
            </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path="Software" element={<Software />} />
          <Route path="About" element={<About />} />
          
        </Routes>            
        
    </div>
  );
}

export default App;
