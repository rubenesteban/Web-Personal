import React, { Component } from 'react'

export default class resume extends Component {
    render() {
        return (
            <section id="resume">
                {/* Education
        ----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Educacion</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Vida Universitaria</h3>
                                <p className="info">Tegnologia en Desarrollo de Software <span>•</span> <em className="date">Enero 2019</em></p>
                                <p>
                                    Los Resultados del Aprendizaje vinculados a la aplicación de conocimientos fundamentales sobre teorías, conceptos, métodos y procedimientos, que respondan al “saber” del graduado son:
                                    Identificar las necesidades de los sectores estratégicos públicos o privados del país, que requieren una solución a través de productos de software eficientes y costo-efectivos.
                                    Emplear principios y herramientas de investigación para generar nuevas formas de aplicación del desarrollo de software en los sectores industriales y académicos estratégicos del país.
                                </p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Camilo Ponce Enriquez</h3>
                                <p className="info">Bachillerato en Ciencias <span>•</span> <em className="date">Septiembre 2002</em></p>
                                <p>
                                    Como ha afirmado Lidia Fernández, la relación de la escuela con el medio es uno de los aspectos más destacados como "deber ser" pedagógico, la escuela cumple un mandato social general, asociado con su génesis. Por un lado, la ubicación en el espacio muestra el grado de conexión o retraimiento de la institución y su medio inmediato respecto de los centros en los que se concentra el poder social e institucional. Por otro, la ubicación socio histórica permite conocer los fines sociales y los objetivos que se espera cumplir al tiempo que permite comprender las características del "mandato social" que pesa sobre la institución redefiniendo su cultura (Fernández, 1998, p. 82).
                                </p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Education */}
                {/* Work
        ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Escuela "El Huerto"</h3>
                                <p className="info">Profesor de Informatica<span>•</span> <em className="date">Julio 2017</em></p>
                                <p>
                                    Fui profesor en el periodo de 2016 a 2017 en la escuela "El Huerto" en la que me desenpeñe
                                    como profesor a tiempo parcial de la materia de informatica, en el que tuve el justo de compartir
                                    con los niños y docentes de una experiencia muy intensa de aprendimiento para darles a los niños un
                                    conocimiento elemental de como funcionalidad de los paquetes de ofimatica y como es la arquitectura
                                    de una computadora y por q no son tan utiles en el dia a dia.
                                </p>
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Universidad de la Plata</h3>
                                <p className="info">Ayudante de Catedra <span>•</span> <em className="date">Marzo 2015 - Noviembre 2016</em></p>
                                <p>
                                    En el 2015 viaje a estudiar Geofisica en la ciudad de la Plata, Argentina despues de estar
                                    trabajando por dos años en la enpresa de Etafashion, estuve a cargo de ayudar en los tallers de las
                                    materias de Analisis I, Algebra, Fundamentos en Geofisica, y Introduccion a la Geologia.
                                </p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
                {/* Skills
        ----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>En este periodo de dos años he podido aprender nuevas tecnologias en el desarrollo web
                            que me ayudan a tener un panorama mas amplio de como se puede desarrollar y complementar
                            el diseño con la programacion, tambien en este periodo he aprendido hacerca de el manejo de
                            base de datos como de la configuracion de una redes de computacion
                        </p>
                        <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                                <li><span className="bar-expand css" /><em>CSS</em></li>
                                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                            </ul>
                        </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                </div> {/* End skills */}
            </section>
        )
    }
}
