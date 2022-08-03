import React from "react";
import { Container, Row, Button} from 'react-bootstrap';

const CenteredButton = ({ children, onclick }) => (
    <Container>
        <Row className="d-grid gap-2 col-6 mx-auto justify-content-center">
            <Button className="my-5" variant="success" size="lg" onClick={onclick}>
                {children}
            </Button>
        </Row>
    </Container>
);

export default CenteredButton;