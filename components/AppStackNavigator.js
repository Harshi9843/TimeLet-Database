import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import TimetableScreen from '../screens/TimetableScreen';
import WaterReminderScreen from '../screens/WaterReminderScreen';

export const AppStackNavigator = createStackNavigator({
    TimeTable: {
        screen: TimetableScreen,
        navigationOptions:{
            headerShown: false
        }
    },

    WaterReminder :{
        screen:WaterReminderScreen,
        navigationOptions:{
            headerShown: false
        }
    }
},
 {
     initialRouteName:'TimeTable'
 }
)