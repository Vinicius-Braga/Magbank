import { faGlobe, faMobile, faMobileAlt, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container,Row,Col, Button} from 
"react-bootstrap";
import IconText from './IconText'
import './institutional.scss'

const Institutional = () => (
    <section className="institutional text-light py-5">
        <Container>
            <Row>
                <Col xs={12} lg={5}></Col>
                <Col xs={12} lg={7}>
                   <h2 className="institutional-title my-5">Já nascemos digital</h2>
                  <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                <IconText icon={faMobileAlt} color='#fff' className='mb-2'>
                    Sem fila e sem burocracia
                </IconText>
                <IconText icon={faMobile} color='#fff' className='mb-2'>
                    Simples e prático
                </IconText>
                <IconText icon={faGlobe} color='#fff' className='mb-2'>
                    Abertura de conta 100% online
                </IconText>
                <IconText icon={faShieldAlt} color='#fff' className='mb-2'>
                   Transações mais seguras
                </IconText>

                  <Button variant="outline-light" className="mt-5">Abra sua conta</Button>
             </Col>

            </Row>
        </Container>
    </section>
)


export default Institutional;