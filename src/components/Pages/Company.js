import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import api from '../../services/api.js';
import Ratings from 'react-ratings-declarative';
import { Container, Col, Row, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Main(){
    
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ company, setCompany ] = useState([]);
    const [ ratings, setRatings ] = useState([]);
    const [ avgRating, setAvgRating ] = useState();

    useEffect(() => {

        function getData() {
            api.get('/financials/'+ id)
            .then(function (response) {
                
                setCompany(response.data)
                setRatings(response.data.comments)
                
                setLoading(false)
                getRating(response.data.comments);
            })
            .catch(function (error) {
            });
        }
        getData();

        function getRating ( comments ){
            
            let ratings = comments.map((item)=>  item.rating )

            let sum = 0;

            for (var i = 0; i < ratings.length; i++)
            {
                sum += ratings[i];
            }
            
            setAvgRating( sum.toFixed(0) / ratings.length)
        }
        
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
                            <Col  md={3} sm={6} className=" py-4">
                                <Image className="img-company cover" src={require(`../../assets/`+ company.name + `.png`)} width="300" height="100"/>

                                <div className="company-rating-large pl-5">
                                    <div className="pl-2">
                                        <p className="rating"> {avgRating} </p>
                                    </div>
                                    <Ratings
                                    rating={avgRating}
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
                            </Col>
                        </Row>
                    </Container>
                
                </section>

                <section className="second-section">

                    <Container className="custom-padding px-3 my-3">
                        <Row>
                            <Col md={8} sm={12}>
                                <h1 className="pb-3"><b>Información de </b></h1>
                                
                                    <p className="pb-5"> {company.description}</p>

                                <h4 className="pl-3 pb-3"><b>CARACTERÍSTICAS DEL PRÉSTAMO</b></h4>

                                <div className="border-botton-cpn">
                                    <Row className="pl-3">
                                        <Col md={12}>
                                            <p className="mb-0 pb-2"><b>{company.name}</b></p>
                                        </Col>
                                    </Row>
                                </div>
                                
                                <div className="border-botton-cpn">
                                    <Row className="pl-3">
                                        <Col xs={6}>
                                            <p className="mb-0 pb-2 pt-2 pl-4">Préstamo:</p>
                                        </Col>
                                        <Col xs={6}>
                                            <p className="mb-0 pb-0 pt-2 pl-5">€ {Number(company.max_support).toFixed(2)}</p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="border-botton-cpn">
                                    <Row className="pl-3">
                                        <Col xs={6}>
                                            <p className="mb-0 pb-0 pt-2 pl-4">Acepta Asnef:</p>
                                        </Col>
                                        <Col xs={6}>
                                            <p className="mb-0 pb-0 pt-2 pl-5">{company.allow_asnef == true ?<FontAwesomeIcon icon={faCheck} size="2x" color="green"/> : <FontAwesomeIcon icon={faTimes} size="2x" color="red"/>}</p>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="border-botton-cpn">
                                    <Row className="pl-3">
                                        <Col xs={6}>
                                            <p className="mb-0 pb-0 pt-2 pl-4">Pago en fin de semana</p>
                                        </Col>
                                        <Col xs={6}>
                                            <p className="mb-0 pb-0 pt-2 pl-5">{company.pay_at_wknd == true ? <FontAwesomeIcon icon={faCheck} size="2x" color="green"/> : <FontAwesomeIcon icon={faTimes} size="2x" color="red"/>}</p>
                                        </Col>
                                    </Row>
                                </div>
 
                                <div className="border-botton-cpn mb-4 pb-3">
                                    <h4 className="pl-3 pt-5 pb-4"><b>Opiniones de Supre Grupo</b></h4>
                                </div>

                               
                                {company.comments.map((comment, index ) =>
                                    <Row className="pl-3" key={index}>
                                        <div className="border-botton pb-2 pt-4">
                                            <Col md={12}>
                                                <Row className="cmnt-ttl-pst">
                                                    <Col md={2}>
                                                        <FontAwesomeIcon className="pb-2 ml-4 fa-user-color" icon={faUserCircle} size="4x"/>
                                                    </Col>
                                                    <Col md={4} className="pt-2 comment-position">
                                                        <h6><b>{comment.name}</b></h6>
                                                        <p>{comment.date}</p>
                                                    </Col>
                                                </Row>
                                                <Ratings
                                                    rating={comment.rating}
                                                    widgetRatedColors="#ff1493"
                                                    widgetSpacings="0px"
                                                    >
                                                    <Ratings.Widget widgetDimension="22px"/>
                                                    <Ratings.Widget widgetDimension="22px"/>
                                                    <Ratings.Widget widgetDimension="22px"/>
                                                    <Ratings.Widget widgetDimension="22px"/>
                                                    <Ratings.Widget widgetDimension="22px"/>
                                                </Ratings>
                                                <div className="pt-3">
                                                    <p>{comment.comment}</p>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                )}
                                
                            </Col>

                            <Col md={4} sm={12}>
                                <div className="col-sticky">
                                    <h1 className="pb-3"><b>Información de </b></h1>

                                    <p className="pb-5">  bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla</p>

                                    <h4 className="pl-3 px-5"><b>ESCRIBIR ALGUNA COSA</b></h4>
                                </div>
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
