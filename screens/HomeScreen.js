import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class HomeScreen extends Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <View>
                    <MyHeader title = "TimeLet" />
                </View>  
          
            <TouchableOpacity style = {styles.button1}>
                <Text style = {styles.buttonText}>
                    TimeTable
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button2}
            onPress = {this.props.navigation.navigate('WaterReminderScreen')}>
                <Text style = {styles.buttonText}>
                    Water Reminder
                </Text>
            </TouchableOpacity>

            </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    button1:{
        borderRadius: 10,
        backgroundColor: "orange",
        width: 120,
        height: 50,
        marginTop: 150,
        marginLeft: 640,
        alignContent: 'center',
        justifyContent: 'center'
    },

    button2:{
        borderRadius: 10,
        backgroundColor: "orange",
        width: 120,
        height: 50,
        marginTop: 100,
        marginLeft: 640,
        alignContent: 'center',
        justifyContent: 'center'
    },

    buttonText:{
        fontSize: 12,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})