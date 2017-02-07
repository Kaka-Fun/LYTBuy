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
/*----------获得屏幕宽高--------------*/
import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');
/**---------导入外部组件类----------**/
import MiddleCommonView from './LYTMiddleCommonView';
/**---------导入外部JSON数据----------**/
import TopMiddleLeft from '../../LocalData/HomeTopMiddleLeft.json';

export default class LYTHomeMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                {this.renderRightView()}
                </View>
            </View>
        );
    }
    //左边的部分
    renderLeftView(){
    //拿到对应的数据
        var data = TopMiddleLeft.dataLeft[0];
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=> {alert('哈')}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: data.img1}} style={styles.leftImgStyle}/>
                    <Image source={{uri: data.img2}} style={styles.leftImgStyle}/>
                    <Text style={{color: 'gray'}}>{data.title}</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={{fontSize: 12, color: '#33FFFF', marginRight: 5}}>{data.price}</Text>
                        <Text style={{fontSize: 12, backgroundColor: 'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    //右边的部分
    renderRightView(){
    //  组件数组
        var itemArr = [];
    //  拿到数据
        var rightData = TopMiddleLeft.dataRight;
    //    遍历
        for(var i=0; i<rightData.length; i++){
    //  取出单独的数据
            var data = rightData[i];

            itemArr.push(
                <MiddleCommonView
                    key={i}
                    title={data.title}
                    subTitle={data.subTitle}
                    rightImage={data.rightImage}
                    titleColor={data.titleColor}
                />
            )
        }
        //返回数组组件
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row'
    },
    leftViewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: width*0.5,
        height: 119

    },
    leftImgStyle: {
        width: 120,
        height: 30,
        resizeMode: 'contain'
    }

});

