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
    TouchableOpacity,
} from 'react-native';
/*----------获得屏幕宽高--------------*/
import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');

/**---------导入外部组件类----------**/
import MiddleCommonView from './LYTMiddleCommonView';
/**---------导入外部json数据----------**/
import Home_D4 from '../../LocalData/XMG_Home_D4.json';
import TopMiddleData from '../../LocalData/HomeTopMiddle.json';

export default class LYTMiddleBottomView extends Component {
    static defaultProps={
          //回调函数
          popToHome: null,
    };

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}>
                    {this.renderBottom()}
                </View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    }
    renderBottom(){
        //获取数据
        var topArr= TopMiddleData.data[0];
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=> {alert('哈')}} style={styles.TopViewStyle}>
                <View style={{marginLeft: 20}}>
                    <Text style={[styles.titleStyle]}>{topArr.title}</Text>
                    <Text style={styles.subTitleStyle}>{topArr.subTitle}</Text>
                </View>
                {/*右边*/}
                <Image source={{uri: topArr.image}} style={styles.rightImgStyle}/>
            </TouchableOpacity>
        )

    }
    renderBottomItem(){
    //    组件数组
        var itemArr = [];
    //    取到准确数据
        var data = Home_D4.data;
    //    遍历
        for(var i=0; i<data.length; i++){
        //    取单独的数据
            var itemData = data[i];
            //console.log(itemData);
        //    装入数组
            itemArr.push(
                <MiddleCommonView
                    key={i}
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightImage={this.dealWithImgUrl(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            );
        }
        // console.log(HotCenterData.data);
        //返回组件数组
        return itemArr;
    }
    //继续往父级界面传递参数
    popToTopView(data){
    //    继续执行回调函数
        this.props.popToHome(data);
    }
    //处理图片尺寸
    dealWithImgUrl(url) {
        if(url.search('w.h')== -1){//没有找到，正常返回
            return url;
        }else {
            return url.replace('w.h','120.90');
        }
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    TopViewStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: width,
        height: 59,
        marginBottom: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    titleStyle: {
        fontSize: 18,
        color: '#FF8C69'
    },
    subTitleStyle: {
        color: 'gray'
    },
    rightImgStyle: {
        width: 120,
        height: 60,
        resizeMode: 'contain',
        marginRight: 20
    }

});

