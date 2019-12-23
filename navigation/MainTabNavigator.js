import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import CalculatorScreen from '../screens/CalculatorScreen';
import HelpScreen from '../screens/HelpScreen';
import MainIcon from '../components/Icons/MainIcon';
import MarketIcon from '../components/Icons/MarketIcon';
import HelpIcon from '../components/Icons/HelpIcon';
import CalculatorIcon from '../components/Icons/CalculatorIcon';
import Logo from '../assets/images/logo.png';

const headerTitle = (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
            source={Logo}
            style={{ width: 172.15, height: 24 }}
        />
    </View>
);

const defaultStackConfig = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#1BA9D7',
        },
        headerLeft: null,
        headerRight: null,
        headerTitle: headerTitle,
    }
};

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        ...defaultStackConfig,
        navigationOptions: {
            tabBarLabel: 'Главная',
            tabBarIcon: MainIcon
        }
    }
);

const MarketStack = createStackNavigator(
    {
        Market: MarketScreen,
    },
    {
        ...defaultStackConfig,
        navigationOptions: {
            tabBarLabel: 'Маркетолог',
            tabBarIcon: MarketIcon
        }
    }
);

const CalculatorStack = createStackNavigator(
    {
        Calculator: CalculatorScreen,
    },
    {
        ...defaultStackConfig,
        navigationOptions: {
            tabBarLabel: 'Калькулятор',
            tabBarIcon: CalculatorIcon
        }
    }
);

const HelpStack = createStackNavigator(
    {
        Help: HelpScreen,
    },
    {
        ...defaultStackConfig,
        navigationOptions: {
            tabBarLabel: 'Справка',
            tabBarIcon: HelpIcon
        }
    }
);

export default createBottomTabNavigator({
    HomeStack,
    MarketStack,
    CalculatorStack,
    HelpStack,
});
