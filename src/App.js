import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Footer from "../src/components/footer/Footer";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home/Home";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Allservices from "./pages/services/Allservices";

function App() {
  return (
    <div className="App">
      
      <Router>
      
        <Navbar />
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Allservices} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
