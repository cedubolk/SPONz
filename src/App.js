import Footer from '../src/components/footer/Footer'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Details from './pages/Home/Details';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
     
      <Home/>
      <Details/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
