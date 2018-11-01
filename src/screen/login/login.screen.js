import React , {Component} from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import {login} from "../../theme/login.style";
import LoginForm from './loginForm'
import ButtonComponent from "../../component/button";
import {Actions} from 'react-native-router-flux'
export default class LoginScreen extends Component {
    onRegister = () => {
        Actions.register()
    }
    render() {
        return(
            <View style={login.container}>
                <Text style={login.title}>Đăng nhập</Text>
                <LoginForm/>
                <View style={login.socialButtonContainer}>

                    <ButtonComponent containerStyle={login.buttonFacebookContainer}
                                     buttonStyle={login.buttonFacebook}
                                     textStyle={login.buttonSubmitTitle}
                                     title="FACEBOOK"/>
                    <ButtonComponent containerStyle={login.buttonGoogleContainer}
                                     buttonStyle={login.buttonGoogle}
                                     textStyle={login.buttonSubmitTitle}
                                     title="GOOGLE"/>
                </View>
                <View style={login.RegisterButtonContainer}>
                    <ButtonComponent containerStyle={null}
                                     buttonStyle={login.buttonRegister}
                                     textStyle={login.buttonSubmitTitle}
                                     title="ĐĂNG KÝ"
                                     onHandleClick={this.onRegister}
                    />
                </View>
            </View>
        )
    }
}
