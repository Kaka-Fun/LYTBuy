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
    Image,
    Platform,
    Switch
} from 'react-native';

/**---------导入外部组件类----------**/

export default class LYTCommonCell extends Component {
    static defaultProps = {
        title: '', //标题
        isSwitch: false, //是否展示开关
        rightTitle: '',

    };
    constructor(props){
        super(props);
        this.state = {
            isOn: false,
        }
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {alert('点击了')}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft: 8}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }
    //cell右边显示的内容
    renderRightView() {
    //    判断
        if(this.props.isSwitch){
            return(
                <Switch
                    value={this.state.isOn == true}
                    onValueChange={() => {this.setState({isOn: !this.state.isOn})}}
                    style={{marginRight: 8}}/>
            )
        }else {
            return(
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitle()}
                    {/*右边的箭头*/}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}}/>
                </View>
            )
        }
    }
    rightTitle() {
        if(this.props.rightTitle.length > 0) {
            return (
                <Text style={{color: 'gray', marginRight: 3}}>{this.props.rightTitle}</Text>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Platform.OS === 'ios' ? 40 : 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
    },


});


