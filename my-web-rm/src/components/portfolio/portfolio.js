import React, { Component } from 'react'

export default class portfolio extends Component {
  render() {
    return (
        <section id="portfolio">
        <div className="row">
            <div className="twelve columns collapsed">
            <h1>Aqui puedes ver algo de lo que hecho.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-01" title>
                    <img alt src="images/portfolio/coffee.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Coffee</h5>
                        <p>Illustrration</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-02" title>
                    <img alt src="images/portfolio/console.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Console</h5>
                        <p>Web Development</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-03" title>
                    <img alt src="images/portfolio/judah.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Judah</h5>
                        <p>Webdesign</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-04" title>
                    <img alt src="images/portfolio/into-the-light.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Into The Light</h5>
                        <p>Photography</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-05" title>
                    <img alt src="images/portfolio/farmerboy.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Farmer Boy</h5>
                        <p>Branding</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-06" title>
                    <img alt src="images/portfolio/girl.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Girl</h5>
                        <p>Photography</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-07" title>
                    <img alt src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Origami</h5>
                        <p>Illustrration</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                <div className="item-wrap">
                    <a href="#modal-08" title>
                    <img alt src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                        </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                </div>
                </div>  {/* item end */}
            </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
                --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt />
            <div className="description-box">
                <h4>Cafeteria-Restaurante</h4>
                <p>He trabajado en una cafeteria en el sur de Quito como ayudante de cocina y mesero por un periodo de tres años, donde hice muchos amigos y me diverti mucho.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt />
            <div className="description-box">
                <h4>Videojuegos</h4>
                <p>Me encante utilizar la consola para jugar mis juegos favoritos entre los que mas me gustan esta Super Mario Galaxy 2, The Legend of Zelda entre otros.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
            </div>
            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt />
            <div className="description-box">
                <h4>Museos</h4>
                <p> Me divierto mucho visitando los museos y exposiciones locales como tambien el paseo virtual por los museos mas reconocidos como Louvre o en museo britanico en Londres</p>
                <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt />
            <div className="description-box">
                <h4>Instalaciones Electricas</h4>
                <p>He trabajado en instalaciones de cableado estrutural y electrico en el terminal terrestre de Quito por dos años, con 5 personas a mi cargo.</p>
                <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt />
            <div className="description-box">
                <h4>Mecánica</h4>
                <p>Reconozco  las  partes  mas  esencial  para  un  chequeo  o  revisión  para  el  funcionamiento  de  un  auto  comenzamos  con  la  verificación  del  radiador que  su  contenido  de ve  tener  agua, ver  la  suficiente  capacidad en  el  liquido  de  frenos.</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
            </div>
            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-05 End */}
            <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
            <div className="description-box">
                <h4>Moda</h4>
                <p>Mi  paso de  descubrir  y  trabajar  en   Etafashion  un  establecimiento  de  prendas  de  vestir  y  de  moda  mi  área  fue  la  de  ventas  y  atención  al  cliente  para  adquirir  las  tarjetas   para  uso  de  compras.</p>
                <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-06 End */}
            <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
            <div className="description-box">
                <h4>Origami</h4>
                <p>La  manera  de  distraer  tu  mente  después  de  un  trabajo  de  ocho  horas  de  desempeño  esta  es  una  manera  de  aclarar  tu  mente  y  descansar  en  una  forma  de  aprender  y  distraerte  y  reflejar  a través  de  un  papel  ideas  que  puedes  construir
                    Por motivos de fallecimiento de mi padre por la pandemia covid-19, adjunto certificado de defunción y copias de cedula .</p>
                <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
            </div>
            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-07 End */}
            <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
            <div className="description-box">
                <h4>Fotografía</h4>
                <p>Me  gusta  llevar  una  cámara  o  un  teléfono  para  cuando  viajo  a  lugares tomar  o  captar  momentos  que  tus  ojos  ven , y  quieres  guardarlo b atreves  de  una  fotografía  para  llevar  a tu  mente  de  lugares  y  recuerdos  de  sitios  que  conociste.</p>
                <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
            </div>
            <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
            </div>
            </div>{/* modal-01 End */}
        </div> {/* row End */}
        </section>
    )
  }
}
