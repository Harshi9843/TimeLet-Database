import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, Modal, KeyboardAvoidingView, Alert} from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import db from '../config';
import firebase from 'firebase';



export default class LoginScreen extends Component{

    constructor(){
        super();
        this.state={
            emailId: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            contact:'',
            confirmPassword: '',
            isModalVisible: ''

        }
    }

    userSignUp = (emailId, password, confirmPassword) =>{
        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password")
        }else{
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then(()=>{
                db.collection('users').add({
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    contact: this.state.contact,
                    email_id: this.state.emailId,
                    address: this.state.address
                })
                return Alert.alert(
                    'User Added Successfully',
                    '',
                    [
                        {text: 'OK', onPress:()=> this.setState({isModalVisible: false})},
                    ]
                );
            })
            .catch((error)=>{
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            });
        }
    }

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            this.props.navigation.navigate('TimetTable')
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }

    showModal = ()=>{
        return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          >
          <View style={styles.modalContainer}>
            <ScrollView style={{width:'100%'}}>
              <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text
                style={styles.modalTitle}
                >Registration</Text>
              <TextInput
                style={styles.formTextInput}
                placeholder ={"First Name"}
                maxLength ={8}
                onChangeText={(text)=>{
                  this.setState({
                    firstName: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Last Name"}
                maxLength ={8}
                onChangeText={(text)=>{
                  this.setState({
                    lastName: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Contact"}
                maxLength ={10}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                  this.setState({
                    contact: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Address"}
                multiline = {true}
                onChangeText={(text)=>{
                  this.setState({
                    address: text
                  })
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Email"}
                keyboardType ={'email-address'}
                onChangeText={(text)=>{
                  this.setState({
                    emailId: text
                  })
                }}
              /><TextInput
                style={styles.formTextInput}
                placeholder ={"Password"}
                secureTextEntry = {true}
                onChangeText={(text)=>{
                  this.setState({
                    password: text
                  })
                }}
              /><TextInput
                style={styles.formTextInput}
                placeholder ={"Confrim Password"}
                secureTextEntry = {true}
                onChangeText={(text)=>{
                  this.setState({
                    confirmPassword: text
                  })
                }}
              />
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=>
                    this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                  }
                >
                <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={()=>this.setState({"isModalVisible":false})}
                >
                <Text style={{color:'#ff5722'}}>Cancel</Text>
                </TouchableOpacity>
              </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Modal>
      )
      }



    render(){
        return(
            <SafeAreaProvider>
            <View>
                <View>
                    <MyHeader title = "TimeLet" />
                </View>
                {
                    this.showModal()
                }
            <View>
                <TextInput
                style= {styles.input}
                placeholder = {"abc@example.com"}
                keyboardType = {'email-address'}
                onChangeText = {(text)=>{
                    this.setState({
                        emailId: text
                    })
                }}
                />

                <TextInput
                style = {styles.input}
                placeholder = {"Password"}
                secureTextEntry = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        password: text
                    })
                }}
                />

                <TouchableOpacity style = {styles.loginButton}
                onPress = {()=>{
                    this.userLogin(this.state.emailId, this.state.password)
                }}>
                    <Text style = {styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
            
            </View>
            </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        borderColor: 'black',
        borderRadius: 30,
        width: 300,
        height: 40,
        marginTop: 100,
        marginLeft: 620,
        fontSize: 20
    },
    
    loginButton:{
        backgroundColor: 'orange',
        borderRadius: 30,
        width: 300,
        height: 50,
        marginTop: 50,
        marginLeft: 520,
        justifyContent: 'center'
    },

    loginText:{
        fontSize: 20,
        alignSelf: 'center'
    },
    
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },

      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
})