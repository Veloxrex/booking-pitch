import {StyleSheet, View} from "react-native";
import variables from "./variables";
import {Body} from "native-base";
import React from "react";

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
    pitchCardUnavailable: {
        marginTop: 20,
        borderRightWidth: 10,
        borderRadius: 10,
        borderColor: variables.unavailableStatus,
        backgroundColor: variables.pitchItemColor,

    },
    pitchCardAvailable: {
        marginTop: 20,
        borderRightWidth: 10,
        borderRadius: 10,
        borderColor: variables.availableStatus,
        backgroundColor: variables.pitchItemColor,

    },
    imageContainer: {
        width: 80,
        height: 80,
        backgroundColor: 'red'
    },
    informationContainer: {
        flexDirection: 'row'
    },
    pitchInformation: {
        flexDirection: 'column',
        paddingHorizontal: 30
    },
    teamName: {
        color: variables.subTextcolor,
        fontSize: 20

    },
    pitchPrice: {
        color: variables.subTextcolor,
        paddingVertical: 5
    },
    pitchStatusContainer: {
        alignSelf: 'flex-end'
    },
    pitchStatusAvailable: {
        color: variables.availableStatus
    },
    pitchStatusUnavailable: {
        color: variables.unavailableStatus
    },
    line: {
        width: '100%',
        borderBottomColor: variables.subTextcolor,
        borderBottomWidth: 1,
        paddingTop: 15
    },
    contactContainer: {
        paddingVertical: 10,
        flexDirection: 'row'
    },
    callNowButtonContainer: {
        width: '50%',
        alignItems: 'flex-start'

    },
    callNowButton: {
        color: variables.subTextcolor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookNowButtonContainer: {
        width: '50%',
        alignItems: 'flex-end',

    },
    bookNowButtonAvailable: {
        color: variables.subTextcolor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookNowButtonUnavailable: {
        opacity: 0.5,
        color: variables.subTextcolor,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
