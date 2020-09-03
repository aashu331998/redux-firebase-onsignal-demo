import React, { Component,useState,useEffect,useContext } from 'react';
import { View,Button, Text, Image, TouchableOpacity,Dimensions,useWindowDimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AsyncStorage} from "react-native"
import SplashScreen from "../screens/SplashScreen"
import Dashboard from "../screens/drawerTab1/Dashboard"
import AboutApp from "../screens/drawerTab1/AboutApp"
import Login from "../screens/auth/Login"
import ReduxDashboard from "../screens/reduxScreens/ReduxDashboard"
import MyTabBar from './customBottomTab';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function reduxFlow() {
  return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ReduxDashboard" component={ReduxDashboard} headerMode="none"/>
      </Stack.Navigator>
   );
}

function DrawerNavigator() {
  const dimensions = useWindowDimensions();

  return (
      <Drawer.Navigator 
   //   drawerContent={props=><CustomSidebarMenu {...props} />}
   //   initialRouteName="Dashboard"
     // options={{ headerTitle: props => <NavigationDrawerStructure {...props} /> }}
     >
        <Drawer.Screen
         name="DrawerTab" 
         component={DrawerTab1}
      />
        <Drawer.Screen
         name="reduxFlow" 
         component={reduxFlow}
      />
      </Drawer.Navigator>
  );
}

function DrawerTab1() {
  return (
    <Tab.Navigator 
    tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="AboutApp" component={AboutApp} />
    </Tab.Navigator>
  );
}

export default function App() {
  const[flow,setFlow]=useState(0)

  useEffect(()=>{
    AsyncStorage.getItem("token")
    .then(req => req)
    .then(json => {
        setTimeout(() => {
                json=="signedin"? setFlow(1):setFlow(1)
          }, 3000);
       })
    .catch(error => console.log(error));
  
},[])

  return (
      <Stack.Navigator
    //  initialRouteName="SplashScreen"
      headerMode="none">
       {flow==0?
       <Stack.Screen name="SplashScreen" component={SplashScreen}/>
          :null}
        {flow==1?<>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
        </>:null}
        {flow==2?<>
          <Stack.Screen name="Login" component={Login}/>
           </>:null}
        
       
        </Stack.Navigator>
   );
}

