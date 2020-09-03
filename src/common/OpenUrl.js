import React from "react"; 
import { View,Text,TouchableOpacity,Linking } from "react-native";

 const OpenUrl=(props) =>{
      return (<View style={{width:100+"%"}}>
              <TouchableOpacity 
              onPress={()=>{Linking.openURL(props.url)}}
              // onPress={()=>{navigate("AboutApp")}}
              >
              <Text style={{fontSize:15,marginLeft:10}}>
                  {props.title}</Text>
              </TouchableOpacity>
            
      
</View>
    );}

  export { OpenUrl }; 
