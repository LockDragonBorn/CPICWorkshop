/*
* @flow
*/

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    borderRadius: 3,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export default function MainButton({title, style}) {
  return(
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}


