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
    ScrollView,
    ListView,
    Platform,
    Image,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');
/**---------导入外部json数据----------**/
import TopMenu from '../../LocalData/TopMenu.json';
/**---------导入外部组件----------**/
import TopListView from './LYTTopListView';

export default class LYTTopView extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: 0,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>{this.onScrollAnimationEnd(e)}}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    }
    //当一帧滚动结束时调动
    onScrollAnimationEnd(e) {
    //    求当前页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x/width);
    //    更新状态机
        this.setState({
            activePage: currentPage
        })
    }
    //ScrollView内部的组件
    renderScrollItem() {
        //组件数组
        var itemArr = [];
        //颜色数组
        var dataArr = TopMenu.data;
        //遍历数组
        for(var i = 0; i<dataArr.length; i++){
            itemArr.push(
                <TopListView
                    key={i}
                    dataArr={dataArr[i]}
                />
            )
        }
        //返回组件数组
        return itemArr;
    }
    //页码指示器
    renderIndicator() {
        // 组建数组
        var indicatorArr= [], style;
    //     遍历数组
        for(var i=0; i<2; i++){
            //设置原点样式
            style= (i === this.state.activePage ? {color: 'orange'} : {color: 'gray'});
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25},style]}>&bull;</Text>
            )
        }
        //返回组件数组
        return indicatorArr;
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    indicatorViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

