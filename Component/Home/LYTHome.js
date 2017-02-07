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
    TextInput,
    Image,
    Platform,
    ScrollView,
    ListView

} from 'react-native';
/*----------获得屏幕宽高--------------*/
import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');

/**---------导入外部组件类----------**/
import LYTHomeDetail from './LYTHomeDetail';
import TopView from './LYTTopView';
import MiddleView from './LYTHomeMiddleView'
import MiddleBottomView from  './LYTMiddleBottomView';
import ShopCenter from './LYTShopCenter';
import ShopCenterDetail from './LYTShopCenterDetail';
import GuessYouLike from './LYTGuessYouLike';
import HotCenterView from './LYTHotCenterView';

export default class LYTHome extends Component {

    render() {
        return (
            <View style={styles.container}>
                {/*首页导航条*/}
                {this.renderNavBar()}
                {/*首页的主要内容*/}
                <ScrollView
                    showsVerticalScrollIndicator={false}  //取消滚动条
                >
                    {/*头部的View*/}
                    <TopView/>
                    {/*中间的部分*/}
                    <MiddleView/>
                    {/*中间的下部分*/}
                    <MiddleBottomView
                        popToHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView={(url)=>{this.pushToShopCenterDetail(url)}}
                    />
                    {/*热门频道*/}
                    <HotCenterView/>
                    {/*猜你喜欢*/}
                    <GuessYouLike/>

                </ScrollView>

            </View>
        );
    }
    // 首页导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity activeOpacity={0.5} onPress={() => {this.pushToDetail()}}>
                    <Text style={styles.navLeftTextStyle}>广州</Text>
                </TouchableOpacity>

                {/*中间*/}
                <View>
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder={'输入商家，品类，商圈'}
                        style={styles.topInputStyle}
                    />
                </View>

                {/*右边*/}
                <View style={styles.navRightViewStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity >
                </View>
            </View>
        )
    }
    pushToDetail(data){
        alert(data);
        this.props.navigator.push(
            {
                component:LYTHomeDetail,
                title:'详情页'
            }
        )
    }
    //跳转到购物中心详情页
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component:ShopCenterDetail,
                passProps:{
                    'url':this.dealWithUrl(url)
                }
            }
        )
    }
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=','')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    navBarStyle: {//导航条样式
        paddingTop: Platform.OS === 'ios' ? 20 : 0, //处理iOS状态栏
        height: Platform.OS === 'ios' ? 64 : 44,    //处理iOS状态栏
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection: 'row',                       //设置导航条主轴方向
        alignItems: 'center',                       //设置侧轴对齐方式
        justifyContent: 'space-around'              //设置主轴对齐方式

    },
    navLeftTextStyle: {
        color: 'white'
    },
    topInputStyle: {//设置输入框样式
        width: width * 0.73,
        height: Platform.OS === 'ios' ? 30 : 28,
        backgroundColor: 'white',
        borderRadius: 15,                                //设置输入框圆角
        paddingLeft: 15,                                 //设置内左边距
        paddingBottom: 0,                               //android默认有内边距
        paddingTop:0,                                    //android默认有内边距

    },
    navRightViewStyle: {//设置右端样式
        flexDirection: 'row',
        alignItems: 'center'
    },
    navRightImageStyle: {//设置右边图片大小
        width: Platform.OS === 'ios' ? 28 : 25,
        height: Platform.OS === 'ios' ? 28 : 25,
    }

});

