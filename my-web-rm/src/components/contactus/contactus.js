import React, { Component } from 'react'

export default class contactus extends Component {
  render() {
    return (
        <section id="contact">
        <div className="row section-head">
            <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
            <p className="lead">Si deseas contactarme lo puedes hacer enviandome un mensaje atraves de este formulario
                yo te respondere lo antes posible, si deseas que participe el algun proyecto o tienes dificultades en el
                uso del alguna tecnologia que yo tambien conosca con gusto estare dispuesto a colaborar con tigo.
            </p>
            </div>
        </div>
        <div className="row">
            <div className="eight columns">
            {/* form */}
            <form action method="post" id="contactForm" name="contactForm">
                <fieldset>
                <div>
                    <label htmlFor="contactName">Nombre <span className="required">*</span></label>
                    <input type="text" defaultValue size={35} id="contactName" name="contactName" />
                </div>
                <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
                </div>
                <div>
                    <label htmlFor="contactSubject">Asunto</label>
                    <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
                </div>
                <div>
                    <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                    <img alt src="images/loader.gif" />
                    </span>
                </div>
                </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
                <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
            </div>
            <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
                <h4>Direccion y telefono</h4>
                <p className="address">
                Ruben Maya V.<br />
                N53-242 Elvira Campi de Yoder <br />
                Av. Los Pinos - La Kennedy Quito-Ecuador <br />
                <span>(593)960139199</span>
                </p>
            </div>
            <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                <li>
                    <span>
                    “Hunter Biden racked up more than $4 million in “questionable financial transactions” with foreign nationals. He partnered with Chinese nationals connected to the Chinese Communist Party & the People’s Liberation Army”
                    <a href="#">https://twitter.com/dbongino</a>
                    </span>
                    <b><a href="#">7:03 AM · Sep 23, 2020</a></b>
                </li>
                <li>
                    <span>
                    De Carchi a París! Flag of France Muy emocionado por terminar nuestro primer @LeTour Smiling face with heart-shaped eyes Estos días vivimos momentos muy especiales y fue un orgullo representarles Flag of Ecuador Gracias a todos por su apoyo
                    <a href="#">https://twitter.com/therussellellis</a>
                    </span>
                    <b><a href="#">3:30 PM · Sep 20, 2020</a></b>
                </li>
                </ul>
            </div>
            </aside>
        </div>
        </section>
    )
  }
}
