import React, { useState, useEffect } from 'react';

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

export default function Policy(){

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
                        <h1 className="policy-title"><b>Política de privacidad</b></h1>
                    </Container>
                </section>

                    {/* SECOND SECTION  */}

                <section className="second-section d-flex justify-content-center">
                    <Container className="custom-padding px-3 my-3">
                    
                    <div className="content-policy py-5">
                        <div className="pb-5">
                            <spam><b>Introducción y definiciones</b></spam>
                        </div>

                        <p>
                            Esta Política de privacidad, junto con nuestro documento de Términos y condiciones , establece los Términos y condiciones generales (también mencionados como "Términos") que se aplican a su acceso y uso de todos los productos y Servicios de Financer.com (en conjunto, los "Servicios de Financer.com "O" Servicios "), que están disponibles a través de nuestros Sitios, incluidos, entre otros, todo el contenido y los Servicios proporcionados en el dominio Financer.com, así como a través de ciertas aplicaciones o plataformas móviles descargables autorizadas por Financer.com para proporcionar nuestros Servicios (juntos, el "Sitio"). "Financer.com" incluye Financer.com, Inc. y sus funcionarios, directores, empleados, consultores, afiliados, subsidiarias y agentes.
                        </p>

                        <p>
                            Al usar o acceder a los Servicios de Financer.com, usted acepta estos Términos, de acuerdo con su última versión actualizada.
                        </p>

                        <p>
                            Esta política de privacidad lo ayudará a comprender cómo recopilamos, usamos y protegemos sus datos personales. También debe mostrar este aviso a cualquier otra persona que pueda ser nombrada o tener datos personales incluidos en cualquier cotización, producto o servicio ofrecido a través de nosotros.
                        </p>

                        <p>
                            El idioma de todos los documentos de Términos, incluida la Política de privacidad, es el inglés. Cuando Financer.com haya proporcionado una traducción de la versión en inglés de cualquier parte de los Términos, usted acepta que la traducción se proporciona solo para su conveniencia y que la versión en inglés de los Términos regirá su relación con nosotros y los servicios que proporcionar a usted Si existe alguna contradicción entre la versión en inglés de los Términos y su traducción, entonces prevalecerá la versión en inglés.</p>
                        <p/>
                    </div>

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
