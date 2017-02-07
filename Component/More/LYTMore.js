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
    TouchableOpacity,
    Image,
    Platform,
    ScrollView,
} from 'react-native';

/**---------导入外部组件类----------**/
import CommonCell from './LYTCommonCell';

export default class LYTMore extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <ScrollView>
                    <View style={{marginTop: 10}}>
                        <CommonCell title='扫一扫'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <CommonCell title='省流量模式' isSwitch={true}/>
                        <CommonCell title='消息提醒'/>
                        <CommonCell title='邀请好友使用LYT电商'/>
                        <CommonCell title='清空缓冲' rightTitle='1.94M'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <CommonCell title='意见反馈'/>
                        <CommonCell title='问卷调查'/>
                        <CommonCell title='支付帮助'/>
                        <CommonCell title='网络诊断'/>
                        <CommonCell title='关于码团'/>
                        <CommonCell title='我要应聘'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <CommonCell title='精品应用'/>
                    </View>
                </ScrollView>
            </View>
        );
    }
    renderNavBar() {
        return (
            <View style={styles.navOutViewStyle}>
                <View>
                    <Text style={styles.navTextStyle}>更多</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('点击了')}} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    navOutViewStyle: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0, //处理iOS状态栏
        height: Platform.OS === 'ios' ? 64 : 44,    //处理iOS状态栏
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection: 'row',                       //设置导航条主轴方向
        alignItems: 'center',                       //设置侧轴对齐方式
        justifyContent: 'center'                    //设置主轴对齐方式
    },
    navTextStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navImageStyle: {//设置导航右边图片大小
        width: Platform.OS === 'ios' ? 28 : 25,
        height: Platform.OS === 'ios' ? 28 : 25,
    },
    rightViewStyle: {
        position: 'absolute',
        right: 8,
        bottom: 8

    }

});

