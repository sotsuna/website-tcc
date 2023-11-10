import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import text from './components/text.json';

const App = () => (
  <div className="bg-slate-300">
    <Navbar/>
    <Content text={text[1].age} inverted/>
  </div>
);

export default App;