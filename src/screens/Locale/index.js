import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const data = [
  { id: "1", client_name: "Patrick Anjos", phone: "21966077757", email: "patrick@mail.com", latitude: -22.930538, longitude: -43.557632},
  { id: "2", client_name: "Alissa Drumond", phone: "219252515", email: "alissa@mail.com", latitude: -22.862161, longitude: -43.508810},
  { id: "3", client_name: "Diana", phone: "2196544584", email: "diana@mail.com", latitude: -22.966010, longitude: -43.617943},
]

export function LocaleClient() {

    const [markers] = useState(data);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
          <MapView style={styles.map}
            initialRegion={
              {
                latitude: markers[0].latitude,
                longitude: markers[0].longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            }
          >
            {markers.map((local, indice) => {
                return (
                  <Marker key={indice} coordinate={
                    {
                      latitude: local.latitude,
                      longitude: local.longitude
                    }
                  }
                    onPress={() => navigation.navigate('Detail', local)}
                  />
                )
            })}
          </MapView>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });