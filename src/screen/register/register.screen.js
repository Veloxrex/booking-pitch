import React , {Component} from 'react'
import {Text, View} from "react-native";
import RegisterForm from './registerForm'
import {register} from "../../theme/register.style";
export default class RegisterScreen extends Component {
    render() {
        return(
            <View style={register.container}>
                <Text style={register.title}>Đăng ký</Text>
                <RegisterForm/>
                <View style={register.wrapper}/>
            </View>
        )
    }
}
