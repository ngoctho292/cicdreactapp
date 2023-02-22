import './App.css';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
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
          Learn React
        </a>
        <Footer />
      </header>
    </div>
  );
}

export default App;
