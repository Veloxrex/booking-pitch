import React, {Component} from 'react'
import {Image, Text, View} from "react-native";
import {Body, Button, Card, CardItem, Container, Content, getTheme, Header, Icon, Right} from "native-base";
import {pitch} from "../../theme/pitch.style";

export default class PitchList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
    }

    toggle = (e) => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <View style={pitch.container}>
                <View style={pitch.filter}>
                    <Text style={pitch.filterTitle}>Bộ lọc</Text>
                    <Button onPress={(e) => this.toggle(e)} style={pitch.buttonFilter}>
                        <Icon style={pitch.buttonIconFilter} name={this.state.toggle ? 'arrow-up' : 'arrow-down'}/>
                    </Button>
                </View>
                <View style={{
                    height: this.state.toggle ? 400 : 0,
                    backgroundColor: '#3A5765'
                }}>
                </View>
                <View style={pitch.pitchItemContainer}>
                    <Card style={pitch.pitchItem}>
                        <CardItem style={pitch.pitchCard}>
                            <Body>
                                <View style={pitch.informationContainer}>
                                    <View style={pitch.imageContainer}>
                                        <Image source={require("../../../assets/buger.png")}/>

                                    </View>
                                    <Text style={pitch.teamName}>Sân bóng nhà máy đường</Text>
                                </View>
                            </Body>
                        </CardItem>
                        <CardItem style={pitch.pitchCard}>
                            <Body>
                            <Text>
                                //Your text here
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </View>
        )
    }
}
