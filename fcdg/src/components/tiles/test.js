import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Tiles.css';
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import Img from '../../assets/img/etc/I1.jpg';
// import "./Tiles";




function Test() {
    return (
<Container>    
    <Row>
        <Col>
        <Card style={{ height:200, width:200}}>
            <Card.Img variant="top" src={Img} width='100px' />
            <Card.Body>
                <Card.Title>this is an example of Card Title</Card.Title>
                <Card.Text>this is an example of card description this is an example of card description this is an example of card description this is an example of card description this is an example of card description </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
    </Row>
</Container>


    );
}

export default Test;