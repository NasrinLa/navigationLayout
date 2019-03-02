import { createBottomTabNavigator ,createAppContainer  } from 'react-navigation';
import SingUpPage from './SingUpPage'
import  StartingPage from './StartingPage'

const RootStack = createBottomTabNavigator(
    {
        Home : SingUpPage,
        Alaki : SingUpPage,
    },
    {
        initialRouteName : 'Home',
        tabBarOptions: {
            tabTransparent : true,
            labelStyle: {
              fontSize: 15,
            },
            tabStyle: {
              height : 40,
              //  width : 180 ,
              marginBottom: 5
            },
            activeTintColor: 'white',
            inactiveTintColor: 'rgba(255,255,255,.5)',
            style: {
                backgroundColor: 'transparent',
            },
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
        }
    }

  );

export default createAppContainer(RootStack);
