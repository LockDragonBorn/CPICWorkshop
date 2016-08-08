/*
* @flow
*/

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    color: 'white',
    margin: 25,
  },
  bannerImage: {
    height: 100,
    margin: 25,
    resizeMode: 'contain'
  },
});

export default function Banner({title, style}) {
  return(
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.bannerImage} source={require('../../resources/login_bg.png')}/>
    </View>
  )
}


