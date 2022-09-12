//Style
import Style from './style';

//React
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';

//Components
import Header from '../../components/Header';
import ListCripto from '../../components/ListCripto';
import ContentBoxWithTitle from '../../components/ContentBoxWithTitle';
import ButtonWithText from '../../components/Button';
import TextInputWithTitle from '../../components/TextInputWithTitle';

export default () => {
    let [cryptoShortName, setCryptoShortName] = useState('');
    let [cryptoCurrentValeu, setCryptoCurrentValue] = useState();
    let [valueBuyCrypto, setValueBuyCrypto] = useState({string: '', value: ''});
    let [valueInCrypto, setValueInCrypto] = useState();
    let [amoutCryptoWithdrawMoney, setAmoutCryptoWithdrawMoney] = useState({string: '', value: ''});
    let [grossValue, setGrossValue] = useState();
    let [netValue, setNetValue] = useState();

    useEffect(() => { //Informa o valor atual de mercado de determinada criptomoeda
        if(cryptoShortName == ''){
            setCryptoCurrentValue(0);
            setAmoutCryptoWithdrawMoney({string: '', value: ''});
        }else{
            fetch(`https://www.mercadobitcoin.net/api/${cryptoShortName}/ticker/`).then(res => {
                res.json().then(data => {
                    setCryptoCurrentValue(data.ticker.last);
                    setAmoutCryptoWithdrawMoney({string: '', value: ''});
                    setGrossValue(0);
                    setNetValue(0);
                })
            })
        }
    }, [cryptoShortName])

    useEffect(() => { //Calcula o valor em criptomoeda
        if(cryptoCurrentValeu == '' || valueBuyCrypto.value == ''){
            setValueInCrypto(0);
        }else{
            setValueInCrypto(parseFloat(valueBuyCrypto.value).toFixed(2) / parseFloat(cryptoCurrentValeu).toFixed(2));
        }
    }, [cryptoCurrentValeu, valueBuyCrypto])

    useEffect(() => { //Calcula o valor do lucro bruto
        setGrossValue(parseFloat(parseFloat(valueInCrypto) * parseFloat(amoutCryptoWithdrawMoney.value).toFixed(2)))
    }, [valueInCrypto, amoutCryptoWithdrawMoney]);

    useEffect(() => { //Calcula o valor líquido
        setNetValue(parseFloat(parseFloat(grossValue) - parseFloat(valueBuyCrypto.value)))
    }, [grossValue])

    return(
            <SafeAreaView style={Style.containerSafeAre}>
                <Header />
                <View style={Style.container}>
                    <ListCripto setShortName={setCryptoShortName} />
                    <ContentBoxWithTitle
                        title='Valor atual da criptomoeda'
                        simbol={'R$'}
                        content={cryptoCurrentValeu}
                        numberDecimalPlace={2}
                        styleTitle={Style.styleContentBoxWithTitle_title}
                        styleContainer={Style.styleContentBoxWithTitle_container}
                        styleContainerContent={Style.styleContentBoxWithTitle_containerContent}
                        styleContent={Style.styleContentBoxWithTitle_content}
                    />
                    <TextInputWithTitle
                        title={'Valor que deseja comprar'}
                        data={valueBuyCrypto.string}
                        setData={setValueBuyCrypto}
                        styleContainer={Style.styleTextInputWithTitle_container}
                        styleTitle={Style.styleTextInputWithTitle_title}
                        placeholder={'Digite o valor que deseja simular'}
                        placeholderColor={'#b2bec3'}
                        styleTextInput={Style.styleTextInputWithTitle_textInput}
                        numberDecimalPlace={2}
                        simbol={'R$'}
                    />
                    <ContentBoxWithTitle
                        title='Valor que irá ter em criptomoeda'
                        simbol={''}
                        content={valueInCrypto}
                        numberDecimalPlace={undefined}
                        styleTitle={Style.styleContentBoxWithTitle_title}
                        styleContainer={Style.styleContentBoxWithTitle_container}
                        styleContainerContent={Style.styleContentBoxWithTitle_containerContent}
                        styleContent={Style.styleContentBoxWithTitle_content}
                    />
                    <TextInputWithTitle
                        title={'Em qual valor da criptomoeda você deseja retirar o seu dinheiro?'}
                        data={amoutCryptoWithdrawMoney.string}
                        setData={setAmoutCryptoWithdrawMoney}
                        styleContainer={Style.styleTextInputWithTitle_container}
                        styleTitle={Style.styleTextInputWithTitle_title}
                        placeholder={'Digite o valor que deseja simular'}
                        placeholderColor={'#b2bec3'}
                        styleTextInput={Style.styleTextInputWithTitle_textInput}
                        numberDecimalPlace={2}
                        simbol={'R$'}
                    />
                    <ContentBoxWithTitle
                        title='Lucro bruto'
                        simbol={'R$'}
                        content={grossValue}
                        numberDecimalPlace={2}
                        styleTitle={Style.styleContentBoxWithTitle_title}
                        styleContainer={Style.styleContentBoxWithTitle_container}
                        styleContainerContent={Style.styleContentBoxWithTitle_containerContent}
                        styleContent={Style.styleContentBoxWithTitle_content}
                    />
                    <ContentBoxWithTitle
                        title='Lucro líquido'
                        simbol={'R$'}
                        content={netValue}
                        numberDecimalPlace={2}
                        styleTitle={Style.styleContentBoxWithTitle_title}
                        styleContainer={Style.styleContentBoxWithTitle_container}
                        styleContainerContent={Style.styleContentBoxWithTitle_containerContent}
                        styleContent={Style.styleContentBoxWithTitle_content}
                    />
                    <ButtonWithText
                        styleButton={Style.button}
                        styleTextButton={Style.buttonText}
                        text='Limpar'
                        onPress={() => {
                            setCryptoShortName('');
                            setCryptoCurrentValue(0);
                            setValueBuyCrypto('');
                            setValueInCrypto(0);
                            setAmoutCryptoWithdrawMoney('');
                            setGrossValue(0);
                            setNetValue(0);
                        }}
                    />
                </View>
            </SafeAreaView>
    )
}