import React, { useState,useEffect,useContext, Component } from "react"; 
import { View,Text,Image,TouchableOpacity, Linking } from "react-native";
import {Header, OpenUrl, NavigateTo} from "../../common"
 class Dashboard extends Component {
  constructor(){
    super();
    // var firebaseConfig = {
    //   apiKey: "AIzaSyChndSkn2AwdNr3D9xf9VS75cFEHrSQLW4",
    //   authDomain: "rusty-41d1f.firebaseapp.com",
    //   databaseURL: "https://rusty-41d1f.firebaseio.com",
    //   projectId: "rusty-41d1f",
    //   storageBucket: "rusty-41d1f.appspot.com",
    //   messagingSenderId: "261690647805",
    //   appId: "1:261690647805:web:a2bad76e14ac7854590a94",
    //   measurementId: "G-QGTFHNSPJ6"
    // };
    console.log("componentWillMount is running Dashboard")
  }
  state= {
    albums:["aaa","aaa","aaa","aaa",]
  }

  albumFunction(){
  return this.state.albums.map(key=><Text>{key}</Text>)
  }
  //this.setState({albums:"aaaa"})
  //props.children 291 lecture
  // onPress={()=>{navigate("AboutApp")}}
        
  render(){
    return (<View style={{flex:1}}>
              <Header title="Dashboard"/>

              <View style={{justifyContent:"center",alignItems:"center"}}>
              <OpenUrl title="Open linkedin" url="https://www.linkedin.com/in/aashutosh-bansal-57a968175/"/>
              <NavigateTo title="Open AboutApp" rootName="AboutApp"/>
              {this.albumFunction()}
            
              </View>


            </View>
    );
  }
}

  export default Dashboard ; 
