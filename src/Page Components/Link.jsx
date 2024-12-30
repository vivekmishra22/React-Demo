import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Link = () => {
  return (
    <>
        <Container>
            <Row>
                {/* {} */}
                <Col md={3} >
                <h2>Heading</h2>
                    <Card key={id}>
                        <Card.Body style={{ width: '18rem' }}>
                            <Card.Title>{CSSMathProduct.title}</Card.Title>
                            <h3>{CSSMathProduct.boody}</h3>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>  
    </>
  )
}

export default Link;
