import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export function SignIn() {

    const navigation = useNavigation()

  return (
    <View style={style.container}>
        <Animatable.View animation="fadeInLeft" delay={500} style={style.containerHeader}>
            <Text style={style.message}>Welcome!</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={style.containerForm}>
            <Text style={style.title}>Email</Text>
            <TextInput
                placeholder='Your login...'
                style={style.input}
            />
            <Text style={style.title}>Password</Text>
            <TextInput
                placeholder='Your Password...'
                style={style.input}
            />

            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('PrivateScreen')}>
                <Text style={style.buttonText}>Access</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonForgetPass}>
                <Text style={style.buttonTextForgetPass}>Forget your Password</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#053',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        padding: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28  
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    
    button: {
        backgroundColor: '#053',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,

        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color:'#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonForgetPass: {
        marginTop: 14,
        alignSelf: 'center',
    },
    buttonTextForgetPass: {
        color: "#A1a1a1"
    }   
})