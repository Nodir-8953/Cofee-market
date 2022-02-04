import './App.scss';
import Header from './Main-page/Header/Header'
import About from './Main-page/About/About'
import Products from './Main-page/Products/Products'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
