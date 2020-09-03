import React, {Component, useState,useEffect,useContext } from "react"; 
import { View,Text,Image } from "react-native";
import {Input,CardSpace,Spinner} from "../../common"
import firebase from "firebase"
import { TouchableOpacity } from "react-native-gesture-handler";


 class Login extends Component{
  constructor(){
    super();
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user)
    })
    firebase.auth().signOut()
  }
  state= {
    email:"",
    password:"",
    error:"",
    loading: false
  }

      onButtonPress(){
          this.setState({loading:true});
          const {email,password}=this.state;
          firebase.auth().signInWithEmailAndPassword(email,password)
          .then(()=>{this.setState({loading:false})})
          .catch(()=>{
            console.log("1st erroe")
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{this.setState({loading:false})})
          .catch(()=>{
            this.setState({loading:false})
          console.log("2nd erroe")
          })
          })
      }

      onLoginSucess(){
        this.setState({
          email:"",
          password:"",
          error:"",
          loading:false
        })
      }
      onLoginFail(){
        this.setState({
          error:"login fail",
          loading:false
        })
      }

   render(){
      return (<View style={{flex:1,
      justifyContent:"center",alignItems:"center"}}>
       <CardSpace>
        <Input value={this.email} 
        onChangeText={email=>this.setState({email})}
        placeholder="Email"
         />
       </CardSpace>
       <CardSpace>
       <Input value={this.password} 
        onChangeText={password=>this.setState({password})}
        placeholder="Password"
        secureTextEntry
        />
      </CardSpace>

{  this.state.loading==false?      <TouchableOpacity 
        style={{backgroundColor:"grey"}}
        onPress={()=>{this.onButtonPress()}}
        >
          <Text style={{borderWidth:1,padding:10}}>login</Text>
        </TouchableOpacity>
        :<Spinner/>
}
</View>
    );
  }
}

  export default Login ; 
