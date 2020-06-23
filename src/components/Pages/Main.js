import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import api from '../../services/api.js';
import Ratings from 'react-ratings-declarative';
import {Card, Button, Container, Col, Row, Form, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import offer1 from '../../assets/vivus.png';
import offer2 from '../../assets/prestamo.png';
import offer3 from '../../assets/supregrupo.png';

export default function Main(){

    const [ loading, setLoading ] = useState(true);

    const [ financials, setFinancials ] = useState([]);
    const [ value1, setValue1 ] = useState(0);
    const [ value2, setValue2 ] = useState(0);

    const [ rating, setRating ] = useState(3.6);

    useEffect(() => {

        function getData() {
            api.get('/financials')
            .then(function (response) {
            setFinancials(response.data)
            console.log(response.data)
            setLoading(false)
            })
            .catch(function (error) {
            });
        }
        getData();
    },[]);

    return (

    <>
    <div>
        { loading === false
            ?
            <div>
                <section className="first-section d-flex justify-content-center">
                    <Container className="d-flex justify-content-center mb-5 mt-3" >
                        <Card as={Col} sm={6}>
                        
                        <Card.Body className="justify-content-center">
                        <Container className="px-4 pt-4 pb-2">
                            <Form.Group as={Row}>
                                <Col md={12}>
                                    <h4><b>Importe</b></h4>
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
                    
                        {financials.map((financial, index ) =>
                            <Card className="mt-5 mb-2" key={index}>
                                <Card.Body>
                                    <Row className="text-center">

                                        <Col  md={3} sm={6} className="pt-2 pt-4">
                                            <Link to={`/company/${financial.id}`}><Image src={require(`../../assets/`+ financial.name + `.png`)}/></Link> 
                                        </Col>

                                        <Col  md={2} sm={6} className="pt-4">
                                            <h6>€ {financial.max_support}</h6>
                                            <h6 className="txt-offer">Importe</h6>
                                        </Col>

                                        <Col  md={2} sm={6} className="pt-4">
                                            {financial.allow_asnef == true ? <FontAwesomeIcon icon={faCheck} size="2x" color="green"/> : <FontAwesomeIcon icon={faTimes} size="2x" color="red"/>}
                                            <h6 className="txt-offer">Aceptan Asnef</h6>
                                        </Col>

                                        <Col  md={2} sm={6} className="pt-4">
                                            {financial.pay_at_wknd == true ? <FontAwesomeIcon icon={faCheck} size="2x" color="green"/> : <FontAwesomeIcon icon={faTimes} size="2x" color="red"/>}
                                            <h6 className="txt-offer">Pago en fin de semana</h6>
                                        </Col> 

                                        <Col md={3} sm={12} className=" pt-4">
                                            <Row className="float-right"> 
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
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p className="txt-offer float-right">Leer <b>28</b> opiniones</p>
                                        </Col>
                                    </Row>  
                                    <Card.Footer>
                                        <Button className="offer-button px-5 float-right pr-5">
                                            <a href={financial.link} target="_blank"><b>Solicitar</b></a></Button>
                                    </Card.Footer>
                                </Card.Body>

                            </Card>
                        )}

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

                        <Row className="d-flex justify-content-center mt-4">

                        <Col sm={7} md={3} className="pt-2">
                            <Card className="card-size">
                            <Card.Body>

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
                                <Card.Link href="#" className="txt-offer pt-3">Baseado <b className="plastik-pink">28 opiniones</b></Card.Link>

                            </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={7} md={3} className="pt-2">
                            <Card className="card-size">
                            <Card.Body>

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
                                <Card.Link href="#" className="txt-offer pt-3">Baseado <b className="plastik-pink">28 opiniones</b></Card.Link>
                            
                            </Card.Body>
                            </Card>
                        </Col>

                            <Col sm={7} md={3} className="pt-2">
                            <Card className="card-size">
                                <Card.Body>

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
                                <Card.Link href="#" className="txt-offer pt-3">Baseado <b className="plastik-pink">28 opiniones</b></Card.Link>
                                
                                </Card.Body>
                            </Card>
                            </Col>

                        </Row>
                    </Container>
                    
                    <Row className="d-flex justify-content-center mb-5">
                        <Button className="mb-5 mt-3 btn-white-custon"><b>Ver todas las entidades</b></Button>
                    </Row>

                </section>
            </div>
            
            :
            <div> Loading...</div>
        }
        </div>
    </>
    )
}
