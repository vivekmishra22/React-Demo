import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CardIcon1 from '../Assets/Images/Trimbak_Mandir.jpg';
import CardIcon2 from '../Assets/Images/Godeshwar.jpg';
import CardIcon3 from '../Assets/Images/Panchvati.jpg';

const MyCard = () => {
  return (
    <>
      <Container>
        <Row className='my-2'>
          
          <Col md={3}>
            <Card className='m-1'>
              <Card.Img variant="top" src={CardIcon1} />
              <Card.Body>
                <Card.Title>Trimbakeshwar Temple</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='m-1'>
              <Card.Img variant="top" src={CardIcon2} />
              <Card.Body>
                <Card.Title>Godeshwar Temple</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='m-1'>
              <Card.Img variant="top" src={CardIcon3} />
              <Card.Body>
                <Card.Title>Panchvati River</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='m-1'>
              <Card.Img variant="top" src={CardIcon1} />
              <Card.Body>
                <Card.Title>Trimbakeshwar Temple</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyCard;
