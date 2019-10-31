import React from 'react';
import { Platform } from 'react-native';

// REACT NAVIGATION
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


// SCREENS
import HomeScreen from '../screens/HomeScreen';
import UtilitiesScreen from '../screens/UtilitiesScreen';
import UtilitiesDetailScreen from '../screens/UtilitiesDetailsScreen';

// ICONS
import Icon from '../components/Icon';

// GLOBAL VARIABLES
import { COLORS } from '../assets/globals/colors';

const HomeStackNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen
        }
    }, 
    {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: COLORS.primaryColor
        },
        headerTintColor: COLORS.lightTextColor,
        headerTitleStyle: {
            fontFamily : 'Montserrat-Light',
            fontSize : 22,
            fontWeight : '200'
        },
        headerBackTitleStyle : {
            fontFamily : 'Montserrat-Light',
            fontSize : 18,
            fontWeight : '200'
        }
    }
});

const UtilitiesStackNavigator = createStackNavigator({
        Utilities : {
            screen : UtilitiesScreen,
            navigationOptions : {
                title : 'Events'
            }
        },
        UtilitiesDetails : {
            screen : UtilitiesDetailScreen
        }
    },
    {
        initialRouteName : 'Utilities',
        defaultNavigationOptions : {
            headerStyle : {
                backgroundColor : Platform.OS === 'ios' ? 'white' : COLORS.primaryColor,
            },
            headerTintColor : Platform.OS === 'ios' ? COLORS.primaryColor : COLORS.lightTextColor,
            headerTitleStyle: {
                fontFamily : 'Montserrat-Light',
                fontSize : 22,
                fontWeight : '200'
            },
            headerBackTitleStyle : {
                fontFamily : 'Montserrat-Light',
                fontSize : 18,
                fontWeight : '200'
            }
        }
    }
)

const TabRoutes = {
    Home: {
        screen : HomeStackNavigator,
    },
    Utilities: {
        screen : UtilitiesStackNavigator,
        navigationOptions : {
            title  : 'Events'
        }
    },
};

const DefaultTabConf = {
    defaultNavigationOptions : ({navigation}) => ({
        tabBarIcon : ({focused, horizontal, tintColor}) => {
            const { routeName } = navigation.state;
            let IconComponent = Icon;

            let iconName;

            if (routeName === 'Home') {
                iconName = `home`;
            } else if ( routeName === 'Utilities') {
                iconName = `calendar`
            }

            return <IconComponent name={iconName} size={30} color={tintColor} />
        }
    }),
}

const TabNavigator = createBottomTabNavigator(
    TabRoutes,
    {
        ...DefaultTabConf,
        tabBarOptions: {
            activeTintColor: '#03a9f4',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontFamily : 'Montserrat-Light'
            }
        }
    }
);

const MaterialTabNavigator = createMaterialBottomTabNavigator(
    TabRoutes,
    {
        defaultNavigationOptions : ({navigation}) => ({
            tabBarIcon : ({focused, horizontal, tintColor}) => {
                const { routeName } = navigation.state;
                let IconComponent = Icon;
    
                let iconName;
    
                if (routeName === 'Home') {
                    iconName = `home`;
                } else if ( routeName === 'Utilities') {
                    iconName = `calendar`
                }
    
                return <IconComponent name={iconName} size={26} color={tintColor} />
            }
        }),
        activeColor : COLORS.primaryColor,
        barStyle : {
            backgroundColor : 'white'
        }
    }
)

export default createAppContainer(Platform.OS === 'android' ? MaterialTabNavigator : TabNavigator);