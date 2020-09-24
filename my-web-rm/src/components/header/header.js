import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
        <header id="home">
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
            <li><a className="smoothscroll" href="#about">Acerca De</a></li>
            <li><a className="smoothscroll" href="#resume">Resumen</a></li>
            <li><a className="smoothscroll" href="#portfolio">Trabajos</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimoniales</a></li>
            <li><a className="smoothscroll" href="#contact">Contacto</a></li>
            </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
            <div className="banner-text">
            <h1 className="responsive-headline">Soy Rubén Maya V.</h1>
            <h3>Soy un estudiante de desarrollo de software en la ESFOT actualmente curso el tercer semestre de la carrera, y he podido ir adquiriendo conocimiento en programación como C, C++, java y javascript, diseñador gráfico, ilustrador y diseñador web con sede en Quito que crea identidades visuales efectivas para empresas de todos los tamaños. Comencemos a desplazarnos y aprendamos más sobre mí.</h3>
            <hr />
            <ul className="social">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a href="#"><i className="fa fa-skype" /></a></li>
            </ul>
            </div>
        </div>
        <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
        </header>
    )
  }
}
