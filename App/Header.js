import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Header extends Component {
    render() {
        return (
            <View style={header.container}>
                <Text style={header.title}>Home</Text>
                <Text> </Text>
                <Text> </Text>
                <Text style={header.name}>Hey Ahmed Afkir!</Text>
                <Text style={header.text}>REMEMBER TO STAY STORONG AND KEEP YOUR GOALS IN MIND</Text>

            </View>
        )
    }
}

const header = StyleSheet.create ({
    container: {
        backgroundColor: '#232323',
        width: '100%',
        position:'absolute',
        overflow:'hidden',
        top: 0,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFF',
        fontSize:18,
        fontWeight: 'bold',
        color:'#a5a5a5',
    },
    name: {
        color:'#FFFFFF',
        fontWeight: 'bold',
        lineHeight: 0,
        paddingLeft: 30,
        fontSize:20,
        textAlign: 'left',
        alignSelf: 'stretch'
        
    },
    text: {
        fontSize: 10,
        color: '#ff9702',
        paddingLeft: 30,
        textAlign: 'left',
        alignSelf: 'stretch'
    },
});

export default Header;