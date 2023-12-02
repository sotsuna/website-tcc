import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import text from './components/text.json';
import Objespecifico from './components/Objespecifico';
import Referencial from './components/Content';
import Headerreferencial from './components/Headerreferencial';

const App = () => (
  <div className='scroll-smooth off-white'>
    <Header/>
    <Content text={text[1].text} title={text[1].title} id={text[1].id} inverted/>
    <Content text={text[2].text} title={text[2].title} id={text[2].id}/>
    <Content text={text[3].text} title={text[3].title} id={text[3].id} inverted/>
    <Objespecifico text={text[4].content} title={text[4].title} id={text[4].id}/>
    <Headerreferencial/>
    <Referencial text={text[5].paragraph.content[1]} title={text[5].paragraph.title[1]} id={text[5].id} inverted/>
    <Referencial text={text[5].paragraph.content[2]} title={text[5].paragraph.title[2]} id={text[5].id}/>
    <Referencial text={text[5].paragraph.content[3]} title={text[5].paragraph.title[3]} id={text[5].id} inverted/>
    <Referencial text={text[5].paragraph.content[4]} title={text[5].paragraph.title[4]} id={text[5].id}/>
    <Referencial text={text[5].paragraph.content[5]} title={text[5].paragraph.title[5]} id={text[5].id} inverted/>
    <Referencial text={text[5].paragraph.content[6]} title={text[5].paragraph.title[6]} id={text[5].id}/>
  </div>
);


export default App;