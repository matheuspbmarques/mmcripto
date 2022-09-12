import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    text:{
        color: '#111111',
        fontSize: 16,
        marginBottom: 5
    },
    containerInput:{
        flexDirection: 'row'
    },
    textInput:{
        borderWidth: 2,
        borderColor: '#111111',
        height: 40,
        paddingHorizontal: 10,
        color: '#111111',
        flex: 1,
        fontSize: 16
    },
    containerIcon:{
        width: 40,
        height: 40,
        backgroundColor: '#111',
        alignItems: 'center'
    },
    icon:{
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    containerIconClose:{
        borderRightWidth: 2,
        borderRightColor: '#F6F6F6'
    },
    list:{
        position: 'absolute',
        marginTop: 63,
        width: '100%',
        backgroundColor: '#2F2F2F',
        elevation: 5,
        marginHorizontal: 20,
        zIndex: 1,
        maxHeight: 40*6
    },
    containerItem: {
        height: 40,
        paddingHorizontal: 10
    },
    textItem: {
        color: '#F6F6F6',
        fontSize: 16,
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})