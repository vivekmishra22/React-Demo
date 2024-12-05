import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className='m-auto'>
                        <Form className='form-control p-4'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;
