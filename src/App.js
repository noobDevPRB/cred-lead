import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './App.css';
import Ratings from 'react-ratings-declarative';
 

 
import { Navbar, NavDropdown, Nav, Card, Button, Container, Col, Row, Form, Image } from 'react-bootstrap';

import search from './Assets/search.svg';
import offer1 from './Assets/vivus.png';
import offer2 from './Assets/prestamo.png';
import offer3 from './Assets/supre-grupo.png';


function App() {

  const [ value1, setValue1 ] = useState(0);
  const [ value2, setValue2 ] = useState(0);

  const [ rating, setRating ] = useState(3.6);

  return (
    <>
        <section className="nav-section d-flex justify-content-center">

          <Container className="d-flex justify-content-center custom-padding">
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand href="#home"><b>financer.com</b></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <NavDropdown title={<b>Préstamos</b>} id="collasible-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown className="ml-4" title={<b>Hipotecas</b>} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown className="ml-4" title={<b>Tarjetas</b>} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown className="ml-4" title={<b>Cuentas</b>} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown className="ml-4" title={<b>Inversiones</b>} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown className="ml-4" title={<b>Finanzas</b>} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  
                </Nav>

                <Nav>
                  <Image className="ml-4" src={search}/>
                </Nav>
                
              </Navbar.Collapse>
            </Navbar>
          </Container>

        </section>

        <section className="first-section d-flex justify-content-center">
          <Container className="d-flex justify-content-center mb-5 mt-3" >
            <Card as={Col} sm={8}>
            
              <Card.Body className="justify-content-center">
               <Container className="px-4 pt-4 pb-2">
                  <Form.Group as={Row}>
                      <Col xs="6">
                        Importe
                        <RangeSlider
                          className="mt-5"
                          value={value1}
                          onChange={e => setValue1(Number(e.target.value))}
                          variant='secondary'
                          tooltipLabel={currentValue => `€${currentValue}`}
                          tooltipPlacement='top'
                          tooltip='on'
                          min={100}
                          max={10000}
                        />
                      </Col>
                      <Col xs="6">
                        Devolución
                        <RangeSlider
                          className="mt-5"
                          value={value2}
                          onChange={e => setValue2(Number(e.target.value))}
                          variant='secondary'
                          tooltipLabel={currentValue => `${currentValue}Años`}
                          tooltipPlacement='top'
                          tooltip='on'
                          min={1}
                          max={60}
                        />
                      </Col>
                      
                    </Form.Group>

                    <Row className="d-flex justify-content-center">
                      <Button className="offer-search-btn px-5" ><b>Comparar ofertas</b></Button>
                    </Row>
                  </Container>
              </Card.Body>
            </Card>
          </Container>
        </section>

        {/* SECOND SECTION  */}

        <section className="second-section d-flex justify-content-center">
          <Container className="custom-padding px-3 my-3">
            <Card className="my-5">
             
              <Card.Body >
                <Row className="d-flex justify-content-center text-center">
                  <Col sm={2} className="p-2">
                    <Image src={offer1}/>
                    <p className="txt-offer ml-4">Escogido <b>20.522</b> veces</p>
                  </Col>
                  <Col sm={2} className="p-3 pl-4">
                    <h6 >1 Mes</h6>
                    <h6 className="txt-offer">Devolución</h6>
                  </Col>
                  <Col sm={2} className="p-3">
                    <h6>0.00%</h6>
                    <h6 className="txt-offer">Interés</h6>
                  </Col>
                  <Col sm={2} className="p-3">
                    <h6>€0</h6>
                    <h6 className="txt-offer">Coste Total</h6>
                  </Col>
                  <Col sm={2} className="p-3">
                    <h4 ><b>€300</b></h4>
                    <h6 className="txt-cost"><b>Cuota Mensual</b></h6>
                  </Col>
                  <Col sm={2} className="p-1 pt-4">
                    <Row className="float-right pr-3"> 
                      <Ratings
                        rating={rating}
                        widgetRatedColors="#ff1493"
                        widgetSpacings="0px"
                      >
                        <Ratings.Widget widgetDimension="22px"/>
                        <Ratings.Widget widgetDimension="22px"/>
                        <Ratings.Widget widgetDimension="22px"/>
                        <Ratings.Widget widgetDimension="22px"/>
                        <Ratings.Widget widgetDimension="22px"/>
                      </Ratings>
                      <div className="pl-2">
                        <h6 className="rating-number"> 3.5 </h6>
                      </div>
                    </Row>
                   
                    <p className="txt-offer float-right">Leer <b>28</b> opiniones</p>
                  </Col>
                </Row>
                <Card.Footer>
                  <Button className="offer-button px-5 float-right"><b>Solicitar</b></Button>
                </Card.Footer>
              </Card.Body>
            </Card>

            <h6 className="my-2">Importante! Precios estimados. Recibirás el coste total tras completar la solicitud.</h6>
          </Container>
        </section>

         {/* THIRD SECTION  */}

        <section className="third-section">
          <Container className="my-5">

            <Row className="justify-content-center" >
              <h1 className="mt-5 text-light"><b>Entidades recomendadas</b></h1>
            </Row>

            <Row className="justify-content-center" >
              <h5 className="my-2 text-light">Financieras mejor valoradas según los usuarios</h5>
            </Row>

            <Row className="d-flex justify-content-center mt-4 mb-5">

              <Col sm={12} md={3} className="pb-3">
                <Card className="card-size">
                  <Card.Body d-flex justify-content-center>

                    <Image className="m-img" src={offer1}/>

                    <p className="company-rtn-nmbr"> 3.5 </p>
                    
                    <div className="company-rating pl-5 d-flex justify-content-center">
                      <Ratings
                        rating={4.2}
                        widgetRatedColors="#ff1493"
                        widgetSpacings="0px"
                      >
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                      </Ratings>
                    </div>
                    <p className="txt-offer pt-2">Baseado <b className="plastik-pink">28 opiniones</b></p>

                    <Card.Link href="#">Card Link</Card.Link>
                    
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={3} className="pb-3">
                <Card className="card-size">
                  <Card.Body d-flex justify-content-center>

                    <Image className="m-img" src={offer2}/>

                    <div className="pl-2">
                      <p className="company-rtn-nmbr"> 3.5 </p>
                    </div>
                    
                    <div className="company-rating pl-5 d-flex justify-content-center">
                      <Ratings
                        rating={4.2}
                        widgetRatedColors="#ff1493"
                        widgetSpacings="0px"
                      >
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                      </Ratings>
                    </div>
                    <p className="txt-offer pt-2">Baseado <b className="plastik-pink">28 opiniones</b></p>

                    <Card.Link href="#">Card Link</Card.Link>
                    
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={3} className="pb-3">
                <Card className="card-size">
                  <Card.Body d-flex justify-content-center>

                    <Image className="m-img" src={offer3}/>

                    <div className="pl-2">
                      <p className="company-rtn-nmbr"> 3.5 </p>
                    </div>
                    
                    <div className="company-rating pl-5 d-flex justify-content-center">
                      <Ratings
                        rating={4.2}
                        widgetRatedColors="#ff1493"
                        widgetSpacings="0px"
                      >
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                        <Ratings.Widget widgetDimension="26px"/>
                      </Ratings>
                    </div>
                    <p className="txt-offer pt-2">Baseado <b className="plastik-pink">28 opiniones</b></p>

                    <Card.Link href="#">Card Link</Card.Link>
                    
                  </Card.Body>
                </Card>
              </Col>

                
                
              </Row>
            </Container>
            
            <Row className="d-flex justify-content-center mb-5">
              <Button className="mb-5 mt-3 btn-white-custon"><b>Ver todas las entidades</b></Button>
            </Row>

        </section>
        
        {/* FOOTER SECTION  */}

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
                  <Nav.Link eventKey="link-1"><h6>+1415-317-3557</h6></Nav.Link>
                  <Nav.Link eventKey="link-2"><h6>Envíanos un email</h6></Nav.Link>
                  <Nav.Link eventKey="link-1"><h6>Facebook</h6></Nav.Link>
                  <Nav.Link eventKey="link-2"><h6>Twitter</h6></Nav.Link>
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
                    <Nav.Link href="#features"><h6>Política de Privacidad</h6></Nav.Link>
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
  );
}

export default App;
