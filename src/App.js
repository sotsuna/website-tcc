import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import text from './components/text.json';

const App = () => (
  <div>
    <Navbar/>
    <Content text={text[1].text} title={text[1].title} inverted/>
    <Content text={text[2].text} title={text[2].title}/>
    <Content text={text[3].text} title={text[3].title}/>
    <Content text={text[4].text} title={text[4].title}/>
    <Content text={text[5].text} title={text[5].title}/>
  </div>
);

export default App;