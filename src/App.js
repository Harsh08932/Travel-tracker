import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Tours from "./components/Tours"
import About  from "./components/About"
import Footer  from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
