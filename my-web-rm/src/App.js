import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Links from './components/Links';
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <About />
          <Resume />
          <Portfolio />
          <Testimonials />
          <ContactUs />
            <div className="row">
                <Links />
            </div>
            <ToastContainer />
          <Footer />

        </div>
    );
  }
}
export default App;

