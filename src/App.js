import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';

const App = () => (
  <div className="bg-slate-300 w-screen h-screen">
    <Navbar/>
    <Content text="olá" title="teste" inverted/>
  </div>
);

export default App;