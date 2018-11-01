import {StyleSheet} from 'react-native'
import variables from "./variables";
import {Dimensions} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export const register = StyleSheet.create({
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
    buttonRegisterContainer: {
        alignItems: 'flex-end',
    },
    buttonRegister: {
        backgroundColor: variables.registerBtnColor,
        paddingHorizontal: 32,
        paddingVertical: 16
    },
    buttonSubmitTitle:{
        color: variables.textColor,
        fontSize: 16
    },
    wrapper: {
        flex:1,
        flexDirection: 'row',
        width: deviceWidth / 1.2,
        alignItems: 'flex-end'
    }
})
