import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const Axiostest = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setUserData(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
  return (
    <>
      <Container>
        <Row>
            {userData.map((product, id) => (
                <Col md={3} key={id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <h3>{product.body}</h3>
                            <Button variant='primary'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            <Col md={3}>

            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Axiostest;
