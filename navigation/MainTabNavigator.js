import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import CalculatorScreen from '../screens/CalculatorScreen.js';
import HelpScreen from '../screens/HelpScreen';
import MainIcon from '../components/Icons/MainIcon';
import MarketIcon from '../components/Icons/MarketIcon';
import HelpIcon from '../components/Icons/HelpIcon';
import CalculatorIcon from '../components/Icons/CalculatorIcon';
import Logo from '../assets/images/logo.png';

const config = {
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor: "#1BA9D7",
        },
        headerLeft: null,
        headerRight: null,
        
        headerTitle: () => <LogoTitle />,
    }
};

function LogoTitle() {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Image
                source={Logo}
                style={{width: 172.15, height: 24}}/>
        </View>
    );
}

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Главная',
    tabBarIcon: ({ focused }) => (
        <MainIcon focused={focused}/>
    ),
};

HomeStack.path = '';

const MarketStack = createStackNavigator(
    {
        Market: MarketScreen,
    },
    config
);

MarketStack.navigationOptions = {
    tabBarLabel: 'Маркетолог',
    tabBarIcon: ({ focused }) => (
        <MarketIcon focused={focused}/>
    ),
};

MarketStack.path = '';

const CalculatorStack = createStackNavigator(
    {
        Calculator: CalculatorScreen,
    },
    config
);

CalculatorStack.navigationOptions = {
    tabBarLabel: 'Калькулятор',
    tabBarIcon: ({ focused }) => (
        <CalculatorIcon focused={focused}/>
    ),
};

CalculatorStack.path = '';

const HelpStack = createStackNavigator(
    {
        Help: HelpScreen,
    },
    config
);

HelpStack.navigationOptions = {
    tabBarLabel: 'Справка',
    tabBarIcon: ({ focused }) => (
        <HelpIcon focused={focused}/>
    ),
};

HelpStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    MarketStack,
    CalculatorStack,
    HelpStack,
});

tabNavigator.path = '';

export default tabNavigator;
