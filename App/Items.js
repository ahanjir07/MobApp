import React, {Component} from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class Items extends Component {
    render() {
        return (
            <View style={StyleItmes.content}>
                <View style={StyleItmes.item}>
                    <Image
                        style={{width: 30, height: 30}}
                        source={require('./images/feed.png')}
                    />
                    <Text style={StyleItmes.titre}>FEED</Text>
                </View>
                <View style={StyleItmes.item}>
                    <Image
                        style={{width: 30, height: 30}}
                        source={require('./images/profile.png')}
                    />
                    <Text style={StyleItmes.titre}>PROFILE</Text>
                </View>
                <View style={StyleItmes.logo}>
                    <Image
                        style={{width: 60, height: 60}}
                        source={require('./images/iconapp.png')}
                    />
                </View>
                <View style={StyleItmes.item}>
                    <Image
                        style={{width: 30, height: 30}}
                        source={require('./images/notification.png')}
                    />
                    <Text style={StyleItmes.titre}>NOTIFICATION</Text>
                </View>
                <View style={StyleItmes.item}>
                    <Image
                        style={{width: 30, height: 30}}
                        source={require('./images/more.png')}
                    />
                    <Text style={StyleItmes.titre}>MORE</Text>
                </View>
            </View>
        )
    }
};
const StyleItmes = StyleSheet.create ({
    content: {
        flex: 1,
        flexDirection: 'row',
        position:'absolute',
        bottom:0,
        width:'100%',
        height:80,
        backgroundColor:'#414149',
        overflow:'hidden',
    },
    item: {
        width: '20%',
        height: '100%',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '20%',
        height: '100%',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titre:{
        color:'#FFFFFF',
        fontSize:10,
        paddingTop:2,
    },

});

export default Items;