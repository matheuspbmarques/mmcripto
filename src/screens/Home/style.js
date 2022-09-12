import { StyleSheet } from 'react-native';

const blackDefault = '#111111';
const fontSizeDefault = 16;
const whiteDefault = '#F6F6F6';

export default StyleSheet.create({
    containerSafeAre:{
        flex: 1,
        backgroundColor: '#111',
        paddingTop: 100
    },
    container: {
        backgroundColor: '#F6F6F6',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingBottom: 20
    },
    styleContentBoxWithTitle_container:{
        marginTop: 20,
        paddingHorizontal: 20
    },
    styleContentBoxWithTitle_title:{
        color: blackDefault,
        fontSize: fontSizeDefault,
        marginBottom: 5
    },
    styleContentBoxWithTitle_containerContent:{
        borderWidth: 2,
        borderColor: blackDefault,
        height: 40
    },
    styleContentBoxWithTitle_content:{
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
        color: blackDefault,
        fontSize: 16
    },
    styleTextInputWithTitle_container:{
        marginTop: 20,
        paddingHorizontal: 20
    },
    styleTextInputWithTitle_title:{
        fontSize: 16,
        color: blackDefault,
        marginBottom: 5
    },
    styleTextInputWithTitle_textInput:{
        height: 40,
        borderWidth: 2,
        borderColor: blackDefault,
        fontSize: 16,
        textAlign: 'center',
        color: blackDefault
    },
    button: {
        marginTop: 20,
        backgroundColor: blackDefault,
        height: 40,
        marginHorizontal: 20
    },
    buttonText: {
        color: whiteDefault,
        fontSize: fontSizeDefault,
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center'
    }
})