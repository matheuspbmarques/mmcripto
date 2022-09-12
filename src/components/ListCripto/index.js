//Style
import Style from './style';

//React
import React, { useState, useEffect  } from 'react';
import { View, Text, TextInput, FlatList, TouchableNativeFeedback } from 'react-native';

//Components
import Item from './Item';

//Datas
import cryptos from '../../json/listCryptos';

//Lib
import Icon from 'react-native-vector-icons/Ionicons';

export default ({setShortName}) => {
    let [searchCrypto, setSearchCrypto] = useState('');
    let [list, setList] = useState(cryptos);
    let [displayList, setDisplayList] = useState('none');
    let [statusInputText, setStatusInputText] = useState(true);
    let [placeholderInputText, setPlaceholderInputText] = useState('Digite o nome da criptomoeda');

    useEffect(() => {
        if(searchCrypto === ''){
            setStatusInputText(true)
            setList([]);
            setShortName('');
            setDisplayList('none');
        }else{
            setDisplayList('flex');
            const cryptoFiltered = cryptos.filter(crypto => {
                if(crypto.longName.toLocaleLowerCase().indexOf(searchCrypto.toLocaleLowerCase()) > -1){
                    return true;
                }else{
                    return false;
                }
            })

            if(cryptoFiltered.length > 0){
                for(let i = 0; i < cryptoFiltered.length; i++){
                    if(cryptoFiltered[i].longName.toLocaleLowerCase() == searchCrypto.toLocaleLowerCase()){
                        setStatusInputText(true)
                        setList([]);
                        setShortName(cryptoFiltered[i].shortName);
                        break
                    }else{
                        setStatusInputText(false)
                        setList(cryptoFiltered);
                        setShortName('');
                    }
                }
            }else{
                setStatusInputText(false)
            }
        }
    }, [searchCrypto])

    return(
        <View style={Style.container}>
            <Text style={Style.text}>Criptomoeda</Text>
            <View style={Style.containerInput}>
                <TextInput
                    style={[Style.textInput, {backgroundColor: statusInputText ? '#F6F6F6' : '#ff7675'}]}
                    placeholder={placeholderInputText}
                    placeholderTextColor={'#B2BEC3'}
                    value={searchCrypto}
                    onChangeText={t => setSearchCrypto(t)}
                    onFocus={() => setPlaceholderInputText('')}
                    onEndEditing={() => setPlaceholderInputText('Digite o nome da criptomoeda')}
                />
                <TouchableNativeFeedback onPress={() => {setSearchCrypto('')}}>
                    <View style={[Style.containerIcon, Style.containerIconClose]}>
                        <Icon style={Style.icon} name='close' color='#F6F6F6' size={16} />
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => {
                    if(searchCrypto == ''){
                        setDisplayList('flex')
                        setList(cryptos);
                    }else{
                        if(displayList == 'none'){
                            setDisplayList('flex')
                        }else{
                            setDisplayList('none');
                        }
                    }
                }}>
                    <View style={Style.containerIcon}>
                        <Icon style={Style.icon} name='list' color='#F6F6F6' size={16} />
                    </View>
                </TouchableNativeFeedback>
            </View>
            <FlatList
                style={[Style.list, {
                    display: displayList
                }]}
                data={list}
                renderItem={({item}) => <Item item={item} setLongName={setSearchCrypto} setShortName={setShortName} />}
            />
        </View>
    )
}