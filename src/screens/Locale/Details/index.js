import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function Details() {

    const { params } = useRoute();
    const [address, setAddress] = useState({});

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${params.latitude}&lon=${params.longitude}&format=json`)
        .then(async (request) => {
            const data = await request.json();
            setAddress(data.address);
        })

    }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{params.client_name}</Text>
        <Text style={styles.description}>Comprou uma mala há 2 meses.</Text>

    <Text style={styles.section}>Endereço</Text>
    <Text style={styles.text}>{address.road}</Text>
    <Text style={styles.text}>{address.city}</Text>
    <Text style={styles.text}>{address.suburb}</Text>
    <Text style={styles.text}>{address.postcode}</Text>
    <Text style={styles.text}>{address.state}</Text>
    <Text style={styles.text}>{address.city_district}</Text>

    <Text style={styles.section}>Contato</Text>
    <Text style={styles.text}>{params.phone}</Text>
    <Text style={styles.text}>E-mail: {params.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0f0f5",
        padding: 20
    },
    title: {
        color: "#322153",
        fontSize: 28,
        fontWeight: 'bold',

    },
    description: {
        color: "#6C6C80",
        fontSize: 18,
        fontWeight: '400'
    },
    section: {
        color: "#322153",
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 20
    },
    text: {
        color: "#6C6C80",
        fontSize: 16,
    }
})