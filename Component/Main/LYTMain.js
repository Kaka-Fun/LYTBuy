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
    Navigator,
    Platform // 判断当前运行的系统
} from 'react-native';

/**---------导入外部组件类----------**/
import TabNavigator from 'react-native-tab-navigator';

import Home from '../Home/LYTHome';
import Shop from '../Shop/LYTShop';
import Mine from '../Mine/LYTMine';
import More from '../More/LYTMore';

export default class LYTMain extends Component {
    //初始化函数（变量是可改变的，充当状态机的角色）
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home', //默认是第一个
        }
    }
    render() {
        return (
            <TabNavigator>
                {/*--首页--*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', '首页', Home)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', Mine)}

                {/*--更多--*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', More)}
            </TabNavigator>
        );
    }
    //每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component){
        return(
            <TabNavigator.Item
                title={title} //传递变量，一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.IconStyle}/>}  //图标
                renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.IconStyle}/>}  //选中的图标
                onPress={() => this.setState({ selectedTab:selectedTab})}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
            >
            <Navigator
                initialRoute={{ name: componentName, component: component }}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator} />
                }}
            />
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    IconStyle: {
        height: Platform.OS === 'ios' ? 30 : 25,        //设置底部TabBar图片的大小
        width: Platform.OS === 'ios' ? 30 : 25,         //设置底部TabBar图片的大小
    //    Platform.OS === 'ios' ? 30 : 25,
    },
    selectedTitleStyle: {
        color:'rgba(235,96,30,1.0)'
    }

});

