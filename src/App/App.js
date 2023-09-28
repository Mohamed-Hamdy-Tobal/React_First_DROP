import './App.css';     // CSS file of App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header'   // The Header That I Use It.
import Contact from '../components/Contact/Contact';
import Main from '../components/Main/Main';
// import Wikipedia from '../components/Wikipedia/Wikipedia';

function App() {
  return (
    <div className="App">
      <Header name="Mohamed" age='20'/>
      {/* <Wikipedia /> */}
      <Contact/>
      <Main />
    </div>
  );
}

export default App;
