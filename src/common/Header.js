import React, { useState,useEffect,useContext } from "react"; 
import { View,Text,Image } from "react-native";

 const Header=(props) =>{
      return (<View style={{justifyContent:"center",height:50,width:100+"%",backgroundColor:"grey"}}>
      <Text style={{fontSize:20,fontWeight:"bold",marginLeft:10}}>{props.title}</Text>
      
</View>
    );}

  export { Header }; 
