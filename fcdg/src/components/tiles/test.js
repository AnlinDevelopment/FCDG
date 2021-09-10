import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Tiles.css';
import Card from 'react-bootstrap/Card'
import { Col, Row} from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup'
import "../../assets/img/etc/I1.jpg"



function Test(){
    return (
<div>


    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <img src="https://c.tenor.com/hpyQ-qg72MEAAAAM/mocking-chicken.gif" width="150" height="150" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://media.tenor.com/images/ad9785e577e256febefa9472c755569f/tenor.gif" width="150" height="150" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://i.pinimg.com/originals/6e/7b/73/6e7b73359877f40b3f1ab8229d830466.gif" width="150" height="150" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <img src="https://c.tenor.com/hpyQ-qg72MEAAAAM/mocking-chicken.gif" width="150" height="150" class="card-img-top"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://media.tenor.com/images/ad9785e577e256febefa9472c755569f/tenor.gif" width="150" height="150" class="card-img-top"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src={require('../../assets/img/etc/I1.jpg')} width="150" height="150" class="card-img-top"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

    )
}
export default Test;
