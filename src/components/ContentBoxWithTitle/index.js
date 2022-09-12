//React
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function formatCurrency (number, numberDecimalPlace) {
    let arrayNumber = Object.values(String(parseFloat(number)))
    let positionDot = arrayNumber.indexOf('.');
    let numberLaterDot = positionDot >= 0 ? arrayNumber.splice(positionDot) : [];
    let arrayNumberFinal = [];
    let newNumber = '';
    let indexAddDot = 3;

    numberLaterDot.shift();

    if(arrayNumber.length <= 0){
        arrayNumberFinal.push('0,');

        if(numberLaterDot.length <= 0){
            if(!numberDecimalPlace){
                arrayNumberFinal.push('00');
            }else{
                for(let i = 0; i < numberDecimalPlace; i++){
                    arrayNumberFinal.push('0')
                }
            }
        }else{
            if(!numberDecimalPlace){
                numberLaterDot.forEach(e => {
                    arrayNumberFinal.push(e);
                })
            }else{
                for(let i = 0; i < numberDecimalPlace; i++){
                    if(typeof(numberLaterDot[i]) !== 'undefined'){
                        arrayNumberFinal.push(numberLaterDot[i]);
                    }
                }
            }
        }

        arrayNumberFinal.forEach(e => {
            newNumber += e
        })

        return newNumber;
    }else if(arrayNumber.length <= 3){
        arrayNumber.forEach(e => {
            arrayNumberFinal.push(e)
        })

        if(numberLaterDot.length == 0){
            arrayNumberFinal.push(',00');
        }else if(numberLaterDot.length == 1){
            arrayNumberFinal.push(',');
            console.log(numberLaterDot[0]);
            arrayNumberFinal.push(numberLaterDot[0]);
            arrayNumberFinal.push('0');
        }else{
            if(!numberDecimalPlace){
                arrayNumberFinal.push(',')
                numberLaterDot.forEach(e => {
                    arrayNumberFinal.push(e)
                })
            }else{
                arrayNumberFinal.push(',')
                for(let i = 0; i < numberDecimalPlace; i++){
                    if(typeof(numberLaterDot[i]) !== 'undefined'){
                        arrayNumberFinal.push(numberLaterDot[i]);
                    }
                }
            }
        }

        arrayNumberFinal.forEach(e => {
            newNumber += e
        })

        return newNumber;
    }else{
        while (arrayNumber.length > indexAddDot) {
            arrayNumber.splice(arrayNumber.length - indexAddDot, 0, '.')
            indexAddDot += 4;
        }

        arrayNumber.forEach(e => {
            arrayNumberFinal.push(e);
        })

        if(numberLaterDot.length == 0){
            arrayNumberFinal.push(',00');
        }else{
            arrayNumberFinal.push(',');

            if(numberLaterDot.length == 1){
                arrayNumberFinal.push(numberLaterDot[0]);
                arrayNumberFinal.push('0');
            }else{
                if(!numberDecimalPlace){
                    numberLaterDot.forEach(e => {
                        arrayNumberFinal.push(e);
                    })
                }else{
                    for(let i = 0; i < numberDecimalPlace; i++){
                        if(typeof(numberLaterDot[i]) !== 'undefined'){
                            arrayNumberFinal.push(numberLaterDot[i]);
                        }
                    }
                }
            }

        }

        arrayNumberFinal.forEach(e => {
            newNumber += e
        })

        return newNumber;
    }
}

export default ({
    styleContainer,
    styleTitle,
    styleContainerContent,
    styleContent,
    title,
    simbol,
    content,
    numberDecimalPlace
}) => {
    return(
        <View style={[styleContainer]}>
            <Text style={[styleTitle]}>{String(title)}</Text>
            <View style={[styleContainerContent]}>
                <Text style={[styleContent]}>{
                    simbol == '' ? isNaN(content) ? formatCurrency(0, numberDecimalPlace) : formatCurrency(content, numberDecimalPlace) : isNaN(content) ? simbol + formatCurrency(0, numberDecimalPlace) : simbol + formatCurrency(content, numberDecimalPlace)
                }</Text>
            </View>
        </View>
    )
}