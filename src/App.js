import './App.scss';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Work from './components/work';

function App() {
  return (
    <div className="App">
      <Header />

      <Intro />

      <About />

      <Work />
    </div>
  );
}

export default App;
