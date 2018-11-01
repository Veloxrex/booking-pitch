import {Text, View} from "react-native";
import React, {Component} from "react";
import {pitch} from "../theme/pitch.style";
import {Icon, Button} from "native-base"

export default class FilterComponent extends Component {
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
            <View>
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
            </View>
        )
    }
}