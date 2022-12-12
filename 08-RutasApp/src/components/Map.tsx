/* eslint-disable react-native/no-inline-styles */
import {StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Polyline, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function Map() {
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    currentLocation,
    stopFollowingUserLocation,
    routesLines,
  } = useLocation();

  // referencia del componente MapView
  const mapViewRef = React.useRef<MapView>();
  // referencia de la flag para seguir o no al gps
  const following = React.useRef<boolean>(true);

  // polyline show
  const [showPolyline, setShowPolyline] = React.useState(true);
  // el primer render ob mueve la camara hasta el lugar donde se encuentra el ususario en el mapa
  React.useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowingUserLocation();
      // todo: cancelar use effect al eliminar componente
    };
  }, []);

  // listener de cada nueva locacion se cambia la locacion en camara
  React.useEffect(() => {
    if (!following.current) {
      return;
    }
    // acomoda la camara del mapa
    mapViewRef.current?.animateCamera({
      center: {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      },
    });
  }, [currentLocation]);

  // funcion para centrar el mapa
  const centerPosition = async () => {
    // se obtienen las coordenadas actuales del dispositivo
    const {latitude, longitude} = await getCurrentLocation();
    // cambia la flag para seguir al usuario
    following.current = true;
    // se ejecuta la funcion animateCamera para centrar la camara del mapa
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }
  return (
    <>
      <Fab
        style={{
          zIndex: 9999,
          position: 'absolute',
          bottom: 80,
          right: 20,
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: 50,
        }}
        iconName="brush-outline"
        onPress={() => {
          setShowPolyline(!showPolyline);
        }}
      />
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{
          zIndex: 9999,
          position: 'absolute',
          bottom: 20,
          right: 20,
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: 50,
        }}
      />
      <MapView
        onTouchStart={() => {
          following.current = false;
        }}
        ref={el => (mapViewRef.current = el!)}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={[styles.map, styles.container]}
        showsUserLocation
        region={{
          latitude: initialPosition?.latitude || 37.78825,
          longitude: initialPosition?.longitude || -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {/* <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Here"
          description="Here is where you put the marquers coordenates"
          // image={{uri: 'custom_pin' }}
          // image={require('../assets/custom-marker.png')}
        /> */}
        {showPolyline && (
          <Polyline
            coordinates={routesLines}
            strokeColor="black"
            strokeWidth={3}
          />
        )}
      </MapView>
    </>
  );
}
