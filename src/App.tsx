import About from './components/About/page';
import Contact from './components/Contact/page';
import Footer from './components/Footer/page';
import Header from './components/Header/page';
import Home from './components/Home/page';
import Projects from './components/Projects/page';
import Skills from './components/Skills/page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
