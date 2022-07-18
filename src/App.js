import './App.scss';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Work from './components/work';
import Credits from './components/credits';

function App() {
  return (
    <div className="App">
      <Header />

      <Intro />

      <About />

      <Work />

      <Credits />
    </div>
  );
}

export default App;
