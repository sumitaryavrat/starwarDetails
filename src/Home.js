import React, { Component } from "react";
import {Button} from "react-bootstrap";
//import {Route,Link } from "react-router-dom";
import "./Home.css";
import Gallery from 'react-grid-gallery';
import{ IMAGES} from './posters'
import CharactersList from './charactersList'

var { graphql, buildSchema } = require('graphql');

var charArray=[]
//
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
     nav:true,
     
    };
  }
componentWillMount(){
 
}

getData(index){
  charArray =[]
 fetch("https://swapi.co/api/films/"+(index+1))
  .then(function(response) {
   return response.json();
})
.then(function(myJson) {
  var data =myJson.characters
  data.map((re,index)=>{
    let a =JSON.stringify(re)
 if(a.length==32){
   var b=a.slice(29,30)
  fetch("https://swapi.co/api/people/"+b)
  .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
  charArray.push(myJson)
  console.log(charArray);
  
 })
}
else{
  var b=a.slice(29,31)
  fetch("https://swapi.co/api/people/"+b)
  .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
  charArray.push(myJson)
  console.log(charArray);
  
 })
}
 
  }
)
  
});

}
  render() {

    return (
      <div className="Login">
        <div className="Header1" ><div className="Header"> {this.state.nav?<h1 style={{color:'white',alignSelf:'center'}}>🔥StarWar Series🔥</h1>:
           <div><Button onClick={()=>this.setState({nav:true})}>{'<<'}</Button>
           <h1 style={{color:'white',alignSelf:'center'}}>🔥Charters and Rolls🔥</h1></div>}
               </div></div>
      <div className="Body">
      {/* <h3>Select any image for open more...</h3> */}
     {this.state.nav?<Gallery images={IMAGES} onClickThumbnail={(index)=>{ this.getData(index)
     }}  />:<CharactersList data ={charArray}/>}</div>
      </div>
    );
  }
}




