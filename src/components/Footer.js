import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css';
function Footer() {
    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-start">
                    &copy; {new Date().getFullYear()} | THE DOT & LINE | 4TH FLOOR, BUILDING 35-C, LANE 7, BUKHARI COMMERCIAL, PHASE 6, DHA 0346-0086799 0346-0086795
                </Col>
                <Col className="d-flex justify-content-end">
                    <ul className="list-group list-group-horizontal">
                        <a href="#"><li className="list-group-item">About Our Company</li></a>
                        <a href="#"><li className="list-group-item">Contact</li></a>
                    </ul></Col>
            </Row>
        </Container>
    )
}

export default Footer