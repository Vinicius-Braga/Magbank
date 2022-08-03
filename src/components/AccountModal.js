import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AccountModal = ({show, handleClose}) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Abra sua Conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Seu nome</Form.Label>
                            <Form.Control type="text" placeholder="Seu nome" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Seu e-mail</Form.Label>
                            <Form.Control type="Email" placeholder="Seu e-mail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Seu e-mail</Form.Label>
                            <Form.Control as='select'>
                                <option value="1">Florianópolis - SC</option>
                                <option value="1">São Paulo - SP</option>
                                <option value="2">Rio de Janeiro - RJ</option>
                                <option value="3">Rio Grande do Sul - RS</option>
                            </Form.Control>
                    </Form.Group>
                    <Form.Check 
                        type="switch"
                        id="custom-checkbox"
                        label="Eu li e concordo com os termos de uso. "
                    />
                </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Criar Conta
          </Button>
        </Modal.Footer>
      </Modal>
)

export default AccountModal;