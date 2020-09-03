import React, { useState,useEffect,useContext } from "react"; 
import { View,Text,Image } from "react-native";
import {Header, OpenUrl, NavigateTo} from "../../common"
import {connect} from "react-redux"

 const ReduxDashboard=(props) =>{
     console.log(props.libraries)
      return (<View style={{flex:1,
      alignItems:"center"}}>
          <Header title="Dashboard"/>

      <Text>ReduxDashboard</Text>
      
</View>
    );}

 const mapStateToProps=state=>{
//console.log(state);
return {libraries:state.libraries}
 }   
  export default connect(mapStateToProps)( ReduxDashboard) ; 
