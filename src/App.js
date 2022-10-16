import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel'
import Info1 from './components/Info1/Info1';

function App() {
  return (
    <div>
      <Navbar/>
      <Carrousel/>
      <Info1/>
      
    </div>
  );
}

export default App;
