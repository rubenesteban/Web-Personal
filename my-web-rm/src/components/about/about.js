import React, { Component } from 'react'

export default class about extends Component {
  render() {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                <img className="profile-pic" src="images/profilepic.jpg" alt />
                </div>
                <div className="nine columns main-col">
                <h2>About Me</h2>
                <p>Me  encanta  mantener  una  conversación  con  la  tecnología  de  celulares  y  computadoras y  descubrir  los  nuevos  programas  que  van  saliendo para  ir  aprendiendo nuevas  ventanas  que  se  van  abriendo te  cuento  que  es  una  carrera  que  me  gusta descubrir   etapas  muy  interesantes que  llegan  a  engancharte   que  te  emotiva  porque vas  aprendiendo muchas  cosas  dentro  de  una  rama  tecnológica  que  te  lleva  una  situación  que  te  abre  puertas  a  un  mercado  global
                    <br />
                    Que  te  brinda  muchas  fuentes  de  trabajos  para  ir  manejando  paginas  web,  descargas  ,paginas  de  blog  de  ventas  de  compras  y  muchas  cosas  mas  que  te  van  a  servir.
                </p>
                <div className="row">
                    <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <span>Ruben Maya</span><br />
                        <span>N53-242 Elvira Campi de Yoder<br />
                        Av. Los Pinos - La Kennedy Quito-Ecuador
                        </span><br />
                        <span>(593)960139199</span><br />
                        <span>ruben.maya@epn.edu.ec</span>
                    </p>
                    </div>
                    <div className="columns download">
                    <p>
                        <a href="#" className="button"><i className="fa fa-download" />Descargar Resumen</a>
                    </p>
                    </div>
                </div> {/* end row */}
                </div> {/* end .main-col */}
            </div>
        </section>
    )
  }
}
