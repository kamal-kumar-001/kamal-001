import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navBar';
import Home from './containers/home';
// import Blog from './containers/blog';
import Portfolio from './containers/portfolio';
// import About from './containers/about';
import Contact from './containers/contact';
import Theme from './components/theme';
// import BlogPage from './containers/blogPage';
// import ParticleWave from 'particle-wave';
// import ParticleWave from './helpers/ParticleWave.ts';
import particlesConfig from './helpers/particlesConfig';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Resume from './containers/resume';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }


  return (
    <div className="App">
      <Particles id="particles" options={particlesConfig} init={particlesInit} />

      <div className='App__navbar-wrapper'>
        <Navbar />
      </div>

      {/* <div id='particle-wave'>
        <ParticleWave />
      </div> */}
      <div className='App__main-content-wrapper'>
        <Theme />
        <Routes>
          <Route path='/' index element={<Home />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/portfolio' element={<Portfolio />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
          {/* <Route path='/blogPage' element={<BlogPage />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
