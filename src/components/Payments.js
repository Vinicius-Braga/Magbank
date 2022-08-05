import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row, Tab, Tabs, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Payments = () => (
        
          <Container className="dashboard py-5">
              <Row>
                  <Col xs={12} lg={3}>
                      <Row className="align-items-center mb-5">
                          <Col xs={3}>
                              <span className="dashboard_user-avatar">
                                  <FontAwesomeIcon icon={faCircle} size='5x' color="#f8f9fa" />
                                  <FontAwesomeIcon calssName="dashbord_user-icon" icon={faUser} size='3x' color="#7c7d7d"/>
                              </span>
                          </Col>
                          <Col xs={9} className='text-lg-center'>
                              <h4>Vinicius Braga</h4>
                              <p className="text-muted">ag: 1234 c/c: 4321-5</p>
                          </Col>
                      </Row>
                      <Row class="d-grid gap-2 w-5">
                          <Link to='/dashboard'><Button className="dashboard_button btn btn-primary text-start" size="lg">Minha Conta</Button> </Link>
                          <Button className="dashboard_button dashboard_button--active btn btn-primary text-start" size="lg">Pagamentos</Button>
                          <Button className="dashboard_button btn btn-primary text-start" size="lg">Extrato</Button>
                      </Row>
                  </Col>
                  <Col xs={10} lg={8} className="mt-lg-5 pt-lg-4 ms-lg-5 ms-4">
                  <h3 className="mt-5 pt-lg-3">Pagamentos</h3>
                <Tabs
                className="mt-lg-4"
                defaultActiveKey='latest'   
                >
                    <Tab eventKey='boleto' title='Boleto'>
                        <Form>
                           <Form.Group className="my-4" controlId="formBarCode">
                              <Form.Label>
                                 <small>
                                    <strong>Código de Barras</strong>
                                 </small>
                              </Form.Label>
                              <Form.Control type="number" placeholder="Insira o código de barras" />
                           </Form.Group>
                           <Form.Group controlId="formPaymentType"> 
                              <Form.Label>
                                 <small>
                                    <strong>Forma de pagamento</strong>
                                 </small>
                              </Form.Label>
                              <div className="d-flex mb-3">
                                 <Form.Check 
                                    type='radio'
                                    id='debit'
                                    label='Débito em Conta Corrente'
                                    name='payment-type'
                                 />
                                 <Form.Check 
                                    type='radio'
                                    id='credit'
                                    className="ms-4"
                                    label='Cartão de Crédito'
                                    name='payment-type'
                                 />
                              </div>
                                 <Button variant="success">Continuar</Button>
                           </Form.Group>
                        </Form>
                    </Tab>
                    <Tab eventKey='transfer' title='Transferência'>
                        <Form>
                           <Row className="mt-5 mb-3">
                              <Col xs={12} lg={4} className='mb-3 mb-lg-0'>
                                 <Form.Group controlId="formGridEmail">
                                    <Form.Label>Banco</Form.Label>
                                    <Form.Control type="email"  />
                                 </Form.Group>
                              </Col>
                              <Col xs={12} lg={4} className='mb-3 mb-lg-0'>
                                 <Form.Group controlId="formGridPassword">
                                    <Form.Label>Agência</Form.Label>
                                    <Form.Control type="password"  />
                                 </Form.Group>
                              </Col>
                              <Col xs={12} lg={4} className='mb-3 mb-lg-0'>
                                 <Form.Group  controlId="formGridPassword">
                                    <Form.Label>Conta Corrente</Form.Label>
                                    <Form.Control type="password"  />
                                 </Form.Group>
                              </Col>


                           </Row>
                           <Row className="mb-4">
                              <Col xs={12} lg={6} className='mb-3 mb-lg-0'>
                                 <Form.Group  controlId="formGridPassword">
                                    <Form.Label>Valor da Transferência</Form.Label>
                                    <Form.Control type="password"  />
                                 </Form.Group>
                              </Col>
                              <Col xs={12} lg={6} className='mb-3 mb-lg-0'>
                                 <Form.Group controlId="formGridPassword">
                                    <Form.Label>Identificação no extratos</Form.Label>
                                    <Form.Control type="password"  />
                                 </Form.Group>
                              </Col>

                           </Row>
                           <Button variant="success">Continuar</Button>
                        </Form>
                    </Tab>
                </Tabs>
      
            </Col>
              
              </Row>
          </Container>
     
);



export default Payments;
  
