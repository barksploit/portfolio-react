import './App.scss';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Intro />

      <About />

      <Footer />
    </div>
  );
}

export default App;
