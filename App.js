/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, ScrollView, FlatList, Text} from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';


class HomeScreen extends React.Component {

    renderEvents = () => {
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#ffffff'}}>
                    <Text>
                        Test
                    </Text>
                </View>
            </ScrollView>
        )
    };

    render() {
        return (
            <View style={{width: 200, backgroundColor: '#ffffff'}}>
                <FlatList
                    ref='scrollView'
                    data={["Test"]}
                    renderItem={this.renderEvents}
                />
            </View>
        );
    }
}


const AppStack = createStackNavigator({
    Home: HomeScreen,
}, {
    headerMode: 'none'
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: AppStack,
    }
);


const InnerPopupStack = createStackNavigator(
    {
        MainApp: TabNavigator,
    }, {
        mode: 'modal',
        initialRouteName: 'MainApp',
        headerMode: 'none',
    }
);


const PopupStack = createStackNavigator(
    {
        MainApp: InnerPopupStack,
    }, {
        mode: 'modal',
        initialRouteName: 'MainApp',
        headerMode: 'none',
    }
);

const MainAppStack = createStackNavigator(
    {
        MainApp: PopupStack,
    }, {
        mode: 'modal',
        initialRouteName: 'MainApp',
        headerMode: 'none'
    }
);

const OuterSwitchNavigator = createAppContainer(createSwitchNavigator({
    MainApp: MainAppStack
}, {
    initialRouteName: 'MainApp',
    headerMode: 'none'
}));

export default OuterSwitchNavigator;
