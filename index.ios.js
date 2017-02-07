/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**---------导入外部组件类----------**/
import LYTMain from './Component/Main/LYTMain';

export default class LYTBuy extends Component {
  render() {
    return (
        <LYTMain/>
    );
  }
}

AppRegistry.registerComponent('LYTBuy', () => LYTBuy);
