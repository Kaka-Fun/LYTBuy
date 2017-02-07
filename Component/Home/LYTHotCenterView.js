

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

/*----------获得屏幕宽高--------------*/
import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');

/**---------导入外部组件类----------**/
import CommonCell from './LYTBottomCommonCell';

/**---------导入外部json数据----------**/
import HotCenterData from '../../LocalData/XMG_Home_D6.json';

export default class LYTHotCenterView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*上部*/}
                <CommonCell
                    leftImage='rm'
                    leftTitle='热门频道'
                    rightTitle='查看全部'
                />
                {/*下部分*/}
                <View>
                    {/*上边*/}
                    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                        {this.renderTopItemView()}
                    </View>
                    {/*下边*/}
                    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                        {this.renderBottomItemView()}
                    </View>
                </View>
            </View>
        );

    }
    renderTopItemView(){
    //    组件数组
        var topItemArr = [];
    //    获得数据
        var topData = HotCenterData.data[0].resource.cateArea;
    //    遍历
        for(var i=0; i<2; i++){
        //    拿到一条数据
            var item = topData[i];
        //    将组件装入数组
            topItemArr.push(
                <HotCenterTopCell
                    key={i}
                    mainTitle={item.mainTitle}
                    deputyTitle={item.deputyTitle}
                    otherDesc={item.otherDesc}
                    entranceImgUrl={this.dealWithImgUrl(item.entranceImgUrl)}
                />
            )
        }
    //      返回组件数组
        return topItemArr;
    }
    renderBottomItemView(){
        //    组件数组
        var bottomItemArr = [];
        //    获得数据
        var bottomData = HotCenterData.data[0].resource.cateArea;
        //    遍历
        for(var i=2; i<6; i++){
            //    拿到一条数据
            var item = bottomData[i];
            //    将组件装入数组
            bottomItemArr.push(
                <HotCenterBottomCell
                    key={i}
                    mainTitle={item.mainTitle}
                    deputyTitle={item.deputyTitle}
                    entranceImgUrl={this.dealWithImgUrl(item.entranceImgUrl)}
                />
            )
        }
        //      返回组件数组
        return bottomItemArr;
    }
    dealWithImgUrl(url) {
        if(url.search('w.h')== -1){//没有找到，正常返回
            return url;
        }else {
            return url.replace('w.h','80.60');
        }
    }
}

class HotCenterTopCell extends Component {
    static defaultProps = {
        mainTitle: '',
        deputyTitle: '',
        otherDesc: '',
        entranceImgUrl: ''
    };
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=> {alert('哈')}}>
                <View style={styles.hotCenterTopCellStyle}>
                    {/*左边*/}
                    <View style={styles.topLeftViewStyle}>
                        <Text >{this.props.mainTitle}</Text>
                        <Text style={{fontSize: 11, color:'gray', marginTop:2}}>{this.props.deputyTitle}</Text>
                        <View style={{borderRadius:10,backgroundColor: 'rgba(255,96,0,1.0)',marginTop:2, justifyContent: 'center',width: 35}}>
                            <Text style={{color: 'white',marginLeft:3}}>{this.props.otherDesc}</Text>
                        </View>
                    </View>
                    {/*右边*/}
                    <View style={{justifyContent: 'center'}}>
                        <Image source={{uri: this.props.entranceImgUrl}} style={styles.topImgStyle}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

class HotCenterBottomCell extends Component {
    static defaultProps = {
        mainTitle: '',
        deputyTitle: '',
        entranceImgUrl: ''
    };
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=> {alert('哈')}}>
                <View style={styles.hotCenterBottomCellStyle}>
                        <Text>{this.props.mainTitle}</Text>
                        <Text style={{fontSize: 11, color:'gray'}}>{this.props.deputyTitle}</Text>
                    <View style={{justifyContent: 'center'}}>
                        <Image source={{uri: this.props.entranceImgUrl}} style={styles.bottomImgStyle}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    hotCenterTopCellStyle: {
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: (width-3*3)*0.5,
        marginLeft: 3,
        marginTop: 5,
        marginBottom: 3,
        height: 70,


    },
    topLeftViewStyle: {
        justifyContent: 'center',

    },
    topImgStyle: {
        width: 80,
        height: 60,
    },
    hotCenterBottomCellStyle: {
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: (width-5*3)/4,
        marginLeft: 3,
        marginTop: 5,
        marginBottom: 8,
        height: 90
    },
    bottomImgStyle: {
        width: 60,
        height: 50,
    }

});

AppRegistry.registerComponent('SpotCheck', () => SpotCheck);
