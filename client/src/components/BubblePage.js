import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import withAuth from "../axios/index";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import Nav from "./Nav";
const BubblePage = () => {
 const [colorList, setColorList] = useState([]);
 // fetch your colors data from the server when the component mounts
 // set that data to the colorList state property
 useEffect(() => {
   withAuth().get('http://localhost:5000/api/colors')
     .then(response => {
       setColorList(response.data);
       console.log(response.data)
     })
     // .catch(error => {
     //   alert(error, message);
     // });
 }, []);
 
 
 return (
   <>
     <ColorList colors={colorList} updateColors={setColorList} />
     <Bubbles colors={colorList} />
     <Nav/>
   </>
 );
};
export default BubblePage;


