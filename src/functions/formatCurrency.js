export default (number, numberDecimalPlace, simbol) => {
    let arrayNumber = Object.values(String(number).replace(simbol, ''));
    let numberLaterDot = arrayNumber.indexOf(',') >= 0 ? arrayNumber.splice(arrayNumber.indexOf(',')) : []
    let arrayNumberFinal = [];
    let newNumber = '';
    let indexAddDot = 3;
    let newValue = '';

    if(arrayNumber.length == 0){ //Pronto
        if(numberLaterDot.length == 0){
            return {
                value: '0',
                string: ''
            };
        }else{
            arrayNumberFinal.push('0');
    
            if(numberLaterDot.length == 1){
                arrayNumberFinal.push(numberLaterDot[0]);
            }else if(numberLaterDot.length > 1){
                if(!numberDecimalPlace){
                    numberLaterDot.forEach(e => {
                        arrayNumberFinal.push(e)
                    })
                }else{
                    for(let i = 0; i < numberDecimalPlace; i++){
                        arrayNumberFinal.push(numberLaterDot[i]);
                    }
                }
            }
    
            arrayNumberFinal.forEach(e => {
                newNumber += e
            })
    
            return {
                value: newNumber,
                string: !simbol || simbol == '' ? newNumber : simbol + newNumber
            };
        }
    }else if(arrayNumber.length <= 3){ //Pronto
        arrayNumber.forEach(e => {
            arrayNumberFinal.push(e)
        })

        if(numberLaterDot.length == 1){
            arrayNumberFinal.push(numberLaterDot[0]);
        }else if(numberLaterDot.length > 0){
            if(!numberDecimalPlace){
                numberLaterDot.forEach(e => {
                    arrayNumberFinal.push(e)
                })
            }else{
                for(let i = 0; i < (numberDecimalPlace + 1); i++){
                    if(typeof(numberLaterDot[i]) !== 'undefined'){
                        arrayNumberFinal.push(numberLaterDot[i]);
                    }
                }
            }
        }

        arrayNumberFinal.forEach(e => {
            newNumber += e
        })

        return {
            value: newNumber,
            string: !simbol || simbol == '' ? newNumber : simbol + newNumber
        }
    }else{ //Refatorar
        arrayNumber = arrayNumber.filter(e => {
            if(!/[.]/.test(e)){
                return e;
            }
        })

        arrayNumber.forEach(e => {
            newValue += e
        })
        
        if(numberLaterDot.length > 1){
            numberLaterDot.forEach(e => {
                newValue += e
            })
        }

        while(arrayNumber.length > indexAddDot){
            arrayNumber.splice((arrayNumber.length - indexAddDot), 0, '.')
            indexAddDot +=4
        }

        arrayNumber.forEach(e => {
            arrayNumberFinal.push(e);
        })

        if(numberLaterDot.length > 0){
            if(!numberDecimalPlace){
                numberLaterDot.forEach(e => {
                    arrayNumberFinal.push(e)
                })
            }else{
                for(let i = 0; i < (numberDecimalPlace + 1); i++){
                    if(!numberLaterDot[i]){
                        break
                    }else{
                        arrayNumberFinal.push(numberLaterDot[i]);
                    }
                }
            }
        }

        arrayNumberFinal.forEach(e => {
            newNumber += e
        })

        return {
            value: newValue,
            string: !simbol || simbol == '' ? newNumber : simbol + newNumber
        }
    }
}