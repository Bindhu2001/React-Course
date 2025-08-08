import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  let user ="kesavan";
  let footer = "footer";
  let cntnt = "adfds";
  return (
    <>
     <Header users={user}/>
     <Content content = {cntnt}/>
     <Footer footers={footer}/>
    </>
  );
}

export default App;
