import {StyleSheet} from 'react-native'
import variables from "./variables";
import {Dimensions} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export const login = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variables.loginBgColor
    },
    title: {
        marginVertical: 32,
        color: variables.textColor,
        fontSize: 40,
        fontWeight: '300'
    },
    inputTextContainer: {
        marginTop: 10,
        marginBottom: 20
    },
    inputText: {
        width: deviceWidth / 1.2
    },
    buttonSubmitContainer: {
        alignItems: 'flex-end',
    },
    buttonSubmit: {
      backgroundColor: variables.loginBtnColor,
        paddingHorizontal: 32,
        paddingVertical: 16
    },
    buttonSubmitTitle:{
        color: variables.textColor,
        fontSize: 16
    },
    socialButtonContainer: {
        flex:1,
        flexDirection: 'row',
        width: deviceWidth / 1.2,
        alignItems: 'flex-end'
    },
    buttonFacebookContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    buttonFacebook: {
        backgroundColor: variables.loginBtnColor,
        paddingHorizontal: 100,
        paddingVertical: 20
    },
    buttonGoogleContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    buttonGoogle: {
        backgroundColor: variables.googleBtnColor,
        paddingHorizontal: 100,
        paddingVertical: 20
    },
    RegisterButtonContainer: {
        marginVertical: 32,
        width: deviceWidth / 1.2
    },
    buttonRegister: {
        alignItems: 'center',
        backgroundColor: variables.registerBtnColor,
        paddingVertical: 20
    },
})
