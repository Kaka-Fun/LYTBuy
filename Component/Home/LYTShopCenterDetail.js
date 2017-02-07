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
    WebView,
    Platform,
    TouchableOpacity,
    Image
} from 'react-native';

/**---------导入外部组件类----------**/

export default class LYTShopCenterDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        };
    }
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                {/*加载网页*/}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="fast"
                    startInLoadingState={true}
                />
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity activeOpacity={0.5} onPress={() =>{this.props.navigator.pop()}}style={styles.leftViewStyle}>
                    <Image source={{uri:'navigationbar_arrow_up'}} style={styles.navLeftImageStyle}/>
                </TouchableOpacity>
                <View>
                    <Text style={styles.navTextStyle}>购物中心</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('点击了')}} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navRightImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
    navLeftImageStyle: {
        width: Platform.OS === 'ios' ? 14 : 25,
        height: Platform.OS === 'ios' ? 20 : 25,
        resizeMode: 'contain'
    },
    navRightImageStyle: {//设置导航右边图片大小
        width: Platform.OS === 'ios' ? 28 : 25,
        height: Platform.OS === 'ios' ? 28 : 25,
    },
    rightViewStyle: {
        position: 'absolute',
        right: 8,
        bottom: 8

    },
    leftViewStyle: {
        position: 'absolute',
        left: 8,
        bottom: 8
    }

});

