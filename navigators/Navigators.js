import React from 'react';

// REACT NAVIGATION
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

// SCREENS
import HomeScreen from '../screens/HomeScreen';
import UtilitiesScreen from '../screens/UtilitiesScreen';
import UtilitiesDetailScreen from '../screens/UtilitiesDetailsScreen';

// ICONS
import { Ionicons } from '@expo/vector-icons';

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
                backgroundColor : COLORS.primaryColor,
            },
            headerTintColor : COLORS.lightTextColor,
            headerTitleStyle: {
                fontFamily : 'Montserrat-Light',
                fontSize : 22,
                fontWeight : '200'
            }
        }
    }
    )

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen : HomeStackNavigator,
    },
    Utilities: {
        screen : UtilitiesStackNavigator,
        navigationOptions : {
            title  : 'Events'
        }
    },
},
    {
        defaultNavigationOptions : ({navigation}) => ({
            tabBarIcon : ({focused, horizontal, tintColor}) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;

                let iconName;

                if (routeName === 'Home') {
                    iconName = `ios-home`;
                } else if ( routeName === 'Utilities') {
                    iconName = `ios-calendar`
                }

                return <IconComponent name={iconName} size={30} color={tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: '#03a9f4',
            inactiveTintColor: 'gray'
        }
    }
);

export default createAppContainer(TabNavigator);