/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import AppContainer from './navigation';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   box: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'rgba(0,0,0, .4)',
//         shadowOffset: { height: 0, width: 0 },
//         shadowOpacity: 1,
//         shadowRadius: 1,
//       },
//       android: {
//         elevation: 1,
//       },
//     }),
//   },
//   box1: {
//     backgroundColor: 'blue',
//   },
//   box2: {
//     backgroundColor: 'yellow',
//     flex: 2,
//   },
//   box3: {
//     backgroundColor: 'green',
//     flex: 3,
//   },
//   text: {
//     fontSize: 24,
//     color: '#fff',
//     opacity: 0.8,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//   },
// });

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\n Cmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// });

type Props = {};
export default class App extends Component<Props> {
  state = {};

  render() {
    return <AppContainer />;
  }
}