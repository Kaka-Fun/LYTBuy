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
    TouchableOpacity,
    Image
} from 'react-native';

/**---------导入外部组件类----------**/
import BottomCommonCell from './LYTBottomCommonCell';
/**---------导入外部json数据----------**/
import Home_D5 from '../../LocalData/XMG_Home_D5.json';

export default class LYTShopCenter extends Component {
    static defaultProps={
        popToHomeView: null
    };

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <BottomCommonCell
                    leftImage='gw'
                    leftTitle='购物中心'
                    rightTitle={Home_D5.tips}
                />
                {/*下部分*/}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewStyle}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    }
    renderAllItem() {
    //    组件数组
        var itemArr = [];
    //    拿到数据
        var shopItemData = Home_D5.data;
    //    遍历
        for(var i=0; i<shopItemData.length; i++){
        //    取到单个数据
            var data = shopItemData[i];
            itemArr.push(
                <ShopItem
                    key={i}
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    popTopShopCenter={(url)=>{this.popToHome(url)}}
                />
            )
        }
    //    返回组件数组
        return itemArr
    }
    //继续往父级界面传递参数
    popToHome(url){
        if(this.props.popToHomeView == null) return;
        this.props.popToHomeView(url);
    }
}

class ShopItem extends Component {
    static defaultProps = {
        shopImage: '',
        shopSale: '',
        shopName: '',
        detailurl: '',
        popTopShopCenter: null
    };
    render() {
        return (

            <TouchableOpacity activeOpacity={0.5} onPress={()=> this.clickCell(this.props.detailurl)}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri: this.props.shopImage}} style={styles.shopItemImageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    clickCell(url){
        //     判断处理
        if(this.props.popTopShopCenter == null) return;
        this.props.popTopShopCenter(url);
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,

    },
    itemViewStyle: {
        margin:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shopItemImageStyle: {
        width: 110,
        height:75,
        borderRadius:8
    },
    scrollViewStyle: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    shopSaleStyle: {
        position: 'absolute',
        left: 0,
        bottom: 25,
        fontSize: 12,
        backgroundColor: '#FFC125',
        color : 'white'


    },
    shopNameStyle: {
        marginTop: 5,
        fontSize: 14
    }

});

