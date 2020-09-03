import React, { useState,useEffect,useContext } from "react"; 
import{View,TextInput} from "react-native";

 const Input=(props) =>{
      return (<View
         style={{ height:47,width:95+"%",backgroundColor:"#FFFFFF",
            borderColor:"#D2D3D4",borderRadius:0,
            elevation: 4,borderWidth:1,
        }}
      >
      <View style={{flexDirection:"row",flex:1,alignItems:"center"}}>
      <View style={{paddingLeft:3.2+"%",paddingRight:2.3+"%"}}>
      {/* <Image
      source={require('../../images/email1.png')}
      style={{width:12.3,height:9.2}}
      /> */}
      </View>
      <View style={{flex:1}}>
      <TextInput style={{flex:1, fontSize:16,color:"#98999A"}}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text)=>props.onChangeText(text)}
        />
      </View>
      <View style={{paddingLeft:3.2+"%",paddingRight:2.3+"%"}}>
      {/* <Image
      source={require('../../images/email1.png')}
      style={{width:12.3,height:9.2}}
      /> */}
      </View>
     
      </View> 
  </View>
  
    );}

  export { Input }; 
