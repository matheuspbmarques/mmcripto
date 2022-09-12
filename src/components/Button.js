import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

export default ({
    styleButton,
    styleTextButton,
    onPress,
    text
}) => {
    return(
        <TouchableNativeFeedback
            onPress={onPress}
        >
            <View style={styleButton}>
                <Text style={styleTextButton}>{text}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}