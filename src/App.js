import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header />
        {/* <h2>chay oke roi</h2> */}
        <h3>đã thêm được branch thonn.hcm</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React so easyyy
        </a>
      </header>
    </div>
  );
}

export default App;
