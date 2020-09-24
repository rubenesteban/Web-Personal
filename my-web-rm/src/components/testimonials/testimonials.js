import React, { Component } from 'react'

export default class testimonials extends Component {
  render() {
    return (
        <section id="testimonials">
        <div className="text-container">
            <div className="row">
            <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
                <div className="flexslider">
                <ul className="slides">
                    <li>
                    <blockquote>
                        <p>Hay  dos  formas  de  ver  la  vida, una  es  como  si  nada sea  un  milagro,  y  la  otra  es  si todos  fuera  un  milagro.
                        </p>
                        <cite>Albert Einstein</cite>
                    </blockquote>
                    </li> {/* slide ends */}
                    <li>
                    <blockquote>
                        <p>El  problema  de  tener  una  mente  abierta, por  supuesto, es  que  la  gente  se  empeña en llegar y tratar de poner cosa a dentro.
                        </p>
                        <cite>Terry  Pratchett</cite>
                    </blockquote>
                    </li> {/* slide ends */}
                </ul>
                </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
        </div>  {/* text-container ends */}
        </section>
    )
  }
}
