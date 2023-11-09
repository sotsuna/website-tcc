import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';

const App = () => (
  <div className="bg-slate-300 w-screen h-screen">
    <Navbar />
    <Content/>
  </div>
);

export default App;