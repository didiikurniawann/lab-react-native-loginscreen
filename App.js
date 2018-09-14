/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import Login from '/SMKTELKOMPURWOKERTO/KelasXI/KK4/didi14/source/Components/Login';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    	<KeyboardAvoidingView behavior="padding" style={styles.container}>
    	<View style={styles.logoContainer}>
       
    	 <Image
    	 style={styles.logo}
    	 source={require('/SMKTELKOMPURWOKERTO/KelasXI/KK4/didi14/source/Images/Didid.png')}
    	 />

        <Text style={styles.title}>LOGIN</Text>
        </View>
        <View style={styles.formConatiner}>
        <Login/>
        </View>     
        </KeyboardAvoidingView>
        
    );
  }
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ff7f50',
  },
  logoContainer:{
  	alignItems: 'center',
  	flexGrow: 1,
  	justifyContent: 'center'

  },

  logo:{

  	width:200,
  	height:200
  },

  title:{
  	fontSize:30,
  	fontWeight:'bold',	
  	color: '#ffffff',
  	marginTop: 50,
  	width:160,
  	textAlign: 'center',
  	opacity: 0.9
  },

  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});