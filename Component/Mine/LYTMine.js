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
    ScrollView
} from 'react-native';

/**---------导入外部组件类----------**/
import CommonMineCell from './LYTCommonMineCell';
import MainMiddleView from './LYTMainMiddleView';
import MainHeaderView from './LYTMainHeaderView';

export default class LYTMine extends Component {
    render() {
        return (
            <ScrollView
                style={styles.ScrollViewStyle}
                contentInset={{top:-400}}
                contentOffset={{y:400}}
            >
                {/*头部*/}
                <MainHeaderView/>
                {/*中部*/}
                <View>
                    <CommonMineCell
                        leftIconName='collect'
                        leftTitle='我的订单'
                        rightTitle='查看全部订单'
                    />
                    <MainMiddleView/>
                </View>
                <View style={styles.container}>
                    <View style={{marginTop:10}}>
                        <CommonMineCell
                            leftIconName='draft'
                            leftTitle='我的钱包'
                            rightTitle='账户余额：¥100'/>
                        <CommonMineCell
                            leftIconName='like'
                            leftTitle='抵用卷'
                            rightTitle='10张'/>
                    </View>
                    <View style={{marginTop:10}}>
                        <CommonMineCell
                            leftIconName='card'
                            leftTitle='积分商城'/>
                    </View>
                    <View style={{marginTop:10}}>
                        <CommonMineCell
                            leftIconName='new_friend'
                            leftTitle='今日推荐'
                            rightIconName='me_new'/>
                    </View>
                    <View style={{marginTop:10}}>
                        <CommonMineCell
                            leftIconName='pay'
                            leftTitle='我要合作'
                            rightTitle='轻松开店，招财进宝'/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,

    },
    ScrollViewStyle: {
        backgroundColor: '#e8e8e8',
    }

});

