import {Dimensions, StyleSheet} from "react-native";
import variables from "./variables";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export const navigationBar = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        // flex: 1,
        height: 250,
        backgroundColor: variables.navigationBarColor

    },
    body: {
        flex: 2,
        backgroundColor: variables.navigationBarBgColor,
    },
    createTeamBtn: {
        display: 'flex',
        alignSelf: 'flex-end',
        marginTop: 30,
        marginRight: 30,
        width: 110,
        height: 40,
        borderRadius: 0,
        justifyContent: 'center',
        backgroundColor: variables.buttonRegisterColor

    },
    avatarContainer: {
        width: 90,
        height: 90,
        backgroundColor: variables.textColor,
        borderRadius: 50,
        marginLeft: 30,
        marginTop: 30
    },
    username: {
        marginLeft: 30,
        marginTop: 8,
        color: variables.textColor
    },
    itemContainer: {
        backgroundColor: variables.navigationBarBgColor,
        marginTop: 20

    },
    itemIcon: {
      color: 'white'
    },
    itemContent: {
        color: variables.textColor,
        marginLeft: 20
    }
})
