import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Tiles.css';
import Card from 'react-bootstrap/Card'
import { Col, Row} from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup'

function Test(){
    return (
<div>
<CardGroup>
  <Card class="card">
    <Card.Img class="image" variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
    <Card.Body>
      <Card.Title class="title">Card title</Card.Title>
      <Card.Text class="description">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card class="card">
    <Card.Img class="image" variant="top" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
    <Card.Body>
      <Card.Title class="title">Card title</Card.Title>
      <Card.Text class="description">
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card class="card">
    <Card.Img class="image" variant="top" src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" />
    <Card.Body>
      <Card.Title class="title">Card title</Card.Title>
      <Card.Text class="description">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>


</div>



    )
}
export default Test;
