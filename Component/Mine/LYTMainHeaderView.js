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
    Dimensions,
    Platform
} from 'react-native';

/**---------导入外部组件类----------**/

const {width, height} = Dimensions.get('window');

export default class LYTMainHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                {this.renderBottomView()}
            </View>
        );
    }
    //上部分实现
    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri: 'see'}} style={styles.leftIconStyle}/>
                <View style={styles.centerViewStyle}>
                    <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>溜溜团</Text>
                    <Image source={{uri: 'avatar_vip'}} style={{width:17, height:17}}/>
                </View>
                {/*右边的箭头*/}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}}/>
            </View>
        )
    }
    //下部分实现
    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    }
    renderBottomItem() {
    //    数组
        var itemArr=[];
    //     数据数组
        var data = [{'number':'100', 'title':'码哥券'},{'number':'12', 'title':'评价'},{'number':'50', 'title':'收藏'}];
    //    遍历
        for(var i=0; i<data.length; i++){
            var item = data[i];
            itemArr.push(
                <TouchableOpacity key= {i} activeOpacity={0.5} onPress={() => {alert('你点我！')}}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color: 'white', marginBottom: 1}}>{item.number}</Text>
                        <Text style={{color: 'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return itemArr;
    }
}


const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 560 : 160,
        backgroundColor: 'rgba(255,96,0,1.0)',
    },
    topViewStyle: {
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? 440 : 30,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    leftIconStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    centerViewStyle: {
        flexDirection: 'row',
        width: width * 0.72,
    },
    bottomViewStyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,

    },
    bottomInnerViewStyle: {
        width: (width/3)+1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRightWidth: 1,
        borderColor: 'white',

    }


});

