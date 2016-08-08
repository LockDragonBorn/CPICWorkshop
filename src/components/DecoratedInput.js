/*
* @flow
*/

import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  icon:{
    width:60,
    height:40,
    resizeMode:'contain'
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    marginTop: 5,
  }
});

export default function DecoratedInput({style, ...props}) {
  return(
    <View style={[styles.container, style]}>
      <Image style={styles.icon} source={require('../../resources/login_mobile_icon.png')} />
      <TextInput style={styles.input} {...props} placeholderTextColor={'white'}></TextInput>
    </View>
  )
}
