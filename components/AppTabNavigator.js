import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TimetableScreen from '../screens/TimetableScreen';
import WaterReminderScreen from '../screens/WaterReminderScreen';
import { AppStackNavigator } from './AppStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
    Timetable:{
        screen:AppStackNavigator,
        navigationOptions:{
            tabBarLabel: "Timetable"
        }
    },
    WaterReminder:{
        screen:WaterReminderScreen,
        navigationOptions:{
            tabBarLabel: "Water Reminder"
        }
    }
})