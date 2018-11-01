import React, {Component, Fragment} from 'react'
import {Button, Input, Item, Right, Text, View} from "native-base";
import {Field, reduxForm} from "redux-form";
import {register} from "../../theme/register.style";
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

class RegisterForm extends Component {
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
    onRegister = (reset) => {
        reset();
        Actions.login()
    }
    renderInput = ({input, label, type, meta: {touched, error, warning}}) => {
        let hasError = false;
        if (error !== undefined) {
            hasError = true
        }
        if (input.name === "password" || input.name === "rePassword") {
            return (
                <Item error={hasError} style={register.inputText}>
                    <Input secureTextEntry={true} {...input} style={{color: variables.textColor}} placeholder={input.name === "rePassword" ? "Nhập lại mật khẩu" :"Mật khẩu"}
                           placeholderTextColor={variables.placeholderColor}/>
                    {hasError ? <Text>{error}</Text> : <Text/>}
                </Item>
            );
        } else {
            return (
                <Item error={hasError} style={register.inputText}>
                    <Input {...input} style={{color: variables.textColor}} placeholder={input.name === "nickname" ? "Nickname CLB" :"Số điện thoại hoặc Email"}
                           placeholderTextColor={variables.placeholderColor}/>
                    {hasError ? <Text>{error}</Text> : <Text/>}
                </Item>
            )
        }
    };

    render() {
        const {handleSubmit, reset} = this.props;
        return (
            <View>
                <View style={register.inputTextContainer}>
                    <Field name="nickname" component={this.renderInput}/>
                </View>
                <View style={register.inputTextContainer}>
                    <Field name="account" component={this.renderInput}/>
                </View>
                <View style={register.inputTextContainer}>
                    <Field name="password" component={this.renderInput}/>
                </View>
                <View style={register.inputTextContainer}>
                    <Field name="rePassword" component={this.renderInput}/>
                </View>

                <TouchableOpacity style={register.buttonRegisterContainer} onPress={() => this.onRegister(reset)}>
                    <View style={register.buttonRegister}>
                        <Text style={register.buttonSubmitTitle}>ĐĂNG KÝ</Text>
                    </View>
                </TouchableOpacity>
                {/*<Button primary onPress={reset} style={register.buttonSubmit} title='submit'>*/}
                {/*<Text>ĐĂNG NHẬP</Text>*/}
                {/*</Button>*/}
            </View>
        )
    }
}

export default reduxForm({
    form: 'test',
    validate
})(RegisterForm)
