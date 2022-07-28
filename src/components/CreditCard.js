import React from "react";
import { Container, Row, Col, Image} from 'react-bootstrap';
import {
    faCreditCard,
    faMobile,
    faShoppingCart,
    faWallet,
} from '@fortawesome/free-solid-svg-icons';
import creditCard from "../assets/credit-card.jpg";
import './CreditCard.scss';
import IconText from "./IconText";

const CreditCard = () => (
    <Container className="my-5">
        <Row>
            <Col xs={12} lg={7} className='mb-5 mg-lg-0 px-5 px-lg-0'>
                <Row>
                    <h2 className="display-4 my-5 credit-card-title">Cartão de crédito</h2>
                </Row>
                <Row>   
                    <Col xs={12} lg={6} className='mb-4 '>
                    <IconText icon={faCreditCard} size={2} color='#f05656' textClassName='mb-2 fs-5 '>
                        Simples e prático
                    </IconText>
                    </Col>
                    <Col xs={12} lg={6} className='mb-4'>
                    <IconText icon={faMobile} size={2} color='#f05656' textClassName='mb-2 fs-5 '>
                        APP
                    </IconText>
                    </Col>
                    <Col xs={12} lg={6} className='mb-3'>
                    <IconText icon={faShoppingCart} size={2} color='#f05656' textClassName='mb-2 fs-5 '>
                        Pagamento Online
                    </IconText>
                    </Col>
                    <Col xs={12} lg={6} className='mb-4'>
                    <IconText icon={faWallet} size={2} color='#f05656' textClassName='mb-2 fs-5 '>
                        Pagamento Digital
                    </IconText>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={5}>
                <Image src={creditCard} alt='Magbank credit card example' fluid/>
            </Col>
        </Row>
    </Container>
)

export default CreditCard;