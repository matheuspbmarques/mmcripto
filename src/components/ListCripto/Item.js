//Style
import Style from './style';

//React
import React from "react";
import { View, Text, TouchableNativeFeedback } from 'react-native';

export default ({ item, setLongName, setShortName }) => {
    return(
        <TouchableNativeFeedback onPress={() => {setLongName(item.longName); setShortName(item.shortName)}}>
            <View style={Style.containerItem}>
                <Text style={Style.textItem}>{item.longName}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}