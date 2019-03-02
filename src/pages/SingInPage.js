import React, {Component} from 'react';
import {Image , StyleSheet, Text, View , Dimensions , Animated , TextInput ,TouchableOpacity} from 'react-native';
import { createStackNavigator ,createAppContainer  } from 'react-navigation';
import card from './cardPage'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

 class SignIn extends Component{
    constructor(props) {
        super(props)
        this.animatedValue = new Animated.Value(0)
        this.animatedValue1 = new Animated.Value(0)
        state = {
            email : '',
            password : '',
            
        }
    }

   

    componentDidMount () {
        this.animate()
      }
      animate () {
        this.animatedValue.setValue(0)
        Animated.timing(
          this.animatedValue,
          {
            toValue: 1,
            duration: 2000,
            // easing: Easing.linear
          }
        ).start();


      }

      


    handleEmail = (text) => {
        this.setState({ email: text })
     }
    handlePassword = (text) => {
        this.setState({ password: text })
     }

    giveInf = (email, pass) =>{
        this.setState({
            email : email,
            password : pass
        })
    }
  
    
    render(){
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [300, -300, 0]
          })

          const translateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [-300, 300, 0]
          })

         

        const translateY = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [-300, 300, 0]
          })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 2]
          })
          const rotateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
          })

        return(
            <View style = {styles.container}>
                {/* <View style = {styles.imageContainer}>
                </View>
                <View style = {styles.inputs}>
                </View> */}
                 

                <View style = {styles.flexOne}>
                    <Image 
                        source = {require('../accest/layout1.png')}
                        style = {styles.backgrounddImage} />
                   
                    <Animated.Image 
                     source = {require('../accest/logo2.png')}
                     style = {[styles.logoImage , {opacity}]}/>
                    
                </View>
                <View style = {styles.inputContainer}>

                <Animated.View style = {[styles.rowStyle , { transform: [{translateX}]}]}>
                    <Image
                      source = {require('../accest/mail.png')}
                      style = {styles.iconImage} />

                    <TextInput
                        style = {styles.input}
                        placeholder = "Email"
                        placeholderTextColor = "#ffffff"
                        onChangeText = {this.handleEmail}/>
                   
                </Animated.View>

                <Animated.View  style = {[styles.rowStyle , { marginLeft : movingMargin}]}>
                    <Image
                      source = {require('../accest/lock.png')}
                      style = {styles.iconImage} />
                    <TextInput
                        style = {styles.input}
                        placeholder = "password"
                        placeholderTextColor = "#ffffff"
                        onChangeText = {this.handlePassword}/>
                    
                </Animated.View>

                
                
                <TouchableOpacity 
                style = {[styles.singInBotton  ,{ transform: [{rotateX}]}] }
                onPress={() => { this.changeColor() }}>
                    <Animated.Text style = {[styles.singInText  ,{ transform: [{rotateX}]}]}>SignIn</Animated.Text>

                </TouchableOpacity>

                <TouchableOpacity >
                    <Animated.Text 
                     onPress = {() => this.props.navigation.navigate('Card')}
                    style = {[styles.forgetText , {marginBottom : 20,  transform: [{translateY}]}]}>Forget password</Animated.Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Animated.Text style = {[styles.forgetText ,  {  transform: [{translateY}]}]}>Doesn't have an email? Sing up</Animated.Text>
                </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const RootStack = createStackNavigator(
    {
        Home : SignIn,
        Card : card 
    },
    {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        }
    },
    {
        initialRouteName : 'Home'
    },
   

  );


export default createAppContainer(RootStack);



let styles = StyleSheet.create({ 
    container : {
        flex : 1,
        backgroundColor : '#206bec',
    },
    backgrounddImage : {
        width : deviceWidth,
        height : deviceHeight * .95,
        position : 'absolute',
        // transform :[  {translateY : -20 }],
    },
    flexOne : {
        flex : 1,
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    logoImage :{
        width : 100,
        height : 70,
        marginTop : 10
    },
    rowStyle :{
        width : 250,
        height :30,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        borderBottomColor : 'white' , 
        borderBottomWidth : 1,
        marginBottom : 5,

    },
    iconImage : {
        width : 20,
        height : 20,
        marginEnd : 30
    },
    input: {
        padding: 5,
        height: 30,
       
     },
    inputContainer :{
        flex : 1 ,
        marginTop : 80,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    singInBotton :{
        width : 200,
        height : 60,
        borderRadius : 5,
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 5 ,
        marginTop : 10,
        backgroundColor : '#ffc107'
    },
    singInText :{
        fontSize : 18,
        color : 'white',
        fontWeight :'300'

    },
    forgetText :{
        fontSize : 15,
        color : 'white',
        
    },
    // imageContainer :{
    //     height : deviceHeight * .5 , 
    //     width : deviceWidth ,

    // },
    // inputs : {
    //     height : deviceHeight * .5 ,
    //     width : deviceWidth * 1.5,
    //     backgroundColor : '#206bec', 
    //     transform :[ {rotate : '-10deg'} , {translateX : -15 }],
    // },
})