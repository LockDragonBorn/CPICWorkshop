/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

import Banner from './components/Banner'
import DecoratedInput from './components/DecoratedInput'
import MainButton from './components/MainButton'

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  backgroundImage: { 
    flex: 1,
    width: null, 
    height: null
  }
});
function App() {
  return(
    <Image style={styles.backgroundImage} source={require('../resources/loginBg.png') }>
      <StatusBar barStyle='light-content' />
      <ScrollView style={styles.container}>
        <Banner title={"用户登录"} />
        <DecoratedInput style={{marginBottom:20}} placeholder={"输入一个手机号"} />
        <DecoratedInput style={{marginBottom:20}} placeholder={"输入一个密码"} secureTextEntry={true}/>
        <MainButton style={{height:40, margin:40}} title="登录" />
      </ScrollView>
    </Image>
  )
}

export default App

