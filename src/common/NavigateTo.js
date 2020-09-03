import React from "react"; 
import { View,Text,TouchableOpacity,Linking } from "react-native";
import{navigate} from "../navigation/navigationRef"

 const NavigateTo =(props) =>{
      return (<View style={{width:100+"%"}}>
              <TouchableOpacity 
               onPress={()=>{navigate(props.rootName)}}
              >
              <Text style={{fontSize:15,marginLeft:10}}>
                  {props.title}</Text>
              </TouchableOpacity>
            
      
</View>
    );}

  export { NavigateTo }; 
