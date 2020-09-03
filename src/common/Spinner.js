import React, { useState,useEffect,useContext } from "react"; 
import { View,Text,ActivityIndicator } from "react-native";

 const Spinner=(props) =>{
      return (<View style={{ justifyContent:"center",alignItems:"center"}}>
   <ActivityIndicator
   size={props.size||"large"}/>   
</View>
    );}

  export { Spinner }; 
