import React from 'react';

import {  Nav, Container, Col, Row, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import Facebook from '../assets/icons/facebook-square-brands.svg';
import Twitter from '../assets/icons/twitter-square-brands.svg';

export default function Footer(){

    return (

    <>
        <section className="last-section">
          <Container className="custom-padding mt-5">
            <Row>
              <Col sm={3}>
                <h3 className="footer-side-title my-4">
                financer.com
                </h3>

                <p className="footer-side-text">
                  Financer ofrece el servicio de comparación a nivel global para ayudar al usuario a simplificar su búsqueda de préstamos. Comparamos Préstamos, Cuentas de Ahorros, Tarjetas y mucho más.
                  Level 2, Palazzo Ca’ Brugnera, Valley Road, Birkirkara BKR 9024, Malta.
                </p>
              
              </Col>
              
              <Col sm={3}>
                <Nav defaultActiveKey="disabled" className="flex-column my-4 ml-5">
                  <Nav.Link eventKey="disabled" disabled><h5>Préstamos</h5></Nav.Link>
                  <Nav.Link eventKey="link-1"> <h6>Microcréditos</h6></Nav.Link> 
                  <Nav.Link eventKey="link-2"><h6>Créditos rápidos</h6></Nav.Link>
                  <Nav.Link eventKey="link-1"><h6>Préstamos Personales</h6></Nav.Link>
                  <Nav.Link eventKey="link-2"><h6>Línea de crédito</h6></Nav.Link>
                  <Nav.Link eventKey="link-1"><h6>Hipotecas</h6></Nav.Link>
                </Nav>
              </Col>

              <Col sm={3}>
                <Nav defaultActiveKey="disabled" className="flex-column my-4 ml-5">
                  <Nav.Link eventKey="disabled" disabled><h5>Inversión</h5></Nav.Link>
                  <Nav.Link eventKey="link-1"><h6>Inversiones</h6></Nav.Link>
                  <Nav.Link eventKey="link-2"><h6>Cuenta de ahorro</h6></Nav.Link>
                  <Nav.Link eventKey="link-1"><h6>Depósitos bancarios</h6></Nav.Link>
                  <Nav.Link eventKey="link-2"><h6>Invertir en Bolsa</h6></Nav.Link>
                  <Nav.Link eventKey="link-1"><h6>Roboadvisors</h6></Nav.Link>
                </Nav>
              </Col>

              <Col sm={3}>

                <Nav defaultActiveKey="disabled" className="flex-column my-4 ml-5">
                  <Nav.Link eventKey="disabled" disabled><h5>Contáctanos</h5></Nav.Link>
                  <Nav.Link eventKey="link-1"><FontAwesomeIcon icon={faPhone}/> <b>+1415-317-3557</b></Nav.Link>
                  <Nav.Link eventKey="link-2"><FontAwesomeIcon icon={faEnvelope}/> <b>Envíanos un email</b></Nav.Link>
                  <Nav.Link eventKey="link-1"><Image className ="icon-size" src={Facebook}/> <b>Facebook</b></Nav.Link>
                  <Nav.Link eventKey="link-2"><Image className ="icon-size" src={Twitter}/> <b>Twitter</b></Nav.Link>
                </Nav>
              </Col>

            </Row>
            
            <div>
              <Row>
                <Col sm={6}>
                  <p className="copyright">financer.com. © 2020 </p>
                </Col>
                <Col sm={6}>
                  <Nav className="terms">
                    <Nav.Link href="#home"><h6>Términos y Condiciones</h6></Nav.Link>
                    <Nav.Link href="/policy"><h6>Política de Privacidad</h6></Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </div>

            <div className="footer-sub-section"></div>

            <p className="py-5 footer-advise">Financer.com no somos una empresa crediticia, ni asesores financieros, ni tampoco una entidad financiera. Nos dedicamos a comparar productos financieros y servicios que pueden ayudar a los usuarios para ahorrar dinero y tiempo. No somos responsables de una posible incorrecta información, cualquier inexactitud en los intereses, o información de la entidad o cualquier otra información - es por tanto total responsabilidad del usuario verificar la información antes de solicitar cualquier producto.
Utilizando Financer, estas aceptando nuestra política de cookies y nuestros términos y condiciones. Algunas entidades pertenecen a terceros anunciantes que nos ofrecen una compensación.</p>
          </Container>
        </section>
    </>
    )
}
