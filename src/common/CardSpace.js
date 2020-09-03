import React, { useState,useEffect,useContext } from "react"; 
import { View,Text,Image } from "react-native";

 const CardSpace=(props) =>{
      return (<View style={{width:100+"%",margin:10,justifyContent:"center",alignItems:"center"}}>
    {props.children}  
</View>
    );}

  export { CardSpace }; 
