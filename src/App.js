import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import { Cover } from './component/Cover';
import Skills from './component/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Project } from './component/Project';
import { Projects } from './component/Project';
import { ProjectCard } from './component/ProjectCard';
import { Contact } from './component/Contact';
import { Newsletter } from './component/Newsletter';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header /> 
      <Nav />
    <Cover/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
