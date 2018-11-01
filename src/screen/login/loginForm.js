import React, {Component, Fragment} from 'react'
import {Button, Input, Item, Right, Text, View} from "native-base";
import {Field, reduxForm} from "redux-form";
import {login} from "../../theme/login.style";
import variables from "../../theme/variables"
import {TouchableOpacity} from "react-native";
import {Actions} from 'react-native-router-flux'

const validate = values => {
    const error = {};
    error.account = "";
    let acc = values.account;
    if (values.account === undefined) {
        acc = "";
    }
    return error;
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady: true});
    }

    renderInput = ({input, label, type, meta: {touched, error, warning}}) => {
        let hasError = false;
        if (error !== undefined) {
            hasError = true
        }
        if (input.name === "password") {
            return (
                <Item error={hasError} style={login.inputText}>
                    <Input secureTextEntry={true} {...input} style={{color: variables.textColor}} placeholder="Mật khẩu"
                           placeholderTextColor={variables.placeholderColor}/>
                    {hasError ? <Text>{error}</Text> : <Text/>}
                </Item>
            );
        } else {
            return (
                <Item error={hasError} style={login.inputText}>
                    <Input {...input} style={{color: variables.textColor}} placeholder="Tài khoản"
                           placeholderTextColor={variables.placeholderColor}/>
                    {hasError ? <Text>{error}</Text> : <Text/>}
                </Item>
            )
        }
    };

    render() {
        const {handleSubmit, reset} = this.props;
        return (
            <View style={login.loginFormWrapper}>
                <View style={login.inputTextContainer}>
                    <Field name="account" component={this.renderInput}/>
                </View>
                <View style={login.inputTextContainer}>
                    <Field name="password" component={this.renderInput}/>
                </View>
                <TouchableOpacity style={login.buttonSubmitContainer} onPress={() =>  Actions.pitchList()}>
                    <View style={login.buttonSubmit}>
                        <Text style={login.buttonSubmitTitle}>ĐĂNG NHẬP</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default reduxForm({
    form: 'test',
    validate
})(LoginForm)
