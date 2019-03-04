import React, {Component} from 'react';
import {Image , StyleSheet, Text, View , Platform , TouchableOpacity} from 'react-native';
import Bottoms from '../components/BottonHolder'

export default class CardPage extends Component{
    static navigationOptions = {
        headerTintColor: 'white',
        headerTransparent : true,
    }
    render(){
        return(
            <View style = {styles.container}>
                <Bottoms/>
            </View>
        )
    }
}



let styles = StyleSheet.create({ 
    container : {
        flex : 1,
        backgroundColor : '#206bec',
    },
})