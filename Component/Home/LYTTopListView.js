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
    ListView,
    TouchableOpacity,
    Image,
    Dimensions,
    Platform
} from 'react-native';
//获取屏幕宽度
const {width} = Dimensions.get('window');
//全局变量
var cols = 5;
var cellW = Platform.OS == 'ios' ? 70: 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);
/**---------导入外部组件类----------**/

export default class LYTTopListView extends Component {
    static defaultProps = {
        dataArr : []
    };
    // 创建数据源
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    }
    //具体的cell
    renderRow(rowData) {
        return(
             <TouchableOpacity style={styles.cellStyle} activeOpacity={0.5} onPress={()=>{alert('点我')}}>
                    <Image source={{uri: rowData.image}} style={styles.imageStyle}/>
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
             </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contentViewStyle: {
        // 改变主轴方向
        flexDirection: 'row',
        //换行
        flexWrap: 'wrap',
        width: width,
        //backgroundColor: 'green'
    },
    cellStyle: {
        width: cellW,
        height: cellH,
        marginTop: 10,
        //backgroundColor: 'red',
        marginLeft:vMargin,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: 52,
        height: 52,
    },
    titleStyle: {
        fontSize: 12,
        color: 'gray',
    }

});

