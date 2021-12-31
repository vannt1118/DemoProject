import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';

export default class CalcButton extends React.Component {
    static defaultProps = {
        onPress: function() { },
        title: "",
        color: "white",
        backgroundColor: "black",
        radius: 40,
    
        style: { },
    }
    render() {
        var bc = this.props.backgroundColor;
        return(
            <TouchableOpacity onPress={this.props.onPress} style={[styles.container, {backgroundColor: bc}, {...this.props.style}]}>
                <Text style={[styles.text, {color: this.props.color}]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center", width:80, height:80, borderRadius:40, margin: 5, },
    text: { fontSize: 30, fontWeight: "bold", },
});