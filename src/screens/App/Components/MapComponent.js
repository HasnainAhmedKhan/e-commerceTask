import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapComponent = ({userLocation}) => {
  const mapViewRef = useRef(null);

  useEffect(() => {
    if (userLocation && mapViewRef.current) {
      mapViewRef.current.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08,
      }, 1000);
    }
  }, [userLocation]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        initialRegion={{
          latitude: userLocation ? userLocation.latitude : 37.78825,
          longitude: userLocation ? userLocation.longitude : -122.4324,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
        provider="google"
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  map: {
    height: 500,
  },
});

export default MapComponent;
