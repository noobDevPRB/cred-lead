import React, { useState, useEffect } from 'react';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import api from '../../services/api.js';
import Ratings from 'react-ratings-declarative';
import {Card, Button, Container, Col, Row, Nav, Image } from 'react-bootstrap';

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
                <section className="second-section d-flex justify-content-center">
                    <Container className="custom-padding px-3 my-3 border-botton-cpn">
                        <Row>
                            <Col  md={4} sm={6} className=" py-4">
                                <Image className="img-company" src={require(`../../assets/vivus.png`)} class="cover" width="300" height="100"/>
                            </Col>
                            
                            <Col md={8} sm={6} className=" py-5 mt-1">
                                <Row> 
                                    <div className="pl-2">
                                        <p className="rating"> 3.5 </p>
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
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                
                </section>

                <section className="second-section">

                    <Container className="custom-padding px-3 my-3">
                        <Row>
                            <Col md={8}>
                                <h1 className="pb-3"><b>Información de </b></h1>
                                
                                <p className="pb-5">  bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla</p>

                                <h4 className="pl-3 pb-3"><b>CARACTERÍSTICAS DEL PRÉSTAMO</b></h4>

                                <div className="border-botton-cpn">
                                    <Row className="pl-3">
                                        <Col md={12}>
                                            <p className="mb-0 pb-0"><b>Bla Bla Blaa</b></p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="border-botton-cpn">
                                    <Row className="pl-3">
                                        <Col md={6}>
                                            <p className="mb-0 pb-0 pt-2">Bla Bla Blaa</p>
                                        </Col>
                                            
                                        <Col md={6}>
                                            <p className="mb-0 pb-0 pt-2">Bla Bla Blaa</p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="border-botton-cpn">
                                    <Row className="pl-3">
                                        <Col md={6}>
                                            <p className="mb-0 pb-0 pt-2">Bla Bla Blaa</p>
                                        </Col>
                                            
                                        <Col md={6}>
                                            <p className="mb-0 pb-0 pt-2">Bla Bla Blaa</p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="border-botton-cpn">
                                    <Row className="pl-3">
                                        <Col md={6}>
                                            <p className="mb-0 pb-0 pt-2">Bla Bla Blaa</p>
                                        </Col>
                                            
                                        <Col md={6}>
                                            <p className="mb-0 pb-0 pt-2">Bla Bla Blaa</p>
                                        </Col>
                                    </Row>
                                </div>

                                

                                <h4 className="pl-3 py-5 my-3"><b>Opiniones de Supre Grupo</b></h4>
                            </Col>

                            <Col md={4}>
                                <h1 className="pb-3"><b>Información de </b></h1>

                                <p className="pb-5">  bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla</p>

                                <h4 className="pl-3 px-5"><b>CARACTERÍSTICAS DEL PRÉSTAMO</b></h4>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </div>
            
            :
            <div> Loading...</div>
        }
        </div>
    </>
    )
}
