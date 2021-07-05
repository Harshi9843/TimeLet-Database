import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class TimetableScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
               <View>
                    <MyHeader title = "TimeLet" />   
                </View> 

            <Text>
                Timetable
            </Text>
            </View>
            </SafeAreaProvider>
        )
    }
}