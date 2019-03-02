import React, {Component} from 'react';
import {Image , StyleSheet, Text, View , Dimensions , TouchableOpacity} from 'react-native';
import { createSwitchNavigator, createAppContainer  } from 'react-navigation';
import singIn from './SingInPage';
import singUp from './SingUpPage';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

class StartPage extends Component{
    render(){
        return(
            <View style = {styles.container}>
                {/* <View style = {styles.orangeStyle}>
                    <View style = {styles.blueStyle}>

                    </View>
                </View> */}
                <Image 
                    source = {require('../accest/layout.png')}
                    style = {styles.backgrounddImage} >
                </Image>
                

            
                <View style = {styles.flexOne}>

                </View>
                <View style = {styles.logoContainer}>
                    <Image 
                        source = {require('../accest/logo.png')}
                        style = {styles.logoImage} >
                    </Image>
                </View>
                <View style = {styles.bottonContainer}>
                    <View style = {styles.singUp}>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('singUp')}>
                            <Text style = {styles.bottonText}>SINGUP</Text>
                        </TouchableOpacity>

                    </View>

                    <View style = {styles.singUp}>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('singIn')}>
                            <Text style = {styles.bottonText}>LOGIN</Text>
                        </TouchableOpacity>

                    </View>
                    
                </View>
                
            </View>
        )
    }
}


const RootStack = createSwitchNavigator(
    {
        Home : StartPage,
        singUp : singUp,
        singIn : singIn,
    },
    {
        initialRouteName : 'Home'
    }

  );

export default createAppContainer(RootStack);



let styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor :'#fb9600',
        
    },
    backgrounddImage : {
        width : deviceWidth,
        height : deviceHeight ,
        position : 'absolute',
    },
    flexOne :{
        flex : 1
    },
    logoContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    logoImage :{
        width : 120,
        height : 160,
    },
    bottonContainer : {
        flexDirection : 'row',
        flex : 1,
        justifyContent : 'space-around',
        alignItems : 'flex-start',
        marginRight : 20,
        marginLeft : 20,
        marginTop : 10,
    },
    singUp : {
        width : 140,
        height : 45,
        backgroundColor : '#ffc107',
        borderRadius : 5,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 10

    },
    bottonText :{
        fontSize : 18,
        color : 'white',
        fontWeight :'300'
    },




    blueStyle : {
        height : 180,
         width : deviceWidth *19 ,
        backgroundColor : '#206bec',
        transform :[ {rotateY : '-80deg'} , {translateX : -(deviceWidth *40)} , {translateY : -130}],
        
    },

    orangeStyle : {
        height : 150,
        width : deviceWidth *4,
        backgroundColor : '#ffc107',
        transform :[ {rotateY : '80deg'} , {translateX : -(deviceWidth *8)}],
        position : 'absolute'
    },
})


