import React from 'react';
import {Component} from 'react';
import { View, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import {NavigationScreenProp} from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}
  
class LoginScreen extends Component<Props, object> {
    render() {
        const { navigate } = this.props.navigation;
        return (<View>
        <TextInput>UserName</TextInput>
        <TextInput>password</TextInput>
        <Button mode="contained" onPress={() => navigate("dashboardScreen")}>
            Login
        </Button>
    </View>);
    }
}

export default LoginScreen;