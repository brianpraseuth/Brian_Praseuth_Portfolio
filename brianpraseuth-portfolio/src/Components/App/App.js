import React from "react";
import Navbar from '../Navbar';
import Hero from '../Hero';
import ProjectContainer from '../ProjectContainer';
import Infobar from '../Infobar';
import Bio from '../Bio';
import Footer from '../Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Infobar />
      <ProjectContainer />
      <Bio />
      <Footer />
    </div>
  );
}
export default App;
