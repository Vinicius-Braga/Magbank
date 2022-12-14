import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from '../assets/logo_login.svg';

import './Login.scss'

const Login = () => (
    <section className="login">
        <div className="login_container">
        <Row>
            <Col className="text-center text-light">
                <Image src={logo} className='mb-5' />
                <Form className="mt-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="lead"><strong>Número da Conta</strong></Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="lead"><strong>Senha</strong></Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Link to='/dashboard'>
                    <Button className="mt-3" variant="success" type="submit">
                            Criar Conta
                    </Button>
                    </Link>
                </Form>
            </Col>
        </Row>
        </div>
    </section>
);

export default Login;