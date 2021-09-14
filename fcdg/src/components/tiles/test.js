import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Tiles.css';
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import Img from '../../assets/img/etc/I1.jpg';
// import "./Tiles";

var img2 = 'https://i.kym-cdn.com/photos/images/newsfeed/000/804/850/999.gif'

function Test() {
    var x = 100
    var y = 200

    return (
<Container>    
    <Row>
        <Col>
        <Card style={{ height:x+200, width:y, padding:0, backgroundColor:'skyblue'}}>
            <Card.Img style={{ height:x/2, width:y, alignSelf:"center" }} src="https://i.kym-cdn.com/photos/images/newsfeed/000/804/850/999.gif" />
            <Card.Body>
                <Card.Title style={{ textAlign:"center" }}>this is an example of Card Title</Card.Title>
                <Card.Text style={{ textAlign:"center" }}>this is an example of card description this is an example of card description this is an example of card description this is an example of card description this is an example of card description </Card.Text>
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