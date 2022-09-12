//Style
import Style from './style';

//React
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default ({ value, setValue }) => {
    let [placeholder, setPlaceHolder] = useState('Digite o valor que deseja simular');

    return(
        <View style={Style.container}>
            <Text style={Style.text}>Valor que deseja comprar</Text>
            <TextInput
                style={Style.textInput}
                value={String(value)}
                keyboardType={'number-pad'}
                onChangeText={t => setValue(t)}
                placeholder={placeholder}
                placeholderTextColor={'#b2bec3'}
                onFocus={() => setPlaceHolder('')}
            />
        </View>
    )
}