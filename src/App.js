import Footer from '../src/components/footer/Footer'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Details from './pages/Home/Details';
import Home from './pages/Home/Home';
import Seo from './pages/services/seo/Seo';
import Sem from './pages/services/sem/Sem';
import Ws from './pages/services/ws/Ws';
import Smm from './pages/services/smm/Smm';
import Em from './pages/services/em/Em';
import Ga from './pages/services/ga/Ga';
function App() {
  return (
    <div className="App">
     <Seo/>
     <Sem/>
     <Em/>
     <Ga/>
     <Smm/>
     <Ws/>
      {/* <Home/>
      <Details/>
      <About/>
      <Contact/>
      <Seo/>
      <Sem/>
      <Ws/>
      <Smm/>
      <Em/>
      <Ga/>
      <Footer/> */}
    </div>
  );
}

export default App;
