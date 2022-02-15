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
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Allservices from './pages/services/Allservices';
function App() {
  return (
    <div className="App">
   
        <Router>
      <Navbar/>
     <Switch>
       <Route exact path ='/' component = {Home}/>
       <Route exact path ='/about' component = {About}/>
       <Route exact path = '/services' component = {Allservices}/>
       <Route exact path = '/contact' component = {Contact}/>
     </Switch>
     <Footer/>
    </Router>
    </div>
  );
}

export default App;
