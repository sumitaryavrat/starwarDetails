
import React, { Component } from "react";
import { ListGroup, ListGroupItem, Label, Grid, Row, Col } from "react-bootstrap";
import "./Home.css";
import Gallery from 'react-grid-gallery';
var { graphql, buildSchema } = require('graphql');

export default class Profile extends Component {


    render() {
        return (
            <div className="Login">
                <header className="Header1" style={{ height: 'auto', padding: 10 }}><h4>Profile of the Charcter</h4>
                    <Grid>
                        {this.props.flag ? <Row className="show-grid">
                            <Col md={3} mdPush={3}>
                                <ListGroup>
                                    <ListGroupItem><Label>Name</Label></ListGroupItem>
                                    <ListGroupItem><Label>Height</Label></ListGroupItem>
                                    <ListGroupItem><Label>Mass</Label></ListGroupItem>
                                    <ListGroupItem><Label>Hair_color</Label></ListGroupItem>
                                    <ListGroupItem><Label>Skin_color</Label></ListGroupItem>
                                    <ListGroupItem><Label>Birth_year</Label></ListGroupItem>
                                    <ListGroupItem><Label>Gender</Label></ListGroupItem>
                                    <ListGroupItem><Label>Homeworld</Label></ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col md={8} mdPush={8}>
                                <ListGroup>
                                    <ListGroupItem><Label>{this.props.character.name}</Label></ListGroupItem>
                                    <ListGroupItem><Label>{this.props.character.height}</Label></ListGroupItem>
                                    <ListGroupItem><Label>{this.props.character.mass}</Label></ListGroupItem>
                                    <ListGroupItem><Label>{this.props.character.hair_color}</Label></ListGroupItem>
                                    <ListGroupItem><Label>{this.props.character.skin_color}</Label></ListGroupItem>
                                    <ListGroupItem><Label>{this.props.character.birth_year}</Label></ListGroupItem>
                                    <ListGroupItem><Label>{this.props.character.gender}</Label></ListGroupItem>
                                    <ListGroupItem><Label>{this.props.homeworld}</Label></ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row> : <Row className="show-grid">
                                <Col md={11} mdPush={11}>
                                    <ListGroup>
                                        <ListGroupItem><Label>selsect any charcter</Label></ListGroupItem>
                                    </ListGroup></Col>
                            </Row>}
                    </Grid>
                </header>
                <body>

                </body>
            </div>


        )
    }
}