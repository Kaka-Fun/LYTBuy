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
    TouchableOpacity
} from 'react-native';

/**---------导入外部组件类----------**/

export default class LYTHomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {this.pushToPop()}}>
                    <Text style={styles.welcome}>
                        跳转测试
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    pushToPop(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});

