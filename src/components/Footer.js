import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import logo from '../assets/MAGbank.png';
import appleStore from '../assets/AppleStore.png';
import googlePlay from '../assets/GooglePlay.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './Footer.scss';


const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className="text-center py-5">
                <Col xs={12} lg={6} className='text-lg-start'>
                    <Image src={logo}/>
                </Col>
                <Col xs={12} lg={4} className='my-5 my-lg-0'>
                    <Image src={appleStore}/>
                    <Image src={googlePlay} className='ms-2'/>
                </Col>
                <Col xs={12} lg={2} className='d-flex align-items-center justify-content-center'>
                    <FontAwesomeIcon icon={faFacebookSquare} size='2x' color='#7c7c7c' />
                    <FontAwesomeIcon icon={faTwitter} size='2x' color='#7c7c7c' className='ms-2'/>
                    <FontAwesomeIcon icon={faYoutube} size='2x' color='#7c7c7c' className='ms-2'/>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;