import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';

export default class IndexView extends React.Component{
    render() {

        const onPress = function() {
            this.props.navigator.push({index: 1});
        };

        return (
            <View style={styles.container}>
                <Button title="New game" onPress={onPress.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});
