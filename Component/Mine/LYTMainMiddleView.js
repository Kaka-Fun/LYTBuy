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
    Image,
    TouchableOpacity
} from 'react-native';

/**---------导入外部JSON数据----------**/
import MiddleData from './MiddleData.json';

export default class LYTMainMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }
    renderAllItem() {
    //    定义接收数组
        var itemArr=[];
    //    遍历
        for(var i = 0; i < MiddleData.length; i++){
        //    取出单独的数据
            var data = MiddleData[i];
        //    创建数组装入组件
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            )
        }
        return itemArr;
    }
}

//里边的单个小组件
class InnerView extends Component {
    static defaultProps = {
        iconName: '',
        title: '',
    };
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('点击了')}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri: this.props.iconName}} style={{width:40, height:30, marginBottom: 2}}/>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 60,
    },
    innerViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

