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
    Image
} from 'react-native';

/**---------导入外部组件类----------**/
import LYTMain from './LYTMain'

export default class LYTLaunchImage extends Component {
    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}/>
        );
    }
    //复杂的操作：定时器|网络请求
    componentDidMount() {
        //定时：隔2S切换到Main
        setTimeout(() => {
            //页面切换
            this.props.navigator.replace({
                component: LYTMain,
            })
        },1500)

    }
}

const styles = StyleSheet.create({
    launchImageStyle: {
        flex: 1,
    },
});


