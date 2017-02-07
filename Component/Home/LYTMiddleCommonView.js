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

export default class LYTMiddleCommonView extends Component {
    static defaultProps = {
        title: '',
        subTitle: '',
        rightImage: '',
        titleColor: '',
        tplurl: '',
    //    回调函数
        callBackClickCell: null
    };
    render() {
        return (
          <TouchableOpacity activeOpacity={0.5} onPress={()=> this.clickCell(this.props.tplurl)} style={styles.container}>
                {/*左边*/}
                <View>
                    <Text style={[{color: this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                {/*右边*/}
                <Image source={{uri: this.props.rightImage}} style={styles.rightImgStyle}/>

          </TouchableOpacity>
        );
    }
    clickCell(data){
    //     判断处理
        if(this.props.callBackClickCell == null) return;
        this.props.callBackClickCell(data);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: width*0.5-1,
        height: 59,
        marginBottom: 1,
        marginLeft: 1,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    titleStyle: {
        fontSize: 16
    },
    subTitleStyle: {
        color: 'gray'
    },
    rightImgStyle: {
        width: 64,
        height: 43,
        resizeMode: 'contain'
    }
});

