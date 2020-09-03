/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import OneSignal from 'react-native-onesignal'; 


 //Remove this method to stop OneSignal Debugging 
 OneSignal.setLogLevel(6, 0);
  
 // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
 OneSignal.init("49b37c3c-df1c-42cc-93b2-22887bb10990", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
 OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
 
 // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
// OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

  OneSignal.addEventListener('received', ()=>{console.log("recived")});
  OneSignal.addEventListener('opened', ()=>{console.log("opened")});
  OneSignal.addEventListener('ids',  ()=>{console.log("ids")});

AppRegistry.registerComponent(appName, () => App);
