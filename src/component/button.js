import React , {Component} from 'react'
import {Text, TouchableOpacity, View} from "react-native";
export default class ButtonComponent extends Component {
    render() {
        return(
            <TouchableOpacity style={this.props.containerStyle} onPress={this.props.onHandleClick}>
                <View style={this.props.buttonStyle}>
                    <Text style={this.props.textStyle}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
