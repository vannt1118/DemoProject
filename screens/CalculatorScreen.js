import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { CalcButton, CalcDisplay } from './../components';

require("../lib/swisscalc.lib.format.js");
require("../lib/swisscalc.lib.operator.js");
require("../lib/swisscalc.lib.operatorCache.js");
require("../lib/swisscalc.lib.shuntingYard.js");
require("../lib/swisscalc.display.numericDisplay.js");
require("../lib/swisscalc.display.memoryDisplay.js");
require("../lib/swisscalc.calc.calculator.js");

export default class CalculatorScreen extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          display: "0",
          //orientation: "portrait",
        }

        this.oc = global.swisscalc.lib.operatorCache;
        this.calc = new global.swisscalc.calc.calculator();

    }

    onDigitPress = (digit) => {
        this.calc.addDigit(digit);
        this.setState({display: this.calc.getMainDisplay()})
    }

    onClearPress = () => {
        this.calc.clear();
        this.setState({ display: this.calc.getMainDisplay() });
    }
    
    onPlusMinusPress = () => {
        this.calc.negate();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onBinaryOperatorPress = (operator) => {
        this.calc.addBinaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onUnaryOperatorPress = (operator) => {
        this.calc.addUnaryOperator(operator);
        this.setState({ display: this.calc.getMainDisplay() });
    }

    onEqualsPress = () => {
        this.calc.equalsPressed();
        this.setState({ display: this.calc.getMainDisplay() });
    }

    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.displayContainer}>
                    <CalcDisplay display={this.state.display} />
                </View>
                <View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={this.onClearPress} title="C" color="#081c33" backgroundColor="#ccedd2"/>
                        <CalcButton onPress={this.onPlusMinusPress} title="+/-" color="#081c33" backgroundColor="#c9e6fc"/>
                        <CalcButton onPress={() => {this.onUnaryOperatorPress(this.oc.PercentOperator)}} title="%" color="#081c33" backgroundColor="#c9e6fc"/>
                        <CalcButton onPress={() => {this.onBinaryOperatorPress(this.oc.DivisionOperator)}} title="/" color="#081c33" backgroundColor="#c9e6fc"/>
                    </View>  

                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => {this.onDigitPress("7")}} title="7" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onDigitPress("8")}} title="8" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onDigitPress("9")}} title="9" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onBinaryOperatorPress(this.oc.MultiplicationOperator)}} title="x" color="#081c33" backgroundColor="#c9e6fc"/>
                    </View>   

                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => {this.onDigitPress("4")}} title="4" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onDigitPress("5")}} title="5" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onDigitPress("6")}} title="6" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onBinaryOperatorPress(this.oc.SubtractionOperator)}} title="-" color="#081c33" backgroundColor="#c9e6fc"/>
                    </View>   

                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => {this.onDigitPress("1")}} title="1" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onDigitPress("2")}} title="2" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onDigitPress("3")}} title="3" color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={() => {this.onBinaryOperatorPress(this.oc.AdditionOperator)}} title="+" color="#081c33" backgroundColor="#c9e6fc"/>
                    </View>   

                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => {this.onDigitPress("0")}} title="0" color="#242424" backgroundColor="white" style={{flex: 2}}/>
                        <CalcButton onPress={() => {this.onDigitPress(".")}} title="." color="#242424" backgroundColor="white"/>
                        <CalcButton onPress={this.onEqualsPress} title="=" color="#081c33" backgroundColor="#F39C12"/>
                    </View>   
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white"},
    buttonRow: { flexDirection: "row", justifyContent: "space-between" },
    displayContainer: { flex: 1, justifyContent: "flex-end", backgroundColor: "white"},
})
