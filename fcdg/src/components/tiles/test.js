import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Tiles.css';
import Card from 'react-bootstrap/Card'
import { Col, Row} from "react-bootstrap";

function Test(){
    return (
<div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://c.tenor.com/hpyQ-qg72MEAAAAM/mocking-chicken.gif" />
        <Card.Body>
            <Card.Title class="title">Card Title</Card.Title>
            <Card.Text class="description">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.memecdn.com/charizard-y-u-no-listen_fb_569232.jpg" />
        <Card.Body>
            <Card.Title class="title">Card Title</Card.Title>
            <Card.Text class="description">
I wanna be the very best
Like no one ever was
To catch them is my real test
To train them is my cause
I will travel across the land
Searching far and wide
Teach Pokémon to understand
The power that's inside.🎃
            </Card.Text>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://instoremag.com/wp-content/uploads/2020/01/doing-a-bit-of-everything-photo-u1.jpg" />
        <Card.Body>
            <Card.Title class="title">Card Title</Card.Title>
            <Card.Text class="description">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://keyhole.co/wp-content/uploads/2019/11/3fdkbz.gif" />
        <Card.Body>
            <Card.Title class="title">Card Title</Card.Title>
            <Card.Text class="description">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
</div>

    )
}
export default Test;
