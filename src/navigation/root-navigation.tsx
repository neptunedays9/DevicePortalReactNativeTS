import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button} from 'react-native';

import LoginScreen from '../screen/LoginScreen';
import DashboardScreen from '../screen/DashboardScreen';
import AddItemScreen from '../screen/AddItemScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="loginScreen">
                <Stack.Screen
                    name="loginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="dashboardScreen"
                    component={DashboardScreen} 
                    options={({ navigation, route }) => ({ 
                        headerTitle: "Dashboard",
                        headerRight: () => (
                            <Button
                            title="Add" 
                            onPress={() => navigation.navigate('addItemScreen')}>Test</Button>
                        ), 
                      })} 
                />
                <Stack.Screen
                    name="addItemScreen"
                    component={AddItemScreen} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default RootNavigation;