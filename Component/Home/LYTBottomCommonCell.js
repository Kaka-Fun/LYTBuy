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

/**---------导入外部组件类----------**/

export default class LYTBottomCommonCell extends Component {
    static defaultProps = {
        leftImage: '',
        leftTitle: '',
        rightTitle: '',
    };
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: this.props.leftImage}} style={styles.leftImgStyle}/>
                        <Text style={{fontSize: 16}}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={{color: 'gray', marginRight: 5}}>{this.props.rightTitle}</Text>
                        {/*右边的箭头*/}
                        <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 44,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8'
    },
    leftViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    leftImgStyle: {
        width: 30,
        height: 30,
        marginRight: 2,

    },
    rightViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,

    }
});

