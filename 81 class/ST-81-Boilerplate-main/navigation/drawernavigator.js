import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PROFILE from "./screens/PROFILE";
 

const drawer =createDrawerNavigator();

 const drawerNavigator=()=>{
     return (<drawer.navigator>
         <drawer.screen  name='home' component={tabNavigator}/>
         <drawer.screen  name='PROFILE' component={PROFILE}/>
     </drawer.navigator>)
 }
 export default drawerNavigator