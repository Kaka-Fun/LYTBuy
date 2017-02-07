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
  View,
  Navigator
} from 'react-native';

/**---------导入外部组件类----------**/
import LYTLaunchImage from './Component/Main/LYTLaunchImage';

export default class LYTBuy extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ name: '启动页', component: LYTLaunchImage }}
            configureScene={() => {
                return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator} />
            }}
        />
    );
  }
}

AppRegistry.registerComponent('LYTBuy', () => LYTBuy);
