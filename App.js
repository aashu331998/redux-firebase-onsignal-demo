import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import App from "./src/navigation/navigatorRouter"
import {setNavigator} from "./src/navigation/navigationRef"
import firebase from "firebase"
import {provider, Provider} from "react-redux"
import {createStore} from "redux"
import reducers from "./src/reducers"


firebase.initializeApp(
  {
      apiKey: "AIzaSyChndSkn2AwdNr3D9xf9VS75cFEHrSQLW4",
      authDomain: "rusty-41d1f.firebaseapp.com",
      databaseURL: "https://rusty-41d1f.firebaseio.com",
      projectId: "rusty-41d1f",
      storageBucket: "rusty-41d1f.appspot.com",
      messagingSenderId: "261690647805",
      appId: "1:261690647805:web:a2bad76e14ac7854590a94",
      measurementId: "G-QGTFHNSPJ6"
    }
)


export default ()=>{
    return <NavigationContainer ref={(navigator)=>{setNavigator(navigator)}}>
    <Provider store={createStore(reducers)}>
      <App/>
      </Provider>
      </NavigationContainer>
    };