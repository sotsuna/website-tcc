import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import text from './components/text.json';
import Scrolldown from './components/Scrolldown';

const App = () => (
  <div className='scroll-smooth off-white'>
    <Header/>
    <Content text={text[1].text} title={text[1].title} id={text[1].id} inverted/>
    <Scrolldown/>
    <Content text={text[2].text} title={text[2].title} id={text[2].id}/>
    <Content text={text[3].text} title={text[3].title} id={text[3].id} inverted/>
    <Content text={text[4].text} title={text[4].title} id={text[4].id}/>
    <Content text={text[5].text} title={text[5].title} id={text[5].id} inverted/>
  </div>
);


export default App;