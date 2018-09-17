
import React, { Component } from "react";
import { ListGroup, ListGroupItem, Grid, Row, Col, Button, Label } from "react-bootstrap";
import Profile from './profile';
import ReactLoading from 'react-loading';
export default class CharactersList extends Component {
    constructor(props) {                //constructor
        super(props);

        this.state = {
            character: null,     //for character
            change: false,      //for navigaion states
            loader: false,     //for loader states
            planet: ''
        };
    }
    getData(url) {                          //fetching planet name
        const charArray = ((name) => {

            this.setState({ planet: name })
            console.log(this.state.planet);

            this.setState({ change: true })
            this.setState({ loader: false })
        })
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                charArray(myJson.name)


            })

    }

    render() {


        return (
            <div className="Login">
                <Grid>
                    <Row className="show-grid">
                        <Col md={4} mdPush={4}><ListGroup>
        <ListGroupItem><div className='Header1' style={{ height: 'auto' }}>List Of Characters</div></ListGroupItem>         {/*Character list*/}
                            {
                                this.props.data.map((data, index) => (<ListGroupItem> <Button bsSize="large" active onClick={() => {
                                    this.setState({ character: data }),
                                        this.getData(data.homeworld),
                                        this.setState({ loader: true })
                                }}>{data.name}</Button>
                                </ListGroupItem>))
                            }
                        </ListGroup></Col>
                        <Col md={8} mdPush={8}>{this.state.loader ? <div className="Header1" style={{ height: 'auto', paddingLeft: '45%' }}>
                            <ReactLoading type="spinningBubbles" color="#fff" /></div> : ''}                                                                 {/*Character's profile*/}
                            <Profile flag={this.state.change} character={this.state.character} homeworld={this.state.planet} />
                        </Col>
                    </Row>
                </Grid>
            </div>


        )
    }
}
