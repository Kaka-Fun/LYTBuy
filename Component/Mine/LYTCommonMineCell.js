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

/**---------导入外部组件类----------**/

export default class LYTCommonMineCell extends Component {
    static defaultProps = {
        leftIconName: '',
        leftTitle: '',
        rightIconName: '',
        rightTitle: ''
    };
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('你点我！')}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                        {this.rightSubView()}
                </View>
            </TouchableOpacity>
        );
    }
    //右边的内容
    rightSubView() {
        return(
            <View style={styles.rightViewStyle}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8, marginLeft: 8}}/>
            </View>
        )
    }
    //右边具体返回的值
    renderRightContent() {
        if(this.props.rightIconName.length > 0) {
            return (
                <Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13}}/>
            )
        }else{
            return(
                <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 40,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5

    },
    leftViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    leftImgStyle: {
        width:24,
        height:24,
        marginLeft: 8,
        borderRadius: 12,
    },
    leftTitleStyle: {
        fontSize: 16,
        marginLeft: 6,
    },
    rightViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }


});

