import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './Dashboard.scss';
import { Link } from "react-router-dom";

import AccountBalance from "../components/AccountBalance";

const Dashboard = () => {

    const data = {
        latestBalance: [
        {date: '22/07', description: 'SAQUE 24H 012345', value: '300,00'},
        {date: '21/07', description: 'SUPERMERCADO 0165632', value: '275,90'},
        {date: '21/07', description: 'NETFLIX 26489', value: '34,90'},
        {date: '20/07', description: 'FARMÁCIA 0054236', value: '350,60'},
        {date: '20/07', description: 'CINEMA 0054236', value: '40,00'},
    ],

        futureBalance: [
        {date: '30/08', description: 'SALÁRIO 012345', value: '3.000,00'},
        {date: '27/08', description: 'INVESTIMENTOS 0165632', value: '275,90'},
        {date: '22/08', description: 'PIX 286489', value: '50,00'},
        {date: '22/08', description: 'PIX 286489', value: '100,00'},
    ],
    };

    return (
    
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
                    <Row class="d-grid gap-2" >
                        <Button className="dashboard_button dashboard_button--active btn btn-primary text-start" size="lg">Minha Conta</Button> 
                        <Link to='/dashboard/payments'><Button className="dashboard_button btn btn-primary text-start" size="lg">Pagamentos</Button></Link>
                        <Button className="dashboard_button btn btn-primary text-start" size="lg">Extrato</Button>
                    </Row>
                </Col>
                <AccountBalance data={data}/>
            
            </Row>
        </Container>
   
    )
};

export default Dashboard;