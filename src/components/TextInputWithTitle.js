import React from 'react';
import { View, Text, TextInput } from 'react-native';

import formatCurrency from '../functions/formatCurrency';

export default ({
    styleContainer,
    styleTitle,
    styleTextInput,
    title,
    placeholder,
    placeholderColor,
    data,
    setData,
    simbol,
    numberDecimalPlace
}) => {
    return(
        <View style={styleContainer}>
            <Text style={styleTitle}>{title}</Text>
            <TextInput
                style={styleTextInput}
                keyboardType={'decimal-pad'}
                value={data}
                onChangeText={t => {setData(formatCurrency(t, numberDecimalPlace, simbol))}}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
            />
        </View>
    )
}