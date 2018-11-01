import {Text} from "native-base/dist/src/basic/Text";
import React, {Component} from 'react'
import {Button, Card, CardItem, Content, Icon, List, ListItem, Right, View} from "native-base";
import {navigationBar} from "../theme/navigationBar";
const menuItem = [
    {
        icon: '',
        title: 'Đặt sân'
    },
    {
        icon: '',
        title: 'Tìm đội - Cáp kèo'
    },
    {
        icon: '',
        title: 'Lịch sử đặt sân '
    },
    {
        icon: '',
        title: 'Lịch sử cáp kèo'
    }
]
export default class NavigationBar extends Component {
    render() {
        return (
            <View style={navigationBar.container}>
                <View style={navigationBar.header}>
                    <Button style={navigationBar.createTeamBtn}>
                        <Text>TẠO ĐỘI</Text>
                    </Button>
                    <View style={navigationBar.avatarContainer}>

                    </View>
                    <Text style={navigationBar.username}>Customer Name</Text>
                </View>
                <View style={navigationBar.body}>
                    <Content>
                        {menuItem.map((item, index) => (
                            <CardItem style={navigationBar.itemContainer} key={index}>
                                <Icon active style={navigationBar.itemIcon} name="logo-googleplus"/>
                                <Text style={navigationBar.itemContent}>{item.title}</Text>
                            </CardItem>
                        ))}

                    </Content>
                </View>
            </View>
        )
    }
}
