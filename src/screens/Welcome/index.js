import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'


import { useNavigation } from '@react-navigation/native';

export function Welcome() {

    const navigation = useNavigation();

  return (
    <View style={style.container}>
      
        <View style={style.containerLogo}>
            {/** Animated is lib to effect */}
            <Animatable.Image
                animation="flipInY"
                source={require('../../images/logo.png')}
                style={{width: "100%"}}
                resizeMode="contain"
            />
        </View>

        <Animatable.View style={style.containerForm} delay={600} animation="fadeInUp">
            <Text style={style.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
            <Text style={style.text}>Faça o login para começar</Text>

            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('SignIn')}>
                <Text style={style.buttonText}>Fazer Login</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#053'
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#053',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#A1A1A1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#053',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 18,
        color: '#FFFF',
        fontWeight: 'bold'
    }
})