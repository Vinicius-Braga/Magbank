import React from "react";
import { Container, Row, Col, Accordion} from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet, faUserTie, faShieldAlt } from "@fortawesome/free-solid-svg-icons";


const Faq = () => (
    <Container className="py-5">
        <Row className="d-flex align-items-center justify-items-center">
            <Col className="d-lg-none mb-5" xs={12}>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faCreditCard} size='2x' />
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faWallet} size='2x'/>
                    </Col>  
                    <Col className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faShieldAlt} size='2x'/>
                    </Col>  
                    <Col className='d-flex justify-content-center'>
                        <FontAwesomeIcon icon={faUserTie} size='2x'/>
                    </Col>    
                </Row>
            </Col>
            <Col className="d-none d-lg-block">
                <IconText icon={faCreditCard} size={3} className="mb-3" textClassName="lead">Cardão de crédito e débito</IconText>
                <IconText icon={faWallet} size={3} className="mb-3" textClassName="lead">Conta e abertura</IconText>
                <IconText icon={faShieldAlt} size={3} className="mb-3" textClassName="lead">Token digital</IconText>
                <IconText icon={faUserTie} size={3} textClassName="lead">Produtos e serviços</IconText>
            </Col>
            <Col>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Duis aute irure dolor</Accordion.Header>
                    <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Excepteur sint occaecat</Accordion.Header>
                    <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Ut enim ad minim veniam</Accordion.Header>
                    <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
             </Accordion.Item>
            </Accordion>
            </Col>
        </Row>
    </Container>
);

export default Faq;