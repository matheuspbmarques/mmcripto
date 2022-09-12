//Style
import Style from './style.js';

//React
import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';

export default ({value, setValue}) => {
    let [placeholderTextInput, setPlaceholderTextInput] = useState('Digite o valor');
    return(
        <View style={Style.container}>
            <Text
                style={Style.text}
            >
                Em qual valor da criptomoeda você deseja retirar o seu dinheiro?
            </Text>
            <TextInput
                style={Style.textInput}
                placeholder={placeholderTextInput}
                placeholderTextColor='#b2bec3'
                value={value}
                onChangeText={t => setValue(t)}
                onFocus={() => setPlaceholderTextInput('')}
                keyboardType={'decimal-pad'}
            />
        </View>
    )
}