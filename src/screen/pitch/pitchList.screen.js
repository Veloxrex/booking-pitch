import React, {Component} from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Body, Button, Card, CardItem, Container, Content, getTheme, Header, Icon, Right} from "native-base";
import {pitch} from "../../theme/pitch.style";
import FilterComponent from "../../component/filter";

const PitchLists = [
    {
        id: 1,
        teamName: 'Sân bóng Nhà Máy Đường',
        price1: '300.000',
        price2: '150.000',
        status: 'available'
    },
    {
        id: 2,
        teamName: 'Sân bóng Nhà Máy Đường',
        price1: '300.000',
        price2: '150.000',
        status: 'unavailable'
    },
    {
        id: 3,
        teamName: 'Sân bóng Nhà Máy Đường',
        price1: '300.000',
        price2: '150.000',
        status: 'available'
    },
    {
        id: 4,
        teamName: 'Sân bóng Nhà Máy Đường',
        price1: '300.000',
        price2: '150.000',
        status: 'available'
    },
    {
        id: 5,
        teamName: 'Sân bóng Nhà Máy Đường',
        price1: '300.000',
        price2: '150.000',
        status: 'available'
    }
];

export default class PitchList extends Component {
    render() {
        return (

            <View style={pitch.container}>
                <FilterComponent/>
                <View style={pitch.pitchItemContainer}>
                    <ScrollView>
                        <Card style={pitch.pitchItem}>
                            {PitchLists.map(({teamName, price1, price2, id, status}) => {
                                return (
                                    <CardItem
                                        style={status === 'available' ? pitch.pitchCardAvailable : pitch.pitchCardUnavailable}
                                        key={id}>
                                        <Body>
                                        <View style={pitch.informationContainer}>
                                            <View style={pitch.imageContainer}>
                                                <Image source={require("../../../assets/buger.png")}/>
                                            </View>
                                            <View style={pitch.pitchInformation}>
                                                <Text
                                                    style={pitch.teamName}>{teamName ? teamName : 'Team name is missing'}</Text>
                                                <Text style={pitch.pitchPrice}>Sân 7
                                                    từ: {price1 ? price1 : 'missing price'} đ</Text>
                                                <Text style={pitch.pitchPrice}>Sân 5
                                                    từ: {price2 ? price2 : 'missing price'} đ</Text>
                                            </View>

                                        </View>

                                        <View style={pitch.pitchStatusContainer}>
                                            <Text
                                                style={status === 'available' ? pitch.pitchStatusAvailable : pitch.pitchStatusUnavailable}>
                                                {status === 'available' ? 'Đang có sân' : ' Hết sân'}
                                            </Text>

                                        </View>
                                        <View style={pitch.line}/>
                                        <View style={pitch.contactContainer}>
                                            <View style={pitch.callNowButtonContainer}>
                                                <TouchableOpacity>
                                                    <Text style={pitch.callNowButton}>GỌI NGAY</Text>
                                                </TouchableOpacity>

                                            </View>
                                            <View style={pitch.bookNowButtonContainer}>
                                                <TouchableOpacity disabled={status !== 'available'}>
                                                    <View>
                                                        <Text
                                                            style={status === 'available' ? pitch.bookNowButtonAvailable : pitch.bookNowButtonUnavailable}>ĐẶT
                                                            SÂN</Text>
                                                    </View>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                        </Body>
                                    </CardItem>
                                )
                            })}


                        </Card>
                    </ScrollView>
                </View>
            </View>

        )
    }
}
