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
    ListView
} from 'react-native';
/*----------获得屏幕宽高--------------*/
import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');
/**---------导入外部组件类----------**/
import BottomCommonCell from './LYTBottomCommonCell';

/**---------导入外部json数据----------**/
import GuessYouLikeData from '../../LocalData/HomeGuessYouLike.json';

export default class LYTGuessYouLike extends Component {
    static defaultProps = {
        api_url:'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594',
    };
    constructor(props){
        super(props);
        this.state = {
        // 初始化数据源
            dataSource: new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2})
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*头部*/}
                <BottomCommonCell
                    leftImage='cnxh'
                    leftTitle='猜你喜欢'
                />
                {/*下部分*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>alert(rowData.title)}>
               <View style={styles.likeCellStyle}>
                   {/*左边*/}
                   <Image source={{uri: (rowData.imageUrl.search('w.h') == -1) ? rowData.imageUrl : rowData.imageUrl.replace('w.h', '120.90')}}  style={styles.leftImageStyle}/>
                   {/*右边*/}
                   <View style={styles.rightViewStyle}>
                       <View style={styles.rightTopViewStyle}>
                           <Text style={{fontSize:16, fontWeight:'bold',width:180}}>{rowData.title}</Text>
                           <Text style={{fontSize: 12,color: 'gray',}}>{rowData.topRightInfo}</Text>
                       </View>
                       <Text style={{fontSize: 12,color: 'gray'}}>{rowData.subTitle}</Text>
                       <View style={styles.rightBottomViewStyle}>
                           <Text style={{fontSize: 16, color: 'red'}}>¥{rowData.mainMessage2}</Text>
                           <Text style={{fontSize: 12,color: 'gray',}}>{rowData.bottomRightInfo}</Text>
                       </View>
                   </View>
               </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
    //  从网络请求数据
        this.loadDataFromNet();
    }
    loadDataFromNet(){
        fetch(this.props.api_url)
            .then((response) => response.json()) // 下一步
            .then((responseData) => {
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error)=>{
                // 更新数据源
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(GuessYouLikeData.data)
                });
            })
    }
}

const styles = StyleSheet.create({
    container: {

        marginTop: 10,
    },
    likeCellStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding:10,
        borderBottomWidth:0.5,
        borderBottomColor: '#e8e8e8'
    },
    leftImageStyle: {
        width: 120,
        height: 90,
        borderRadius: 8
    },
    rightViewStyle: {
        marginLeft: 8,
        width: width*0.6,
        justifyContent: 'space-around',
        //backgroundColor: 'blue',
    },
    rightTopViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    rightBottomViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    }

});

