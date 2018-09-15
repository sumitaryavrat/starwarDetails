
import React, { Component } from "react";
import {ListGroup, ListGroupItem,Grid, Row, Col,Button,Label} from "react-bootstrap";
//import {Route,Link } from "react-router-dom";
//import "./CharctersList.css";
import Gallery from 'react-grid-gallery';
import {people }from './temp'
import Profile from './profile'
//import IMAGES from './posters'
var { graphql, buildSchema } = require('graphql');
const characterArray =[{'name':'jadu'},{'name':'jadu'},{'name':'jadu'},{'name':'jadu'},{'name':'jadu'},{'name':'jadu'},{'name':'jadu'},
{'name':'jadu'},{'name':'jadu'},{'name':'jadu'},
{'name':'jadu'},{'name':'jadu'},{'name':'jadu'},{'name':'jadu'},
{'name':'jadu'}]
export default class CharactersList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         character:null,
         change:false
        };
      }

    render(){
        console.log(this.props.data);
        
        return(
            <div className="Login">
           <Grid>
  <Row className="show-grid">
    <Col md={4} mdPush={4}><ListGroup>
    <ListGroupItem><div className='Header1' style={{height:'auto'}}>List Of Characters</div></ListGroupItem>
        {
               this.props.data.map((data,index)=>(<ListGroupItem> <Button bsSize="large" active onClick={()=>{this.setState({character:data}),this.setState({change:true})}}>{data.name}</Button></ListGroupItem>))
           }
           </ListGroup></Col>
        <Col md={8} mdPush={8}><Profile flag={this.state.change} character={this.state.character}/></Col></Row></Grid>
            </div>
            
             
        )
    }
}
