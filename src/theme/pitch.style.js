import {StyleSheet} from "react-native";
import variables from "./variables";

export const pitch = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: variables.mainBgColor
    },
    filter: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: variables.filterBgColor
    },
    filterTitle: {
        flex: 1,
        color: variables.textColor,
        fontSize: 20,
        paddingLeft: 20,
        paddingVertical: 20
    },
    buttonFilter: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        backgroundColor: variables.filterBgColor,
    },
    pitchItemContainer: {
        flex: 1
    },
    pitchItem: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
    pitchCard: {
        marginTop: 20,
        backgroundColor: variables.pitchItemColor,

    },
    imageContainer: {
        width: 80,
        height: 80,
        backgroundColor: 'red'
    },
    informationContainer: {
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    teamName: {

        color: variables.textColor
    }
})
