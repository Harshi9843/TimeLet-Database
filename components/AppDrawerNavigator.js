import React from 'react';
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeScreen from "../screens/HomeScreen";
import TimetableScreen from "../screens/TimetableScreen";
import WaterReminderScreen from "../screens/WaterReminderScreen";
import { AppTabNavigator } from './AppTabNavigator';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    TimeTable:{
        screen:TimetableScreen
    },
    WaterReminder:{
        screen:WaterReminderScreen
    }
},
  {
      initialRouteName: 'Home'
  })
